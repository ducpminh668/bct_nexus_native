import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { TextButton } from '../../components/common/Buttons';
import { Body1 } from '../../components/common/Typography';
import CostBSheet from '../../components/trade/CostBSheet';
import KeyPad from '../../components/trade/KeyPad';
import ShowNumber from '../../components/trade/ShowNumber';
import { formatCurrency } from '../../utils/format';

const TradeScreen = props => {
  const tradeRef = useRef();
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const { color, btnColor } = props.route.params;
  const [price, setPrice] = useState('');

  const onPressKeyPad = key => {
    if (key === '•') {
      tradeRef.current.open();
      return;
    }
    if (key === '<') {
      if (price.length < 1) {
        return;
      }
      const newPrice = price.slice(0, -1);
      setPrice(newPrice);
    } else {
      setPrice(price + key);
    }
  };

  const onOpenCost = () => {
    tradeRef.current.open();
  };

  const onPreviewPress = () => {
    tradeRef.current.close();
  };
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.header}>
        <Body1 label={'Pay with'} />
        <TouchableOpacity onPress={onOpenCost}>
          <Body1 label={'Card (USD) ▼'} />
          <Body1 label={`$${formatCurrency(6000000)}`} />
        </TouchableOpacity>
      </View>
      <View style={styles.flex_1} />
      <View style={styles.vShowNumber}>
        <ShowNumber price={price} />
      </View>
      <KeyPad onPressNumber={onPressKeyPad} />
      <TextButton
        style={[styles.btnPreview, { backgroundColor: btnColor }]}
        textStyle={styles.btnTextPreview}
        label="Preview"
        onPress={() => {
          props.navigation.pop();
        }}
      />
      <CostBSheet
        navigation={props.navigation}
        parentRef={tradeRef}
        btnColor={btnColor}
        onPreviewPress={onPreviewPress}
      />
    </View>
  );
};

export default TradeScreen;
const styleSheet = theme =>
  StyleSheet.create({
    flex_1: { flex: 1 },
    header: {
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 10,
    },
    vShowNumber: {
      justifyContent: 'center',
      marginBottom: 40,
    },
    btnTextPreview: {
      fontSize: 18,
      color: theme.colors.text_primary,
    },
    btnPreview: {
      marginTop: 20,
      width: 250,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      height: 55,
      marginVertical: 20,
      alignSelf: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary_light,
      justifyContent: 'center',
    },
  });
