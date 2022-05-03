import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../../utils/fonts';
import { Body2, Subtitle1, Subtitle3, Tiny, Body1 } from '../Typography';

export const PrimarySmallChip = ({ label }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.primaryChip}>
      <Text style={styles.primaryChipLabel}>
        {label}
      </Text>
    </View>
  );
};

export const TokenChip = ({ field, value }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.tokenChip}>
      <Body2 label={field} />
      <Subtitle3 fontWeight="normal" label={value} />
    </View>
  );
};

export const ChartInfoChip = ({ label, value, variant }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.chartChip}>
      <View style={styles.chartChipContent}>
        <Subtitle1
          fontWeight="normal"
          color={variant === 'error' ? theme.colors.error : theme.colors.primary}
          label={value}
        />
        <Tiny color={theme.colors.text_secondary} label={label} />
      </View>
    </View>
  );
};

export const CurrencyChip = ({ label, variant }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={[styles.currencyChip, variant === 'error' && styles.errorCurrency]}>
      <View style={styles.currency}>
        <Icon
          name="ethereum"
          size={20}
          style={{
            color: theme.colors.text_primary,
          }}
        />
      </View>
      <Body1 label={label} />
    </View>
  );
};

const styleSheet = theme =>
  StyleSheet.create({
    primaryChip: {
      borderRadius: 40,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      minWidth: 96,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    primaryChipLabel: {
      color: theme.colors.primary,
      fontFamily: Fonts.Soft,
    },
    tokenChip: {
      borderColor: theme.colors.border,
      borderWidth: 0.5,
      borderRadius: 12,
      padding: 8,
      width: 130,
      display: 'flex',
      alignItems: 'center',
      marginVertical: 6,
    },
    tokenChipField: {

    },
    tokenChipValue: {

    },
    chartChip: {
      width: 100,
    },
    chartChipContent: {
      borderWidth: 0.5,
      borderColor: theme.colors.border,
      borderRadius: 10,
      paddingHorizontal: 4,
      paddingVertical: 8,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.colors.surface2,
    },
    currencyChip: {
      borderWidth: 0.5,
      borderColor: theme.colors.primary_light,
      borderRadius: 50,
      backgroundColor: `${theme.colors.primary}20`,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      width: 124,
    },
    errorCurrency: {
      backgroundColor: `${theme.colors.error}20`,
      borderColor: theme.colors.error,
    },
    currency: {
      width: 34,
      height: 34,
      borderRadius: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff30',
      marginRight: 8,
    },
  });
