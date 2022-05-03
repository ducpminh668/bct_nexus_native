import { Formik } from 'formik';
import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, ErrorMessage, Title } from '../../../components/common/Typography';
import CountryPicker from '../../../components/forms/CountryPicker';
import { OutlineTextInput } from '../../../components/forms/TextField';
import { padding } from '../../../constants/variables';
import { nextStep } from '../../../redux/slices/authSlice';
import { globalStyles } from '../../../styles/global';

const SignUpPhoneScreen = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const states = useSelector(state => state.auth.onBoarding);

  const formikSchema = yup.object().shape({
    country: yup.string().nullable().required('This field is required'),
    phoneNumber: yup.string().required('This field is required'),
  });

  const handleSubmit = values => {
    dispatch(nextStep(values));
    props.navigation.navigate('DigitCodeScreen');
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
        <Title label="SIGN UP TO NEXUS" />
        <Body2 label="We may store and send a verification code to this number." />
      </View>
      <Formik
        validationSchema={formikSchema}
        initialValues={{
          country: states.country,
          phoneNumber: states.phoneNumber,
        }}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.field}>
                <CountryPicker
                  isPhone
                  country={values.country}
                  onSelectCountry={country => setFieldValue('country', country.prefix)}
                  error={errors.country}
                />
                <OutlineTextInput
                  label="Mobile phone"
                  value={values.phoneNumber}
                  onChange={handleChange('phoneNumber')}
                  error={touched.phoneNumber && errors.phoneNumber}
                />
              </View>
              <ErrorMessage
                message={(touched.country && errors.country) || (touched.phoneNumber && errors.phoneNumber)}
              />
            </View>
            <View style={styles.bottom}>
              <PrimaryOutlineButton
                label="Continue"
                onPress={event => {
                  if (!Object.values(errors).length) {
                    handleSubmit(event);
                  }
                }}
                disabled={!!Object.values(errors).length}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUpPhoneScreen;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      marginBottom: 10,
      padding: padding.container,
      paddingTop: 40,
    },
    container: {
      display: 'flex',
      padding: padding.container,
      flex: 1,
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
  });
