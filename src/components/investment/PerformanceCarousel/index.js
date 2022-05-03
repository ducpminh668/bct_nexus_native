import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import { Body1, Subtitle1 } from '../../common/Typography';

const PerformanceCarousel = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const renderItem = () => (
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Body1 color={theme.colors.text_secondary} fontWeight="normal" label="24 hours" />
        <Subtitle1 color={theme.colors.primary_light} fontWeight="normal" label="+12%" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={[1, 2, 3]}
        renderItem={renderItem}
        sliderWidth={wp(100)}
        itemWidth={wp(100) / 2.5}
        autoplay={true}
        loop={true}
        activeSlideAlignment="start"
        inactiveSlideOpacity={1}
        activeSlideOffset={100}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default PerformanceCarousel;

const styleSheet = theme =>
  StyleSheet.create({
    container: {},
    item: {
      borderWidth: 1,
      borderColor: theme.colors.border_light,
      borderRadius: 12,
      paddingHorizontal: 14,
      marginRight: 10,
      paddingTop: 14,
      paddingBottom: 10,
    },
    itemContent: {
      display: 'flex',
      justifyContent: 'center',
    },
  });
