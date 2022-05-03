import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import PasswordInput from '../../../components/forms/PasswordInput';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { nextStep } from '../../../redux/slices/authSlice';
import { globalStyles } from '../../../styles/global';

const SignUpPasswordScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    password: yup.string().length(7).required('This field is required'),
  });

  const handleSubmit = (values) => {
    dispatch(nextStep(values));
    props.navigation.navigate('SignUpConfirmPassword');
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
        <Title label="Create Password" />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          password: states.password,
        }}
        onSubmit={handleSubmit}
      >
        {({
            handleSubmit,
            setFieldValue,
            setFieldError,
            values,
            errors,
          }) => (
          <>
            <View style={styles.container}>
              <PasswordInput
                value={values.password}
                onChangePassword={(value) => setFieldValue('password', value)}
              />
            </View>
            <View style={styles.bottom}>
              <PrimaryOutlineButton
                onPress={(event) => {
                  let flag = true;
                  if (!values.password) {
                    setFieldError('password', 'This field is required');
                    flag = false;
                  }
                  if (values.password.length !== 7) {
                    setFieldError('password', 'Password length should be 7');
                    flag = false;
                  }

                  if (flag) {
                    handleSubmit(event);
                  }
                }}
                label="Continue"
                disabled={values.password.length !== 7}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpPasswordScreen;

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
  });
