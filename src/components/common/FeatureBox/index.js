import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';

import FeatureImage from '../../../assets/images/overlays/feature.png';

const FeatureBox = ({ children }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={FeatureImage} />
      {children}
    </View>
  );
};

export default FeatureBox;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: theme.colors.text_disabled,
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
    },
    image: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
    },
  });
