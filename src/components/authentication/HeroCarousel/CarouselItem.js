import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';

import { Header, Body2 } from '../../common/Typography';

import CardImage from '../../../assets/images/visa_card.png';

const CarouselItem = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View>
      <Image
        resizeMode="cover"
        source={CardImage}
      />
      <View style={styles.content}>
        <Header label="The feature finance" />
        <Body2 label="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis. Lorem ipsum dolor amet." />
      </View>
    </View>
  );
};

export default CarouselItem;

const styleSheet = theme =>
  StyleSheet.create({
    content: {
      marginTop: 40,
      marginLeft: -20,
      paddingRight: 70,
    },
  });

