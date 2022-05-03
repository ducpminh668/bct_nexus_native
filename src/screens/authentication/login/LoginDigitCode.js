import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { ThemeContext } from 'react-native-elements';
import { PrimaryOutlineButton } from '../../../components/common/Buttons';
import { NavigationProgressHeader } from '../../../components/common/Headers';
import { Body2, Title } from '../../../components/common/Typography';
import { padding } from '../../../constants/variables';
import { globalStyles } from '../../../styles/global';
import { Fonts } from '../../../utils/fonts';

const LoginDigitCodeScreen = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [componentProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationProgressHeader
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <View style={styles.header}>
        <Title label="Your 6-DIGIT CODE" />
        <Body2 label="Login to your account via your personal security code" />
      </View>
      <View style={styles.container}>
        <CodeField
          ref={ref}
          {...componentProps}
          caretHidden
          value={value}
          onChangeText={res => {
            setValue(res);
          }}
          cellCount={CELL_COUNT}
          keyboardType="password"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text key={index} style={[styles.cell]} onLayout={getCellOnLayoutHandler(index)}>
              {symbol ? <View style={styles.symbol} /> : isFocused ? <Cursor /> : null}
            </Text>
          )}
        />
      </View>
      <View style={styles.field}>
        <PrimaryOutlineButton
          label="Sign in"
          disabled={value.length !== 6}
          onPress={() => props.navigation.navigate('TabNavigation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginDigitCodeScreen;

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
    cell: {
      width: 44,
      height: 64,
      lineHeight: 48,
      fontSize: 24,
      borderRadius: 5,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      backgroundColor: 'transparent',
      color: theme.colors.green,
      paddingTop: 4,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      fontFamily: Fonts.Soft,
    },
    symbol: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.primary,
      marginTop: 10,
    },
    field: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: padding.container,
    },
  });
