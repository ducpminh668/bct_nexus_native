import React, { useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { padding } from '../../../constants/variables';
import { Subtitle1, Subtitle3, Body1 } from '../../common/Typography';

import LicenseIcon from '../../../assets/images/license_icon.png';
import IdentifyIcon from '../../../assets/images/identy_icon.png';
import PassportIcon from '../../../assets/images/passport_Icon.png';

const PhotoIDSheet = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <RBSheet
      ref={props.parentRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.7)',
        },
        draggableIcon: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: theme.colors.surface2,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
      height={360}
    >
      <View style={styles.container}>
        <Subtitle1 label="Let's get you verified!" />
        <Body1 label="Which photo ID would you like to use?" />

        <View style={styles.content}>
          <TouchableOpacity style={styles.item}>
            <Image source={LicenseIcon} />
            <Subtitle3 style={styles.itemLabel} label="Driver's License" />
            <Icon
              name="angle-right"
              size={20}
              style={{ color: theme.colors.disabled }}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.item}>
            <Image source={IdentifyIcon} />
            <Subtitle3 style={styles.itemLabel} label="National Identify Card" />
            <Icon
              name="angle-right"
              size={20}
              style={{ color: theme.colors.disabled }}
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SignUpCapturePassport');
              props.parentRef.current.close();
            }}
            style={styles.item}
          >
            <Image source={PassportIcon} />
            <Subtitle3 style={styles.itemLabel} label="Passport" />
            <Icon
              name="angle-right"
              size={20}
              style={{ color: theme.colors.disabled }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.anchor} />
      </View>
    </RBSheet>
  );
};

export default PhotoIDSheet;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      paddingHorizontal: padding.container,
      paddingVertical: 0,
      position: 'relative',
    },
    content: {
      paddingTop: 10,
    },
    item: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 14,
    },
    itemLabel: {
      flex: 1,
      paddingLeft: 10,
    },
    divider: {
      width: '100%',
      borderTopWidth: 1,
      borderTopColor: theme.colors.border,
    },
    anchor: {
      width: 120,
      height: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
      position: 'absolute',
      left: wp(50) - 60,
      bottom: -30,
    },
  });
