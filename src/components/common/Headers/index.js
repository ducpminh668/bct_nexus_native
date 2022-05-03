import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from 'react-native-elements';
import { Subtitle2, Body1 } from '../Typography';
import { Fonts } from '../../../utils/fonts';

export const NavigationHeader = props => {
  const theme = useContext(ThemeContext).theme;
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).back}>
        <TouchableOpacity style={styles(theme).back} onPress={props.onPress}>
          <Icon
            name="angle-left"
            size={30}
            style={{color: theme.colors.text_primary}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles(theme).logo}>
        <Subtitle2 label={props.title} />
        {!!props.subtitle && (
          <Body1 color={theme.colors.text_disabled} label={props.subtitle} />
        )}
      </View>
      <View style={styles(theme).iconWrapper}>
        {!props.iconHidden && (
          <Icon
            name={props.actionType === 'notification' ? 'bell-o' : 'bookmark-o'}
            size={20}
            style={{ color: '#67C431', marginLeft: 24 }}
          />
        )}
      </View>
      {/*{props.iconHidden && <Text style={{width: 40}} />}*/}
    </View>
  );
};

export const NavigationProgressHeader = props => {
  const theme = useContext(ThemeContext).theme;

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).back}>
        <TouchableOpacity
          style={styles(theme).back}
          onPress={props.onPress}>
          <Icon
            name="angle-left"
            size={30}
            style={{color: theme.colors.disabled}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CameraCaptureHeader = props => {
  const theme = useContext(ThemeContext).theme;

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).back}>
        <TouchableOpacity style={styles(theme).back} onPress={props.onPress}>
          <Icon
            name="angle-left"
            size={30}
            style={{ color: theme.colors.text_primary }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...styles(theme).logo,
          paddingRight: 30,
        }}
      >
        <Subtitle2 label={props.label} />
      </View>
      <TouchableOpacity>
        <Icon
          name="question-circle-o"
          size={20}
          style={{ color: theme.colors.text_primary }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = theme =>
  StyleSheet.create({
    container: {
      height: hp(7),
      paddingHorizontal: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      marginTop: 20,
      position: 'relative',
    },
    time: {
      fontSize: 18,
      fontWeight: '500',
      color: theme.colors.text_primary,
      marginLeft: -10,
    },
    back: {
      alignItems: 'center',
      flexDirection: 'row',
      width: 50,
      height: 40,
    },
    mediumText: {
      fontFamily: Fonts.Soft,
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 30,
      lineHeight: 30,
      color: theme.colors.text_primary,
    },
    homeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    profileImage: {
      width: 45,
      height: 45,
      borderRadius: 50,
      marginRight: 16,
      marginTop: 12,
    },
    logo: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    iconWrapper: {
      minWidth: 40,
    },
  });
