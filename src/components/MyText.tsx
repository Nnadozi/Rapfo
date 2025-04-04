import { Text, TextStyle } from 'react-native';
import React from 'react';
import { useSettingsStore } from '../stores/useSettingStore';

interface TextProps {
  color?: string;
  fontSize?: 'small' | 'medium' | 'large' | 'XL';
  bold?: boolean;
  opacity?: number;
  textAlign?: TextStyle['textAlign'];
  style?: TextStyle;
  numberOfLines?: number;
  font?:string;
  onPress?: () => void;
  children: React.ReactNode;
}

const fontSizes = {
  small: 15,
  medium: 20,
  large: 25,
  XL: 30,
};

const MyText: React.FC<TextProps> = ({
  fontSize = 'medium',
  bold = false,
  color,
  children,
  style,
  opacity,
  textAlign,
  numberOfLines,
  font = "Figtree-Regular",
  onPress,
}) => {
  const {navigationTheme} = useSettingsStore()
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: fontSizes[fontSize],
          color: color ? color : navigationTheme.colors.text,
          opacity,
          textAlign,
          fontFamily: bold ? "Figtree-Bold" : font
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default MyText;
