import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Cell from './Cell';
import Hero from './Hero';
import SideVideo from './SideVideo';

import CellImage1 from '../../../assets/images/news_1.png';
import CellImage2 from '../../../assets/images/news_2.png';

import { Tiny } from '../Typography';

const Gallery = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <Hero />
        </View>
        <View style={styles.column}>
          <SideVideo />
        </View>
        <View style={styles.column}>
          <Cell image={CellImage1} />
          <Cell image={CellImage2} />
        </View>
      </View>
      <View style={styles.more}>
        <TouchableOpacity>
          <Tiny color={theme.colors.text_disabled} label="Show more" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Gallery;

const styleSheet = theme =>
  StyleSheet.create({
    content: {
      marginHorizontal: -6,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    hero: {
      width: wp(100) - 24,
      padding: 5,
    },
    column: {
      width: wp(50) - 15,
      padding: 5,
    },
    more: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 8,
    },
  });
