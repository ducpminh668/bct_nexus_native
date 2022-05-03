import React, { useCallback, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Fonts } from '../../utils/fonts';
import { TextButton } from '../common/Buttons';
import { Subtitle1, Subtitle2 } from '../common/Typography';

const TradeBSheet = ({ navigation, parentRef, onPressClose }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const onClose = useCallback(
    () => {
      parentRef.current && parentRef.current.close();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <RBSheet
      ref={parentRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.9)',
        },
        draggableIcon: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: 'transparent',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
      height={360}
    >
      <SafeAreaView style={styles.container}>
        <TextButton
          style={styles.btnSell}
          textStyle={styles.btnTextBuy}
          label="Sell"
          onPress={() => {
            onClose();
            navigation.navigate('TradeScreen', { color: 'red', btnColor: theme.colors.error });
          }}
        />
        <TextButton
          style={styles.btnBuy}
          textStyle={styles.btnTextBuy}
          label="Buy"
          onPress={() => {
            onClose();
            navigation.navigate('TradeScreen', { color: theme.colors.primary_light, btnColor: theme.colors.primary });
          }}
        />
        <View style={styles.vBottom}>
          <View style={styles.vPrice}>
            <Subtitle1 style={styles.sText2} label="1,000" />
            <Subtitle2 style={styles.sText} label="Today's Volume" />
          </View>
          <TextButton style={styles.btnClose} textStyle={styles.btnTextClose} label="X" onPress={onClose} />
        </View>
      </SafeAreaView>
    </RBSheet>
  );
};

export default TradeBSheet;

const styleSheet = theme =>
  StyleSheet.create({
    btnSell: {
      marginTop: 10,
      width: 145,
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.bgError,
    },
    btnTextBuy: {
      fontSize: 16,
      color: theme.colors.white,
      fontFamily: Fonts.Medium,
    },
    btnBuy: {
      marginTop: 10,
      width: 150,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      height: 55,
    },
    sText: {
      marginTop: 3,
      fontSize: 15.4,
      fontFamily: Fonts.Light,
      fontWeight: '300',
    },
    sText2: {
      marginTop: 3,
      fontSize: 17.6,
      fontFamily: Fonts.Light,
      fontWeight: '300',
    },
    vPrice: { flex: 1 },
    btnTextClose: {
      fontSize: 20,
      color: theme.colors.primary,
      fontFamily: '',
    },
    btnClose: {
      width: 150,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.colors.primary,
      height: 55,
    },
    vBottom: {
      flexDirection: 'row',
      marginVertical: 10,
      width: '100%',
      alignItems: 'center',
    },
    container: {
      paddingHorizontal: 20,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  });
