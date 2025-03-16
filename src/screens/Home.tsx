import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import { useState, useRef } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  ActivityIndicator, 
  ScrollView, 
  Image
} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import PageBody from '../components/PageBody';
import React from 'react';
import Markdown from "react-native-markdown-display";

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const Home = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'answer' | 'explain'>('answer'); // Answer or Explain Mode
  const cameraRef = useRef<CameraView | null>(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <PageBody>
        <Text style={styles.message}>We need your permission to use the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </PageBody>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (!cameraRef.current) return;
    setLoading(true);
    
    const photo = await cameraRef.current.takePictureAsync();
    if (!photo) return;
    const croppedImage = await ImageManipulator.manipulateAsync(
      photo.uri,
      [{ resize: { width: photo.width, height: photo.height } }],
      { format: ImageManipulator.SaveFormat.JPEG, base64: true }
    );

    setPhotoUri(croppedImage.uri);
    if (croppedImage.base64) await summarizeImage(croppedImage.base64);

    setLoading(false);
  }

  async function summarizeImage(base64Image: string) {
    const modePrompt = mode === 'answer' 
      ? "Directly provide the answer to the problem."
      : "Provide a step-by-step breakdown explaining the solution.";

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "user", content: [
                { type: "text", text: `Mode: ${mode.toUpperCase()} Mode. ${modePrompt}` },
                { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
            ]}
          ]
        })
      });

      const data = await response.json();
      setSummary(data.choices?.[0]?.message?.content || "No summary available.");
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Failed to summarize image.");
    }
  }

  return (
    <PageBody style={{ alignItems: 'stretch' }}>
      {!photoUri ? (
        <>
          <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
            <View style={styles.overlay} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <Text style={styles.text}>📸 Capture</Text>
              </TouchableOpacity>
            </View>
          </CameraView>

          {/* Mode Selection */}
          <View style={styles.modeContainer}>
            <TouchableOpacity 
              style={[styles.modeButton, mode === 'answer' && styles.activeMode]}
              onPress={() => setMode('answer')}
            >
              <Text style={styles.text}>Answer Mode</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.modeButton, mode === 'explain' && styles.activeMode]}
              onPress={() => setMode('explain')}
            >
              <Text style={styles.text}>Explain Mode</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoUri }} style={styles.previewImage} />
          {loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <>
              {summary && (
                <View style={styles.summaryBox}>
                  <ScrollView style={styles.summaryScroll}>
                    <Markdown style={styles.summaryText}>{summary}</Markdown>
                  </ScrollView>
                </View>
              )}
              <TouchableOpacity style={styles.button} onPress={() => setPhotoUri(null)}>
                <Text style={styles.text}>Retake</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </PageBody>
  );
};

export default Home;

const styles = StyleSheet.create({
  message: {
    textAlign: 'center',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  captureButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: 300, // ✅ FIXED - Ensures image displays
    borderRadius: 10,
    resizeMode: 'contain',
  },
  summaryBox: {
    width: '90%',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginTop: 10,
    maxHeight: 300,
  },
  summaryScroll: {
    maxHeight: 250,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  modeButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  activeMode: {
    backgroundColor: 'blue',
  },
});
