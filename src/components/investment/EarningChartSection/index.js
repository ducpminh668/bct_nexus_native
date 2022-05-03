import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import BubbleImage from '../../../assets/images/bubble-chart.png';


const EarningChartSection = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <Image style={{ width: '100%' }} source={BubbleImage} />
    </View>
  );
};

export default EarningChartSection;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
  });
