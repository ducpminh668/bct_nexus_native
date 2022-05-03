import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { Fonts } from '../../../utils/fonts';
import { Body1, Subtitle3 } from '../Typography';

const TradeAction = ({ value, label, onPress  }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.action}>
      <View>
        <Subtitle3
          fontWeight="normal"
          label={value}
          color={theme.colors.text_secondary}
        />
        <Body1 color={theme.colors.primary_light} label={label} />
      </View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
        <View style={styles.tradeBtn}>
          <Text style={{fontFamily: Fonts.Soft}}>Trade</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TradeAction;

const styleSheet = theme =>
  StyleSheet.create({
    action: {
      paddingVertical: 30,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderColor: theme.colors.border,
    },
    tradeBtn: {
      width: 130,
      borderRadius: 50,
      backgroundColor: theme.colors.primary_light,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 14,
    },
    tradeText: {
      color: '#000',
    },
  });
