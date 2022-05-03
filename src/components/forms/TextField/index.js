import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../../utils/fonts';

import { Body2, ErrorMessage } from '../../common/Typography';

export const OutlineTextInput = ({ placeholder, label, value, onChange, onBlur, error, ...rest }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.root, error && styles.error]}>
      <View style={[styles.label, (value || focused) && styles.fixed]}>
        <Body2 color={error ? theme.colors.error : theme.colors.text_secondary} label={label} />
      </View>
      <TextInput
        style={styles.input}
        placeholderTextColor={theme.colors.text_disabled}
        placeholder={focused && !value ? placeholder : ''}
        value={value}
        onChangeText={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          setFocused(false);
          onBlur && onBlur(event);
        }}
        {...rest}
      />
    </View>
  );
};

export const StandardTextInput = ({
  name, error, placeholder, label, actionIcon, value, onChange, onAction, onBlur, ...rest
}) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const [focused, setFocused] = useState(false);

  return (
    <>
      <View style={[styles.root, (value || focused) && styles.standard, error && styles.error]}>
        <View style={[styles.label, (value || focused) && styles.standardFixed]}>
          <Body2 label={label} style={(value || focused) ? error ? styles.error : styles.primaryLabel : ''} />
        </View>
        <TextInput
          name={name}
          style={[styles.input, styles.standardInput]}
          placeholderTextColor={theme.colors.text_disabled}
          placeholder={focused && !value ? placeholder : ''}
          value={value}
          onChangeText={onChange}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            setFocused(false);
            onBlur && onBlur(event);
          }}
          {...rest}
        />
        {(Boolean(value) || focused) && (actionIcon ? (
          <TouchableOpacity
            onPress={onAction}
            activeOpacity={0.6}
            style={styles.actionIcon}
          >
            <Text style={{fontFamily: Fonts.Soft}}>
              {actionIcon}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onChange('')}
            activeOpacity={0.6}
            style={styles.actionIcon}
          >
            <Text>
              <Icon
                name="times-circle"
                size={20}
                style={{ color: theme.colors.text_disabled }}
              />
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ErrorMessage message={error} />
    </>
  );
};

const styleSheet = theme =>
  StyleSheet.create({
    root: {
      height: 64,
      maxHeight: 64,
      borderRadius: 4,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      flex: 1,
      position: 'relative',
      marginBottom: 14,
    },
    standard: {
      borderRadius: 0,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.primary,
      borderStyle: 'solid',
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: 0,
    },
    error: {
      color: theme.colors.error,
      borderColor: theme.colors.error,
      borderBottomColor: theme.colors.error,
    },
    input: {
      position: 'absolute',
      left: 16,
      top: 14,
      zIndex: 3,
      width: '100%',
      color: theme.colors.text_primary,
      fontSize: 14,
      fontFamily: Fonts.Soft,
    },
    standardInput: {
      top: 20,
      left: 0,
      fontFamily: Fonts.Soft,
    },
    label: {
      position: 'absolute',
      marginLeft: 20,
      zIndex: 1,
      top: 22,
    },
    fixed: {
      top: 6,
    },
    standardFixed: {
      marginLeft: 0,
      top: 8,
    },
    primaryLabel: {
      color: theme.colors.primary,
    },
    actionIcon: {
      position: 'absolute',
      top: 35,
      right: 10,
      zIndex: 10,
    },
  });
