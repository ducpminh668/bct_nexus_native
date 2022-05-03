import React, { useContext } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { nextStep } from '../../../redux/slices/authSlice';
import { globalStyles } from '../../../styles/global';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { StandardTextInput } from '../../../components/forms/TextField';

const SignUpNameScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required'),
  });

  const handleSubmit = (values) => {
    dispatch(nextStep(values));
    props.navigation.navigate('SignUpBirthdayScreen');
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
        <Title label="Name" />
        <Body2 label="As started on your official ID. We need your name to verify your identity.." />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          firstName: states.firstName,
          lastName: states.lastName,
          username: states.username,
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.container}>
              <StandardTextInput
                label="Legal first name"
                value={values.firstName}
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                error={touched.firstName && errors.firstName}
              />
              <StandardTextInput
                label="Legal last name"
                value={values.lastName}
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                error={touched.lastName && errors.lastName}
              />
              <StandardTextInput
                label="Alias (optional)"
                value={values.username}
                onChange={handleChange('username')}
              />
            </View>
            <View style={styles.bottom}>
              <PrimaryOutlineButton
                onPress={handleSubmit}
                label="Continue"
                disabled={!!Object.values(errors).length}
              />
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpNameScreen;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      padding: padding.container,
      paddingTop: 40,
    },
    container: {
      padding: padding.container,
      paddingTop: 0,
      flex: 1,
    },
    bottom: {
      padding: padding.container,
      paddingBottom: 30,
    },
  });
