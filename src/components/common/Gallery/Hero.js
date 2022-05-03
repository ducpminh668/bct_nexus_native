import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import { Subtitle2, Body2, Body1 } from '../Typography';

const HeroImage = require('../../../assets/images/news_hero.png');
import { useSelector } from 'react-redux';
import moment from 'moment';
import { TYPE_NEWS } from '../../../redux/slices/portfolioSlice';
import { gradientColor } from '../../../utils/constants';

const Hero = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const selectedStockNews = useSelector(state => state.portfolios.selectNews);
  const selectedStock = useSelector(state => state.portfolios.selectedStock);
  const selectedCrypto = useSelector(state => state.portfolios.selectedCrypto);
  const selectTypeNew = useSelector(state => state.portfolios.newsFor);
  if (selectedStockNews.length <= 0) {
    return null;
  }

  const getInfoStock = () => {
    const name = selectedStock?.symbol || '';
    const price = +selectedStock?.change;
    const percent = +selectedStock?.changePercent;
    const isIncrease = price >= 0;
    return { name, price, percent, isIncrease };
  };

  const getInfoCrypto = () => {
    return { name: selectedCrypto.symbol, price: 0, percent: 0, isIncrease: true };
  };

  const { name, price, percent, isIncrease } = selectTypeNew === TYPE_NEWS.stocks ? getInfoStock() : getInfoCrypto();

  const { image_url, title = '', description = '', createdAt } = selectedStockNews[0];
  const img = image_url ? { uri: image_url } : HeroImage;

  return (
    <View style={styles.container}>
      <FastImage source={img} style={styles.w100} />
      <LinearGradient colors={gradientColor} style={styles.content}>
        <View style={styles.description}>
          <Subtitle2 label={title} />
          <Body2
            style={styles.body2}
            label={description}
            numberOfLines={3}
          />
          {<Body2 label={createdAt ? `Added: ${moment(createdAt).utc().fromNow()}` : ''} />}

          <View style={styles.mark}>
            <Body1 color={theme.colors.primary_light} label={name} />
            <Icon
              name={isIncrease ? 'caret-up' : 'caret-down'}
              size={20}
              style={{
                color: isIncrease ? theme.colors.primary_light : theme.colors.error,
                marginLeft: 8,
                marginRight: 4,
              }}
            />
            <Body2 color={isIncrease ? theme.colors.primary_light : theme.colors.error}
              label={`$${price} (${percent}%)`} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Hero;

const styleSheet = theme =>
  StyleSheet.create({
    body2: { marginTop: 4, marginBottom: 8 },
    w100: {
      width: '100%',
      height: 250,
    },
    container: {
      borderRadius: 16,
      backgroundColor: theme.colors.surface2,
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      overflow: 'hidden',
    },
    content: {
      position: 'absolute',
      padding: 14,
      bottom: 0,
      zIndex: 4,
      justifyContent: 'flex-end',
      height: 250,
    },
    description: {
      paddingRight: 40,
      position: 'relative',
    },
    mark: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
