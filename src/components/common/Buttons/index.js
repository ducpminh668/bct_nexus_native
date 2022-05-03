import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Fonts } from '../../../utils/fonts';

export const PrimaryOutlineButton = ({ label, onPress, disabled, size, rounded }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.root,
        disabled && styles.disabled,
        styles.primaryOutline,
        rounded && styles.rounded,
        size === 'small' && styles.small,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: size === 'small' ? 14 : 18,
          fontFamily: Fonts.Soft,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export const TextButton = ({ label, onPress, textStyle, style }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <TouchableOpacity style={[styles.root, style]} activeOpacity={0.6} onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          color: theme.colors.text_primary,
          fontFamily: Fonts.Soft,
          ...textStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styleSheet = theme =>
  StyleSheet.create({
    root: {
      borderRadius: 4,
      width: '100%',
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryOutline: {
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: theme.colors.primary,
    },
    rounded: {
      borderRadius: 12,
    },
    small: {
      height: 50,
    },
    disabled: {
      opacity: 0.3,
    },
  });
