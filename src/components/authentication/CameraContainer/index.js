import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CameraCaptureHeader } from '../../common/Headers';
import { globalStyles } from '../../../styles/global';

import CheckIcon from '../../../assets/images/check_icon.png';

const CameraContainer = ({ label, children, navigation }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        ...styles.container,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <View style={styles.header}>
        <CameraCaptureHeader onPress={() => navigation.goBack()} label={label} />
      </View>
      <View style={styles.content}>
        {children}
      </View>
      <View style={styles.action}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.commonBtn}>
            <Icon
              name="bolt"
              size={20}
              style={{ color: theme.colors.text_disabled, fontWeight: 'lighter' }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.captureBtnWrapper}>
            <View style={styles.captureBtn}>
              <Image source={CheckIcon} />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.commonBtn}>
            <Icon
              name="camera"
              size={20}
              style={{ color: theme.colors.text_disabled, fontWeight: 'lighter' }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.anchor} />
    </SafeAreaView>
  );
};

export default CameraContainer;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      position: 'relative',
    },
    header: {
      position: 'absolute',
      top: 0,
      zIndex: 3,
      width: wp(100),
    },
    content: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      paddingTop: 70,
      width: wp(100),
    },
    captureBtnWrapper: {
      width: 74,
      height: 74,
      borderRadius: 10000,
      borderWidth: 2,
      borderColor: theme.colors.primary_light,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    captureBtn: {
      width: 62,
      height: 62,
      borderRadius: 10000,
      backgroundColor: theme.colors.primary_light,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    commonBtn: {
      width: 58,
      height: 58,
      borderRadius: 10000,
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    action: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      position: 'absolute',
      zIndex: 5,
      bottom: 0,
      width: wp(100),
      height: hp(16),
      alignItems: 'center',
      paddingBottom: 60,
      paddingHorizontal: 30,
    },
    anchor: {
      width: 120,
      height: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
      position: 'absolute',
      left: wp(50) - 60,
      bottom: 10,
      zIndex: 20,
    },
  });
