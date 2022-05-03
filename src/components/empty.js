import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Fonts } from '../utils/fonts';

const Empty = () => {
  const theme = useContext(ThemeContext).theme;
  // const styles = styleSheet(theme);

  return (
    <View>
      <Text
        style={{
          fontFamily: Fonts.Soft,
        }}
      >
        Empty
      </Text>
    </View>
  );
};

export default Empty;

const styleSheet = theme => StyleSheet.create({});
