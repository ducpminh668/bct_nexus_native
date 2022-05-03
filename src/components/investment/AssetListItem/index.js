import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import BTCIcon from '../../../assets/icons/coin.png';
import StockIcon from '../../../assets/icons/stock.png';
import { Body1, Subtitle3 } from '../../common/Typography';

const Icons = {
  Crypto: BTCIcon,
  Stock: StockIcon,
};

const AssetListItem = ({ label, balance, icon, onPress }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
      <Image source={Icons[icon]} style={styles.icon} />
      <Subtitle3 fontWeight="normal" label={label} style={styles.label} />
      <Body1 fontWeight="normal" label={balance} style={styles.balance} />
    </TouchableOpacity>
  );
};

export default AssetListItem;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
    },
    icon: {
      width: 24,
      height: 24,
    },
    label: {
      marginLeft: 10,
      flex: 1,
    },
    balance: {
      color: theme.colors.primary,
      textAlignVertical: 'center',
    },
  });
