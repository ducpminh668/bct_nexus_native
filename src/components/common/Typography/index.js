import React, { useContext } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Fonts } from '../../../utils/fonts';

export const Header = ({ color, label, textAlign }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: theme.colors.text_primary,
        textAlign: textAlign || 'left',
        fontFamily: Fonts.Soft,
      }}
    >
      {label}
    </Text>
  );
};

export const Title = ({ color, label, textAlign }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 34,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: theme.colors.text_primary,
        textAlign: textAlign || 'left',
        fontFamily: Fonts.Soft,
      }}
    >
      {label}
    </Text>
  );
};

export const Subtitle1 = ({ color, label, style, textAlign, fontWeight }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 24,
        textTransform: 'uppercase',
        color: color || theme.colors.text_primary,
        letterSpacing: 0.6,
        textAlign: textAlign || 'left',
        fontWeight: fontWeight || 'bold',
        fontFamily: Fonts.Soft,
        ...style,
      }}
    >
      {label}
    </Text>
  );
};

export const Subtitle2 = ({ color, label, style, textAlign }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 18,
        color: color || theme.colors.text_primary,
        letterSpacing: 0.6,
        textAlign: textAlign || 'left',
        ...style,
        fontFamily: Fonts.Soft,
      }}
    >
      {label}
    </Text>
  );
};

export const Subtitle3 = ({ color, label, style, textAlign, fontWeight }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 16,
        color: color || theme.colors.text_primary,
        letterSpacing: 0.6,
        textAlign: textAlign || 'left',
        fontWeight: fontWeight || 'bold',
        ...style,
        fontFamily: Fonts.Soft,
      }}
    >
      {label}
    </Text>
  );
};

export const Body1 = ({ color, label, textAlign, style, ... props }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 14,
        color: color || theme.colors.text_primary,
        lineHeight: 20,
        textAlign: textAlign || 'left',
        ...style,
        fontFamily: Fonts.Soft,
      }}
      {... props}
    >
      {label}
    </Text>
  );
};

export const Body2 = ({ color, label, textAlign, style, ...props }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 12,
        color: color || theme.colors.text_secondary,
        lineHeight: 18,
        textAlign: textAlign || 'left',
        ...style,
        fontFamily: Fonts.Soft,
      }}
      {... props}
    >
      {label}
    </Text>
  );
};

export const Tiny = ({ color, label, textAlign, style, ...props }) => {
  const theme = useContext(ThemeContext).theme;

  return (
    <Text
      style={{
        fontSize: 10,
        color: color || theme.colors.text_secondary,
        lineHeight: 14,
        textAlign: textAlign || 'left',
        ...style,
        fontFamily: Fonts.Soft,
      }}
      {...props}
    >
      {label}
    </Text>
  );
};

export const ErrorMessage = ({ message }) => {
  const theme = useContext(ThemeContext).theme;
  if (!message) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: 12,
        color: theme.colors.error,
        lineHeight: 12,
        marginBottom: 10,
        marginTop: -6,
        fontFamily: Fonts.Soft,
      }}
    >
      {message}
    </Text>
  );
};
