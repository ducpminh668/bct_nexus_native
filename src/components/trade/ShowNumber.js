import React, { useContext } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { Fonts } from '../../utils/fonts';
import { formatCurrency } from '../../utils/format';
import { Body1, Subtitle2 } from '../common/Typography';

const ShowNumber = ({ navigation, price }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const cryptos = useSelector(state => state.portfolios.cryptoPortfolio);
  const BTCUSD = +cryptos?.[0]?.latestPrice || 0;
  const convertPrice = () => {
    return BTCUSD * parseFloat(price);
  };

  return (
    <View style={styles.container}>
      <View style={styles.vLeft}>
        <Subtitle2 label="BTC" style={styles.stext} />
        <Icon name="sync-circle" size={50} style={styles.icSync} />
        <Subtitle2 label="USD" style={styles.stext} />
      </View>
      <View style={styles.vRight}>
        <View style={styles.vInputPrice}>
          <TextInput
            showSoftInputOnFocus={false}
            style={styles.inputPrice}
            placeholder=""
            placeholderTextColor={theme.colors.text_hint}
            value={`${price}`}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.div} />
        <View style={styles.vPrice}>
          <Body1 style={styles.txtPrice} label={`$${formatCurrency(convertPrice())}`} />
        </View>
      </View>
    </View>
  );
};

export default ShowNumber;

const styleSheet = theme =>
  StyleSheet.create({
    txtPrice: {
      marginTop: 20,
      color: theme.colors.white,
      fontSize: 20,
    },
    vInputPrice: {
      justifyContent: 'center',
      overflow: 'hidden',
      flex: 1,
    },
    div: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.white,
      marginLeft: -10,
    },
    vPrice: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
    },
    stext: {
      fontSize: 16,
      fontFamily: Fonts.Medium,
    },
    vRight: {
      justifyContent: 'space-between',
      flex: 1,
      height: 150,
      // backgroundColor: 'blue',
    },
    icSync: {
      color: theme.colors.text_primary,
      marginVertical: 10,
      fontWeight: '100',
    },
    inputPrice: {
      fontFamily: Fonts.Soft,
      // lineHeight: 5,
      fontSize: 65,
      backgroundColor: 'transparent',
      fontWeight: 'bold',
      flex: 1,
      color: 'white',
      marginBottom: -15,
      textAlign: 'center',
    },
    vLeft: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    container: {
      width: '100%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
