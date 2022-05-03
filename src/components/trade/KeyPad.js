import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Body1 } from '../common/Typography';

const keys = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['•', '0', '<'],
];
const KeyPad = ({ navigation, onPressNumber }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);


  return (
    <View style={styles.container}>
      {keys.map((row, i) => (
        <View key={i} style={styles.KeyPad_Number}>
          {row.map(key => (
            <TouchableOpacity
              key={key}
              onPress={() => onPressNumber(key)}
              style={styles.KeyPad_NumberBtn}
            >
              <Body1 style={styles.KeyPad_NumberTxt} label={key} />
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default KeyPad;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    KeyPad_Number: {
      flexDirection: 'row',
    },
    KeyPad_NumberTxt: {
      fontSize: 20,
      // fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
      color: theme.colors.text_primary,
    },
    KeyPad_NumberBtn: {
      width: '33.3%',
    },
    KeyPad_Btn: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    KeyPad_Btn__call: {
      backgroundColor: theme.colors.primary,
      width: 64,
      borderRadius: 40,
      paddingVertical: 20,
    },
    KeyPad_Btn__call_2: {
      backgroundColor: theme.colors.primary,
      width: 50,
      height: 50,
      justifyContent: 'center',
      borderRadius: 25,
      // paddingVertical: 10,
    },
    KeyPad_view: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      borderRadius: 50 / 2,
    },
  });
