import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PrimaryOutlineButton, TextButton } from '../../../components/common/Buttons';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { globalStyles } from '../../../styles/global';

import CircleBg from '../../../assets/images/overlays/circle_bg.png';
import FaceId from '../../../assets/images/faceId.png';

const LoginStartScreen = (props) => {
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
      <NavigationProgressHeader onPress={() => props.navigation.goBack()} />
      <View style={styles.top}>
        <Image style={styles.bg} source={CircleBg} />
        <Image style={styles.faceId} source={FaceId} />
      </View>
      <View style={styles.header}>
        <Title label="Sign in to nexus" textAlign="center" />
        <Body2 label="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis." textAlign="center" />
      </View>

      <View style={styles.bottom}>
        <View style={styles.button}>
          <PrimaryOutlineButton
            onPress={() => props.navigation.navigate('FaceCaptureScreen')}
            label="Face ID"
          />
        </View>
        <View style={styles.button}>
          <TextButton
            label="Password"
            onPress={() => props.navigation.navigate('LoginEmailScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginStartScreen;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      marginTop: -40,
      marginBottom: 10,
      padding: padding.container,
      paddingTop: 40,
      flex: 1,
    },
    container: {
      padding: padding.container,
      flex: 1,
      backgroundColor: 'red',
    },
    content: {
      flex: 1,
    },
    top: {
      position: 'relative',
      height: 420,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bg: {
      position: 'absolute',
      top: 10,
      width: wp(100),
    },
    faceId: {
      width: 80,
      height: 80,
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
  });
