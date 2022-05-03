import React, { useContext } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, ErrorMessage, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { nextStep } from '../../../redux/slices/authSlice';
import { globalStyles } from '../../../styles/global';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import CustomDatePicker from '../../../components/forms/CustomDatePicker';

const SignUpBirthdayScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    dateOfBirth: yup.string().required('This field is required'),
  });

  const handleSubmit = (values) => {
    dispatch(nextStep(values));
    props.navigation.navigate('SignUpEmailScreen');
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
        <Title label="Date of birth" />
        <Body2 label="As started on your official ID. You must be 18 or order to open a Nexus account" />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          dateOfBirth: states.dateOfBirth,
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
              <CustomDatePicker
                date={values.dateOfBirth}
                onChangeDate={handleChange('dateOfBirth')}
                error={errors.dateOfBirth}
              />
              <View style={{ marginTop: 14 }}>
                <ErrorMessage message={errors.dateOfBirth} />
              </View>
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

export default SignUpBirthdayScreen;

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
