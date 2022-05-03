import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Graph from '../../../assets/images/graph_icon.png';
import { globalStyles } from '../../../styles/global';
import { Fonts } from '../../../utils/fonts';
import { Body1, Tiny } from '../../common/Typography';

const CryptoDisplay = props => {
  const { latestPrice } = props;
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.outContainer}>
      <View style={[styles.container, globalStyles.center]}>
        <Body1 color={theme.colors.text_hint} label="Your Portfolio" />
        <Text style={styles.amount}>{`$${latestPrice}`}</Text>
        <View style={styles.row}>
          <Image style={styles.graph} source={Graph} />
          <Tiny style={{ marginRight: 4 }} color={theme.colors.primary} label="5.6%" />
          <Tiny color={theme.colors.text_hint} label="7d Change" />
        </View>
      </View>
    </View>
  );
};

export default CryptoDisplay;

const styleSheet = theme =>
  StyleSheet.create({
    outContainer: {
      width: 206,
      height: 206,
      borderRadius: 1000,
      backgroundColor: theme.colors.secondary,
      position: 'relative',
      marginLeft: 6,
    },
    container: {
      width: 200,
      height: 200,
      borderRadius: 1000,
      borderWidth: 0.5,
      borderColor: theme.colors.secondary_light,
      backgroundColor: theme.colors.surface1,
      position: 'absolute',
      bottom: 0,
    },
    amount: {
      fontSize: 30,
      color: theme.colors.text_primary,
      fontWeight: 'bold',
      fontFamily: Fonts.Soft,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    graph: {
      width: 30,
      height: 15,
      marginRight: 4,
    },
  });
