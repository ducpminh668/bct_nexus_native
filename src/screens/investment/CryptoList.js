import React, { useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationHeader } from '../../components/common/Headers';
import AssetListItem from '../../components/investment/AssetListItem';
import { padding } from '../../constants/variables';
import { setSelectedCrypto } from '../../redux/slices/portfolioSlice';
import { globalStyles } from '../../styles/global';

const CryptoList = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const cryptos = useSelector(state => state.portfolios.cryptoPortfolio);
  const dispatch = useDispatch();

  const handleClickItem = useCallback(item => {
    dispatch(setSelectedCrypto(item));
    props.navigation.navigate('CryptoScreen');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationHeader title="Cryptos" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles.container}>
        {cryptos.map(crypto => (
          <AssetListItem
            key={crypto.symbol}
            label={crypto.symbol}
            icon="Crypto"
            balance={`$${crypto.latestPrice}`}
            onPress={() => handleClickItem(crypto)}
          />
        ))}
        <View style={styles.section} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CryptoList;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      paddingTop: 40,
      flex: 1,
      paddingHorizontal: padding.container,
    },
    section: {
      marginVertical: 10,
      paddingHorizontal: padding.container,
      paddingBottom: 20,
    },
  });
