import React, { useContext } from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { NavigationProgressHeader } from '../../../components/common/Headers';
import { padding } from '../../../constants/variables';
import { Body2, Title, Subtitle2 } from '../../../components/common/Typography';
import { globalStyles } from '../../../styles/global';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';

import NexusPad from '../../../assets/images/nexus_pad.png';

const SignUpStartScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
     <NavigationProgressHeader
       onPress={() => props.navigation.goBack()}
     />
      <View style={styles.pad}>
        <Subtitle2 style={styles.logo} label="NEXUS" />
        <Image source={NexusPad} />
      </View>
      <View style={styles.content}>
        <Title
          label="Let's get started"
          textAlign="center"
        />
        <Body2
          label="Lorem ipsum dolor sit amet, consectetur adipiscing elit duis. Lorem ipsum dolor amet."
          textAlign="center"
        />
      </View>
      <View style={styles.bottom}>
        <PrimaryOutlineButton
          label="Continue"
          onPress={() => props.navigation.navigate('SignUpPhoneScreen')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUpStartScreen;

const styleSheet = theme =>
  StyleSheet.create({
    pad: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 80,
      position: 'relative',
    },
    logo: {
      position: 'absolute',
      top: 110,
      left: wp(50) - 30,
    },
    content: {
      paddingHorizontal: padding.container,
      flex: 1,
    },
    bottom: {
      padding: padding.container,
      paddingBottom: 50,
      width: '100%',
    },
  });
