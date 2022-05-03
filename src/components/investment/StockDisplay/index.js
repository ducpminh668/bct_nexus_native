import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../../utils/fonts';

import { Body2, Tiny } from '../../common/Typography';

const StockDisplay = (props) => {
  const { change, changePercent, latestPrice, open, close } = props;
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.outContainer}>
      <View style={styles.container}>
        <Icon
          name="apple"
          size={44}
          style={{
            color: theme.colors.text_primary,
            marginBottom: 4,
          }}
        />

        <View style={styles.value}>
          <Icon
            name="caret-up"
            size={20}
            style={{
              color: theme.colors.primary_light,
              marginRight: 6,
            }}
          />
          <Body2 color={theme.colors.primary_light} label={`$${change} (${changePercent}%)`} />
        </View>

        <Text style={styles.amount}>{`$${latestPrice.toFixed(2)}`}</Text>

        <View style={styles.value}>
          <Body2 color={theme.colors.text_disabled} label="Open: " />
          <Body2 color={theme.colors.text_disabled} label={`$${open}`} />
          <View style={styles.value}>
            <Icon
              name="caret-down"
              size={14}
              style={{
                color: theme.colors.error,
                marginHorizontal: 6,
              }}
            />
            <Tiny color={theme.colors.error} label="-0.54%" />
          </View>
        </View>

        <View style={styles.value}>
          <Body2 color={theme.colors.text_disabled} label="Close: " />
          <Body2 color={theme.colors.text_disabled} label={`$${close}`} />
          <View style={styles.value}>
            <Icon
              name="caret-up"
              size={14}
              style={{
                color: theme.colors.primary_light,
                marginHorizontal: 6,
              }}
            />
            <Tiny color={theme.colors.primary_light} label="5.11%" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default StockDisplay;

const styleSheet = theme =>
  StyleSheet.create({
    outContainer: {
      width: 206,
      height: 206,
      borderRadius: 1000,
      backgroundColor: theme.colors.primary,
      position: 'relative',
      marginLeft: 6,
    },
    container: {
      width: 200,
      height: 200,
      borderRadius: 1000,
      borderWidth: 0.5,
      borderColor: theme.colors.primary_light,
      backgroundColor: theme.colors.surface1,
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      paddingTop: 16,
    },
    value: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    amount: {
      fontSize: 30,
      color: theme.colors.text_primary,
      fontWeight: 'bold',
      fontFamily: Fonts.Soft,
    },
  });
