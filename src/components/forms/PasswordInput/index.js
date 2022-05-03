import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Fonts } from '../../../utils/fonts';

const PasswordInput = ({ value, onChangePassword }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const [password, setPassword] = useState(['', '', '', '', '', '', '']);

  useEffect(() => {
    if (value.length === 7) {
      setPassword(value.split(''));
    }
  }, [value]);

  const handleChangeValue = (value) => {
    const newValue = value.split('');
    if (newValue.length <= 7) {
      setPassword(password.map((item, index) => newValue[index] ? newValue[index] : ''));
    }
    if (newValue.length === 7) {
      onChangePassword(newValue.join(''));
    }
  };

  return (
    <View style={styles.container}>
      {password.map((item, index) => (
        <View key={index} style={[styles.dot, Boolean(item) && styles.active]} />
      ))}
      <TextInput
        autoFocus={true}
        style={styles.input}
        value={password.join('')}
        onChangeText={handleChangeValue}
      />
    </View>
  );
};

export default PasswordInput;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'relative',
    },
    input: {
      position: 'absolute',
      backgroundColor: 'transparent',
      width: 200,
      color: 'white',
      opacity: 0,
      fontFamily: Fonts.Soft,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 50,
      backgroundColor: theme.colors.text_disabled,
      marginHorizontal: 6,
    },
    active: {
      backgroundColor: theme.colors.primary,
    },
  });
