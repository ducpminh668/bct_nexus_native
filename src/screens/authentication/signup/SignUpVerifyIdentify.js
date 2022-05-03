import React, { useContext, useRef } from 'react';
import { SafeAreaView, StyleSheet, View, Image, TouchableOpacity, Alert } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Title, Subtitle2, Body2, Body1 } from '../../../components/common/Typography';
import PhotoIDSheet from '../../../components/authentication/PhotoIDSheet';
import { padding } from '../../../constants/variables';
import { globalStyles } from '../../../styles/global';
import { Signup } from '../../../lib/api/auth.api';

import Passport from '../../../assets/images/passport.png';
import Profile from '../../../assets/images/profile.png';
import Toast from 'react-native-simple-toast';

const SignUpVerifyIdentify = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const states = useSelector((state) => state.auth.onBoarding);

  const photoSheetRef = useRef();

  const handleSubmit = () => {
    Signup(states)
      .then((response) => {
        Toast.show(response?.message || 'Registration is successful');
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'AuthHome' }],
        });
      })
      .catch((error) => {
        Alert.alert(
          'Error',
          error.message,
          [],
          {
            cancelable: true,
          }
        );
      });
  };

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationProgressHeader onPress={() => props.navigation.goBack()} />
      <View style={styles.header}>
        <Title textAlign="center" label="Verify Identify" />
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={Passport} />
          <Subtitle2 style={{ marginBottom: 8, marginTop: 20 }} label="Government ID" />
          <Body2
            color={theme.colors.text_primary}
            label="Take a driver's license, national identify card or passport photo."
            textAlign="center"
          />
          <TouchableOpacity
            style={styles.link}
            onPress={() => photoSheetRef.current.open()}
          >
            <Icon
              name="camera"
              size={18}
              style={{ color: theme.colors.primary_light, marginRight: 6 }}
            />
            <Body1 color={theme.colors.primary_light} label="Take a photo" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image source={Profile} />
          <Subtitle2 style={{ marginBottom: 8, marginTop: 20 }} label="Selfie photo" />
          <Body2
            color={theme.colors.text_primary}
            label="It's required by law to verify your identify as new user."
            textAlign="center"
          />
          <TouchableOpacity onPress={() => props.navigation.navigate('FaceCaptureScreen')} style={styles.link}>
            <Icon
              name="user"
              size={18}
              style={{ color: theme.colors.primary_light, marginRight: 6 }}
            />
            <Body1 color={theme.colors.primary_light} label="Take a selfie" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <PrimaryOutlineButton
          label="Continue"
          onPress={handleSubmit}
        />
      </View>

      <PhotoIDSheet navigation={props.navigation} parentRef={photoSheetRef} />
    </SafeAreaView>
  );
};

export default SignUpVerifyIdentify;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      paddingHorizontal: padding.container,
      paddingBottom: 20,
    },
    container: {
      paddingHorizontal: 50,
      flex: 1,
    },
    card: {
      borderRadius: 8,
      backgroundColor: theme.colors.surface2,
      padding: 25,
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
    },
    bottom: {
      padding: padding.container,
      paddingBottom: 30,
    },
    link: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 16,
    },
  });
