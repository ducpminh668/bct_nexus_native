import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { globalStyles } from '../../../styles/global';
import { CurrencyChip } from '../../common/Chips';
import { Body1, Tiny } from '../../common/Typography';

const CurrencyTable = ({ data }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View>
      <View style={[styles.row, styles.header]}>
        <View style={[globalStyles.center, styles.amount]}>
          <Tiny label="Amount" />
        </View>
        <View style={[globalStyles.center, styles.cell]}>
          <Tiny label="Bought for" />
        </View>
        <View style={[globalStyles.center, styles.cell]}>
          <Tiny label="Current Price" />
        </View>
        <View style={[globalStyles.center]}>
          <Tiny label="P/L" />
        </View>
      </View>
      {data.map((item, index) => (
        <View key={index} style={[styles.row, styles.mb]}>
          <CurrencyChip label={item.currency} variant={item.status} />
          <View style={styles.row}>
            <View style={[globalStyles.center, styles.amount]}>
              <Body1 label={item.amount} />
            </View>
            <View style={[globalStyles.center, styles.cell]}>
              <Body1 color={theme.colors.error} label={item.bought} />
            </View>
            <View style={[globalStyles.center, styles.cell]}>
              <Body1 color={theme.colors.primary} label={item.price} />
            </View>
            <View style={[globalStyles.center]}>
              <Body1 color={theme.colors.primary} label={item.pl} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CurrencyTable;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      paddingLeft: 124,
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
    },
    cell: {
      flex: 1,
    },
    amount: {
      width: 50,
    },
    mb: {
      marginBottom: 10,
    },
  });
