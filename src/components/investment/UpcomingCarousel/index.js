import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import Graph from '../../../assets/images/graph_icon.png';
import { Body2, Tiny } from '../../common/Typography';

const UpcomingCarousel = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const renderItem = () => (
    <View style={styles.item}>
      <View style={styles.row}>
        <View style={styles.icon}>
          <Icon name="amazon" size={20} style={{ color: theme.colors.text_primary }} />
        </View>
        <View style={styles.graphWrapper}>
          <Image style={styles.graph} source={Graph} />
        </View>
      </View>

      <View>
        <Body2 color={theme.colors.text_primary} label="Netflix Earnings" />
        <Tiny label="Past: 3.23" />
        <Tiny label="Expected: 3.4" />
        <Body2 color={theme.colors.primary} label="2 Days Left" />
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

export default UpcomingCarousel;

const styleSheet = theme =>
  StyleSheet.create({
    container: {},
    item: {
      borderWidth: 1,
      borderColor: theme.colors.primary,
      borderRadius: 12,
      paddingHorizontal: 14,
      marginRight: 10,
      paddingTop: 14,
      paddingBottom: 10,
      backgroundColor: theme.colors.primary_light && `${theme.colors.primary_light}40`,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icon: {
      backgroundColor: theme.colors.surface1,
      width: 50,
      height: 50,
      borderRadius: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    graphWrapper: {
      width: 50,
      paddingTop: 10,
    },
    graph: {
      height: 40,
      width: '100%',
    },
  });
