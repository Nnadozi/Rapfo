import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import { useState, useRef } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  PanResponder, 
  Animated, 
  Image, 
  ActivityIndicator, 
  ScrollView 
} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import PageBody from '../components/PageBody';
import React from 'react';
import Markdown from "react-native-markdown-display"
import Latex from 'react-latex-next';

const OPENAI_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

const Home = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef<typeof Camera | null>(null);

  const [boxSize, setBoxSize] = useState({ width: 200, height: 200 });
  const boxSizeAnim = new Animated.ValueXY({ x: boxSize.width, y: boxSize.height });

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      let newWidth = Math.max(150, Math.min(gesture.moveX, 300));
      let newHeight = Math.max(150, Math.min(gesture.moveY, 300));
      boxSizeAnim.setValue({ x: newWidth, y: newHeight });
    },
    onPanResponderRelease: () => {
      setBoxSize({ width: boxSizeAnim.x._value, height: boxSizeAnim.y._value });
    },
  });

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
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (cameraRef.current) {
      setLoading(true);
      const photo = await cameraRef.current.takePictureAsync();

      // Crop Image
      const croppedImage = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ resize: { width: photo.width, height: photo.height } }],
        { format: ImageManipulator.SaveFormat.JPEG, base64: true }
      );

      setPhotoUri(croppedImage.uri);

      if (croppedImage.base64) {
        await summarizeImage(croppedImage.base64);
      }

      setLoading(false);
    }
  }

  async function summarizeImage(base64Image: string) {
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
                { type: "text", text: 
                  `Please assist with this homework problem. 

                  For math-related questions, ensure to use LaTeX for proper symbols and notation. 
                  Please make sure to include the appropriate LaTeX syntax for all mathematical symbols and 
                  operators used in the equations. Use this style in all the mathematical equations I will send you. 

                  If the problem is complex or STEM-related, provide a step-by-step solution process to 
                  help me understand each part of the solution.
                  
                  Remember to be concise and clear in your explanations. Your showing this to a student,
                  so make sure the output is neat and easy to read.
                  `
                },
                { type: "image_url", image_url: { url: `data:image/jpeg;base64,${base64Image}` } }
            ]}
          ]
        })
      });

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        setSummary(data.choices[0].message.content);
      } else {
        setSummary("No summary available.");
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("Failed to summarize image.");
    }
  }

  return (
    <PageBody style={{ alignItems: 'stretch' }}>
      {!photoUri ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.overlay}>
            <Animated.View
              style={[styles.scanArea, { width: boxSizeAnim.x, height: boxSizeAnim.y }]}
              {...panResponder.panHandlers}
            />
          </View>

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Text style={styles.text}>📸 Capture</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <View style={styles.previewContainer}>
          <Image resizeMode="contain" source={{ uri: photoUri }} style={styles.previewImage} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  scanArea: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
    aspectRatio: 1,
    height: null,
    width: '100%',
    borderRadius: 10,
  },
  summaryBox: {
    width: '90%',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginTop: 10,
    maxHeight: 300, // Ensures scrolling for long summaries
  },
  summaryScroll: {
    maxHeight: 250, // Limits scroll area within the box
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
