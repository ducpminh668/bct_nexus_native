import moment from 'moment';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { gradientColor } from '../../../utils/constants';
import { Body1, Tiny } from '../Typography';

const Cell = ({ image }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const selectedStockNews = useSelector(state => state.portfolios.selectNews);
  // return null;
  if (selectedStockNews.length <= 0) {
    return null;
  }
  const { image_url, title = '', description = '', createdAt = '' } = selectedStockNews[0];
  const img = image_url ? { uri: image_url } : image;

  return (
    <View style={styles.container}>
      <FastImage source={img} style={styles.w100} />
      <LinearGradient colors={gradientColor} style={styles.content}>
        <View style={styles.description}>
          <Body1 label={title} numberOfLines={2} />
          <Tiny
            style={styles.vDescription}
            label={description}
            // ellipsizeMode="middle"
            numberOfLines={3}
          />
          {
            <Tiny
              style={{ textAlign: 'right' }}
              label={createdAt ? `Added: ${moment(createdAt).utc().fromNow()}` : ''}
            />
          }
        </View>
      </LinearGradient>
    </View>
  );
};

export default Cell;

const styleSheet = theme =>
  StyleSheet.create({
    vHorizontal: {
      flexDirection: 'row-reverse',
    },
    vDescription: {
      marginTop: 4,
      marginRight: 16,
      justifyContent: 'flex-end',
    },
    w100: {
      width: '100%',
      height: 145,
    },
    container: {
      borderRadius: 16,
      backgroundColor: theme.colors.surface2,
      display: 'flex',
      justifyContent: 'flex-end',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: 10,
    },
    content: {
      position: 'absolute',
      padding: 14,
      paddingBottom: 5,
      bottom: 0,
      zIndex: 4,
      justifyContent: 'flex-end',
    },
    description: {
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
