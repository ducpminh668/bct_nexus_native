import moment from 'moment';
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import VideoImage from '../../../assets/images/news_side.png';
import { gradientColor } from '../../../utils/constants';
import { Tiny } from '../Typography';

const SideVideo = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const selectedStockNews = useSelector(state => state.portfolios.selectNews);
  // return null;
  if (selectedStockNews.length <= 0) {
    return null;
  }

  const { image_url, createdAt = '' } = selectedStockNews[0];
  const img = image_url ? { uri: image_url } : VideoImage;

  return (
    <View style={styles.container}>
      <FastImage source={img} style={styles.w100} />
      <LinearGradient colors={gradientColor} style={styles.content}>
        <View style={styles.playWrapper}>
          <TouchableOpacity style={styles.btnPlay}>
            <View style={styles.playBtn}>
              <Icon
                name="play"
                size={16}
                style={{
                  color: theme.colors.surface1,
                  marginLeft: 8,
                  marginRight: 4,
                }}
              />
              <View style={styles.bar} />
            </View>
          </TouchableOpacity>
          {<Tiny label={createdAt ? `Added: ${moment(createdAt).utc().fromNow()}` : null} />}
        </View>
      </LinearGradient>
      {/* <View style={styles.mark}>
        <Tiny label={`Added: ${moment(createdAt).utc().fromNow()}`} />
      </View> */}
    </View>
  );
};

export default SideVideo;

const styleSheet = theme =>
  StyleSheet.create({
    content: {
      position: 'absolute',
      padding: 0,
      top: 0,
      left: 0,
      zIndex: 4,
      justifyContent: 'flex-end',
      height: 300,
      width: '100%',
    },
    btnPlay: {
      marginRight: 5,
    },
    w100: {
      width: '100%',
      height: 300,
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
    mark: {
      position: 'absolute',
      bottom: 14,
      right: 14,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    playWrapper: {
      position: 'absolute',
      bottom: 14,
      left: 10,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    playBtn: {
      width: 30,
      height: 30,
      borderRadius: 4,
      backgroundColor: theme.colors.text_secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    bar: {
      width: 30,
      height: 2,
      backgroundColor: theme.colors.primary_light,
      position: 'absolute',
      bottom: -13,
    },
  });
