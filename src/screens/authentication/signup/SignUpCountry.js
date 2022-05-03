import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import CountryPicker from '../../../components/forms/CountryPicker';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, ErrorMessage, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { globalStyles } from '../../../styles/global';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { nextStep } from '../../../redux/slices/authSlice';

const SignUpCountryScreen = (props) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const states = useSelector((state) => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    nationality: yup.string().required('This field is required'),
  });

  const handleSubmit = (values) => {
    dispatch(nextStep(values));
    props.navigation.navigate('SignUpAddressScreen');
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
        <Title label="COUNTRY OF RESIDENCE" />
        <Body2 label="The terms and services which apply to you. will depend on your country of residence" />
      </View>
      <View style={styles.container}>
        <Formik
          validationSchema={formikSchema}
          initialValues={{
            nationality: states.nationality,
          }}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            setFieldValue,
            values,
            errors,
          }) => (
            <>
              <View>
                <CountryPicker
                  country={values.nationality}
                  onSelectCountry={(country) => setFieldValue('nationality', country.name)}
                  error={errors.nationality}
                />
                <View style={{ marginTop: 14 }}>
                  <ErrorMessage message={errors.nationality} />
                </View>
              </View>
              <View>
                <Body2
                  style={{ marginBottom: 20 }}
                  textAlign="center"
                  color={theme.colors.text_disabled}
                  label="By pressing Sign up securely, you agree to our Teams & Conditions and Privacy Policy. Your data will
                  be securely encrypted with us."
                />
                <PrimaryOutlineButton
                  label="Continue"
                  onPress={handleSubmit}
                  disabled={!!Object.values(errors).length}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default SignUpCountryScreen;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      padding: padding.container,
      paddingTop: 40,
    },
    container: {
      padding: padding.container,
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
    },
    content: {
      flex: 1,
    },
    bottom: {
      paddingBottom: 20,
    },
    field: {
      display: 'flex',
      flexDirection: 'row',
    },
    picker: {
      height: 64,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderStyle: 'solid',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
    },
  });
