import { Formik } from 'formik';
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View, Alert } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import PasswordInput from '../../../components/forms/PasswordInput';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { globalStyles } from '../../../styles/global';
import { ErrorMessage } from '../../../components/common/Typography';
import { Signup } from '../../../lib/api/auth.api';
import Toast from 'react-native-simple-toast';

const SignUpConfirmPasswordScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    confirm: yup.string().length(7).required('This field is required'),
  });

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
        <Title label="Confirm Password" />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          confirm: '',
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          setFieldValue,
          values,
          errors,
          setFieldError,
          }) => (
          <>
            <View style={styles.container}>
              <PasswordInput
                value={values.confirm}
                onChangePassword={(value) => setFieldValue('confirm', value)}
              />
              <View style={styles.error}>
                <ErrorMessage message={errors.confirm} />
              </View>
            </View>
            <View style={styles.bottom}>
              <PrimaryOutlineButton
                onPress={() => {
                  if (values.confirm !== states.password) {
                    setFieldError('confirm', 'Password is not matched');
                  } else {
                    handleSubmit();
                  }
                }}
                label="Continue"
                disabled={values.confirm.length !== 7}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpConfirmPasswordScreen;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      padding: padding.container,
      paddingTop: 40,
    },
    container: {
      padding: padding.container,
      paddingTop: 100,
      flex: 1,
    },
    bottom: {
      padding: padding.container,
      paddingBottom: 30,
    },
    error: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
  });
