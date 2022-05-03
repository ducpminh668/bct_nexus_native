import React, { useContext } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { nextStep } from '../../../redux/slices/authSlice';
import { globalStyles } from '../../../styles/global';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { StandardTextInput } from '../../../components/forms/TextField';

const SignUpEmailScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    email: yup.string().email().required('This field is required'),
  });

  const handleSubmit = (values) => {
    dispatch(nextStep(values));
    props.navigation.navigate('SignUpPasswordScreen');
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
        <Title label="Email" />
        <Body2 label="We'll notify you of important changes, new features and benefits" />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          email: states.email,
        }}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
        }) => (
          <>
            <View style={styles.container}>
              <StandardTextInput
                label="Email address"
                value={values.email}
                onChange={handleChange('email')}
                error={errors.email}
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

export default SignUpEmailScreen;

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
