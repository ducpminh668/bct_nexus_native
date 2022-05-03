import React, { useContext, useState, useRef } from 'react';
import { Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';

import { padding } from '../../../constants/variables';
import BlackOverlay from '../../../assets/images/overlays/black_overlay.png';
import GreenOverlay from '../../../assets/images/overlays/green_overlay.png';

import CarouselItem from './CarouselItem';

const HeroCarousel = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef();
  const onSelect = indexSelected => {
    setIndexSelected(indexSelected);
  };
  const onTouchThumbnail = touched => {
    if (touched === indexSelected) {
      return;
    }
    carouselRef?.current?.snapToItem(touched);
  };

  return (
    <View style={styles.root}>
      <Image
        style={styles.blackOverlay}
        source={BlackOverlay}
      />
      <Image
        style={styles.greenOverlay}
        source={GreenOverlay}
      />
      <Carousel
        ref={carouselRef}
        layout="default"
        data={[1, 2]}
        onSnapToItem={index => onSelect(index)}
        sliderWidth={wp('100%')}
        slideStyle={styles.slide}
        itemWidth={wp('100%') + 50}
        renderItem={({item, index}) => (
          <CarouselItem key={index} />
        )}
      />
      <FlatList
        horizontal={true}
        data={[1, 2]}
        style={styles.bulletList}
        keyExtractor={item => item.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item}
            onPress={() => {
              onTouchThumbnail(index);
            }}
            activeOpacity={0.9}
            style={[
              styles.bullet,
              index === indexSelected
                ? styles.activeBullet
                : styles.normalBullet,
            ]}
          />
        )}
      />
    </View>
  );
};

export default HeroCarousel;

const styleSheet = theme =>
  StyleSheet.create({
    root: {
      position: 'relative',
      paddingTop: 100,
    },
    card: {
      paddingBottom: 40,
    },
    greenOverlay: {
      position: 'absolute',
      zIndex: 1,
      top: -20,
    },
    blackOverlay: {
      position: 'absolute',
      zIndex: 3,
      top: 220,
      left: -40,
    },
    slide: {
      paddingLeft: 50,
    },
    bulletList: {
      marginTop: 30,
      display: 'flex',
      paddingLeft: padding.container,
    },
    bullet: {
      width: 54,
      height: 2,
      marginRight: 4,
    },
    activeBullet: {
      backgroundColor: theme.colors.primary,
    },
    normalBullet: {
      backgroundColor: theme.colors.surface2,
    },
  });
