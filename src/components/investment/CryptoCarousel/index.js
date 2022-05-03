import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Body1, Body2, Subtitle2 } from '../../common/Typography';

const CryptoCarousel = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const renderItem = () => (
    <View style={styles.item}>
      <View style={styles.icon}>
        <Icon name="amazon" size={20} style={{ color: theme.colors.text_primary }} />
      </View>

      <View style={styles.row}>
        <View>
          <Body1 color={theme.colors.text_secondary} label="Bitcoin" />
          <Subtitle2 fontWeight="normal" label="+0.23%" />
        </View>
        <View style={styles.right}>
          <TouchableOpacity>
            <Body2 color={theme.colors.text_primary} label="24 h" />
          </TouchableOpacity>
        </View>
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

export default CryptoCarousel;

const styleSheet = theme =>
  StyleSheet.create({
    container: {},
    item: {
      borderWidth: 1,
      borderColor: theme.colors.text_disabled,
      borderRadius: 12,
      paddingHorizontal: 14,
      marginRight: 10,
      paddingTop: 14,
      paddingBottom: 10,
      backgroundColor: theme.colors.surface2,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    icon: {
      backgroundColor: theme.colors.surface1,
      width: 50,
      height: 50,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  });
