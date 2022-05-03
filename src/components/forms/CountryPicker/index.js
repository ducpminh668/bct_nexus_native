import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CountryImages } from '../../../constants/images';
import { Body2, Body1 } from '../../common/Typography';
import CountrySheet from '../../authentication/CountrySheet';
import countries from '../../../constants/countries.json';

const CountryPicker = ({ isPhone, onSelectCountry, country, error }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const countrySheet = useRef();
  const [residentCountryCode, setResidentCountryCode] = useState(null);

  useEffect(() => {
    if (country) {
      const active = countries.find((item) => item.name === country || item.prefix === country);
      setResidentCountryCode(active || null);
    }
  }, [country]);

  const handleChangeCountry = (value) => {
    setResidentCountryCode(value);
    onSelectCountry(value);
  };

  return (
    <View style={[isPhone && styles.root]}>
      <TouchableOpacity onPress={() => countrySheet.current.open()}>
        <View style={[styles.picker, error && styles.error]}>
          {/* Country Picker label */}
          <View style={[styles.label, residentCountryCode && styles.fixed]}>
            <Body2 color={error ? theme.colors.error : theme.colors.text_secondary} label="Country" />
          </View>
          {residentCountryCode && (
            <View style={styles.item}>
              {!isPhone && (
                <Image style={styles.flag} source={CountryImages[residentCountryCode.code]} />
              )}
              <Body1
                style={{ flex: 1 }}
                label={isPhone ? residentCountryCode.prefix : residentCountryCode.name}
              />
              <Icon
                name="angle-down"
                size={20}
                style={{ color: theme.colors.disabled }}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>

      <CountrySheet
        parentRef={countrySheet}
        value={residentCountryCode}
        onChangeValue={handleChangeCountry}
        isPhone={isPhone}
      />
    </View>
  );
};

export default CountryPicker;

const styleSheet = theme =>
  StyleSheet.create({
    root: {
      width: 100,
      marginRight: 10,
    },
    picker: {
      height: 64,
      borderRadius: 4,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      position: 'relative',
    },
    error: {
      color: theme.colors.error,
      borderColor: theme.colors.error,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 16,
      paddingRight: 10,
      position: 'absolute',
      top: 6,
    },
    flag: {
      width: 25,
      height: 16,
      marginRight: 10,
    },
    label: {
      position: 'absolute',
      marginLeft: 14,
      zIndex: 1,
      top: 22,
    },
    fixed: {
      top: 4,
    },
  });

