import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { Subtitle2 } from '../../components/common/Typography';
import { padding } from '../../constants/variables';
import { globalStyles } from '../../styles/global';
import HeroCarousel from '../../components/authentication/HeroCarousel';
import { PrimaryOutlineButton, TextButton } from '../../components/common/Buttons';

import CircleBg from '../../assets/images/overlays/circle_bg.png';

const AuthHomeScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
        position: 'relative',
      }}
    >
      <Image style={styles.bg} source={CircleBg} />
      <Subtitle2 style={styles.logo} label="NEXUS" />
      <View style={styles.content}>
        <HeroCarousel />
      </View>

      <View style={styles.bottom}>
        <View style={styles.button}>
          <PrimaryOutlineButton
            onPress={() => props.navigation.navigate('SignUpStartScreen')}
            label="Sign up"
          />
        </View>
        <View style={styles.button}>
          <TextButton
            label="Log in"
            onPress={() => props.navigation.navigate('LoginStartScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;

const styleSheet = theme =>
  StyleSheet.create({
    content: {
      flex: 1,
      position: 'relative',
    },
    logo: {
      position: 'absolute',
      top: 40,
      left: padding.container,
    },
    bottom: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: padding.container,
      paddingVertical: 40,
    },
    button: {
      width: '50%',
    },
    bg: {
      position: 'absolute',
      top: 60,
      left: -200,
      width: wp(150),
      opacity: 0.7,
    },
  });
