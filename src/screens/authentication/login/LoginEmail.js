import { Formik } from 'formik';
import React, { useContext, useState } from 'react';
import { ActivityIndicator, Alert, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import HeaderBg from '../../../assets/images/overlays/login_header.png';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { NavigationHeader } from '../../../components/common/Headers';
import { Body2, Title } from '../../../components/common/Typography';
import { StandardTextInput } from '../../../components/forms/TextField';
import { padding } from '../../../constants/variables';
import { Login } from '../../../lib/api/auth.api';
import { login } from '../../../redux/slices/authSlice';
import { globalStyles } from '../../../styles/global';

const LoginEmailScreen = props => {
  const theme = useContext(ThemeContext).theme;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const styles = styleSheet(theme);
  const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().min(6).max(7).required('Password field is required'),
  });
  const [isSecurity, setIsSecurity] = useState(true);

  const handleSubmit = value => {
    setLoading(true);
    Login(value.username, value.password)
      .then(response => {
        if (response.status === 'Success') {
          dispatch(login(response.token));
          props.navigation.navigate('TabNavigation');
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message, [], {
          cancelable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
        position: 'relative',
      }}
    >
      <Image style={styles.bg} source={HeaderBg} />
      <NavigationHeader title="NEXUS" onPress={() => props.navigation.goBack()} iconHidden />
      <Formik
        validationSchema={loginSchema}
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, handleBlur, values, errors, touched, setFieldValue }) => (
          <>
            <View style={styles.content}>
              <View style={styles.header}>
                <Title label="Log in" />
                <Body2 label="Welcome back! Please enter your details." />
              </View>
              <StandardTextInput
                label="Username"
                name="username"
                value={values.username}
                onChange={handleChange('username')}
                onAction={() => setFieldValue('username', '')}
                actionIcon={<Icon name="times-circle" size={20} style={{ color: theme.colors.text_disabled }} />}
                onBlur={handleBlur('username')}
                error={touched.username && errors.username}
              />
              <StandardTextInput
                label="Password"
                value={values.password}
                onChange={handleChange('password')}
                onAction={() => setIsSecurity(!isSecurity)}
                secureTextEntry={isSecurity}
                actionIcon={
                  <Icon
                    name={isSecurity ? 'eye-slash' : 'eye'}
                    size={20}
                    style={{ color: theme.colors.text_disabled }}
                  />
                }
                onBlur={handleBlur('password')}
                error={touched.password && errors.password}
              />
            </View>
            <View style={styles.bottom}>
              {loading ? (
                <ActivityIndicator color="#fff" size="large" />
              ) : (
                <PrimaryOutlineButton
                  label="Sign in"
                  onPress={handleSubmit}
                  disabled={!values.username || !values.password}
                />
              )}
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginEmailScreen;

const styleSheet = theme =>
  StyleSheet.create({
    bg: {
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    content: {
      flex: 1,
      paddingTop: 120,
      padding: padding.container,
    },
    header: {
      marginBottom: 20,
    },
    bottom: {
      padding: padding.container,
    },
  });
