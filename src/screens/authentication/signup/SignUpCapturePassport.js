import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { padding } from '../../../constants/variables';
import CameraContainer from '../../../components/authentication/CameraContainer';
import { Title, Body1 } from '../../../components/common/Typography';

import CardFocus from '../../../assets/images/card_focus.png';

const SignUpCapturePassport = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <>
      <CameraContainer navigation={props.navigation} label="Passport">
        <View style={styles.content}>
          <Image source={CardFocus} />
          <View style={styles.description}>
            <Title label="Front of card" textAlign="center" />
            <Body1 textAlign="center" label="Position all 4 corners of the front clearly in the frame." />
          </View>
        </View>
      </CameraContainer>
      {/*<RNCamera*/}
      {/*  ref={cameraRef}*/}
      {/*  base64*/}
      {/*  style={styles.camera}*/}
      {/*  type={cameraType}*/}
      {/*  flashMode={RNCamera.Constants.FlashMode.auto}*/}
      {/*  androidCameraPermissionOptions={{*/}
      {/*    title: 'Permission to use camera',*/}
      {/*    message: 'We need your permission to use your camera',*/}
      {/*    buttonPositive: 'Ok',*/}
      {/*    buttonNegative: 'Cancel',*/}
      {/*  }}*/}
      {/*  captureAudio*/}
      {/*/>*/}
    </>
  );
};

export default SignUpCapturePassport;

const styleSheet = theme =>
  StyleSheet.create({
    content: {
      paddingTop: 100,
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
    description: {
      padding: padding.container,
      paddingTop: 100,
    },
  });
