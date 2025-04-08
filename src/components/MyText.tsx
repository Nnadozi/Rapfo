import { Text, TextStyle } from 'react-native';
import React from 'react';
import Markdown from 'react-native-markdown-display';
import { useSettingsStore } from '../stores/useSettingStore';

interface TextProps {
  color?: string;
  reversedColor?: boolean;
  fontSize?: 'small' | 'biggerSmall' | 'medium' | 'large' | 'XL';
  bold?: boolean;
  opacity?: number;
  textAlign?: TextStyle['textAlign'];
  style?: TextStyle;
  numberOfLines?: number;
  font?: string;
  onPress?: () => void;
  children: React.ReactNode;
  markdown?: boolean;
}

const fontSizes = {
  small: 15,
  biggerSmall: 17.5,
  medium: 20,
  large: 25,
  XL: 30,
};

const MyText: React.FC<TextProps> = ({
  fontSize = 'medium',
  bold = false,
  color,
  reversedColor,
  children,
  style,
  opacity,
  textAlign,
  numberOfLines,
  font = 'Figtree-Regular',
  onPress,
  markdown = false,
}) => {
  const { navigationTheme } = useSettingsStore();

  const resolvedColor = color === 'primary'
    ? navigationTheme.colors.primary
    : color
      ? color
      : reversedColor
        ? navigationTheme.colors.card
        : navigationTheme.colors.text;

  const baseStyle: TextStyle = {
    fontSize: fontSizes[fontSize],
    color: resolvedColor,
    opacity,
    textAlign,
    fontFamily: bold ? 'Figtree-Bold' : font,
  };

  if (markdown && typeof children === 'string') {
    return (
      <Markdown
        style={{
          body: [baseStyle, style],
        }}
      >
        {children}
      </Markdown>
    );
  }

  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[baseStyle, style]}
    >
      {children}
    </Text>
  );
};

export default MyText;
