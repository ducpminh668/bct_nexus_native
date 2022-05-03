import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import CameraContainer from '../../components/authentication/CameraContainer';
import { Body1, Title } from '../../components/common/Typography';
import { padding } from '../../constants/variables';

import FaceFocus from '../../assets/images/face_focus.png';

const FaceCaptureScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <CameraContainer navigation={props.navigation} label="Selfie">
      <View style={styles.content}>
        <Image source={FaceFocus} />
        <View style={styles.description}>
          <Title label="Center your face" textAlign="center" />
          <Body1 textAlign="center" label="Align face to the center of the selfie area and then take a photo" />
        </View>
      </View>
    </CameraContainer>
  );
};

export default FaceCaptureScreen;

const styleSheet = theme =>
  StyleSheet.create({
    content: {
      paddingTop: 60,
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
    description: {
      padding: padding.container,
      paddingTop: 100,
    },
  });
