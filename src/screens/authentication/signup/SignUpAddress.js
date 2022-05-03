import React, { useContext } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { globalStyles } from '../../../styles/global';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { StandardTextInput } from '../../../components/forms/TextField';
import { nextStep } from '../../../redux/slices/authSlice';

const SignUpAddressScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    street: yup.string().required('This field is required'),
    flat: yup.string().required('This field is required'),
    pinCode: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
  });

  const handleSubmit = (values) => {
    dispatch(nextStep({ pinCode: values.pinCode }));
    props.navigation.navigate('SignUpNameScreen');
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
        <Title label="Home address" />
        <Body2 label="By law, we need your home address to open your account." />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          street: '',
          flat: '',
          pinCode: states.pinCode,
          city: '',
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
                label="Street and number"
                value={values.street}
                onChange={handleChange('street')}
                onBlur={handleBlur('street')}
                error={touched.street && errors.street}
              />
              <StandardTextInput
                label="Flat, suite, unit, building, floor, etc"
                value={values.flat}
                onChange={handleChange('flat')}
                onBlur={handleBlur('flat')}
                error={touched.flat && errors.flat}
              />
              <StandardTextInput
                label="Postal code"
                value={values.pinCode}
                onChange={handleChange('pinCode')}
                onBlur={handleBlur('pinCode')}
                error={touched.pinCode && errors.pinCode}
              />
              <StandardTextInput
                label="Town/City"
                value={values.city}
                onChange={handleChange('city')}
                onBlur={handleBlur('city')}
                error={touched.city && errors.city}
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

export default SignUpAddressScreen;

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
