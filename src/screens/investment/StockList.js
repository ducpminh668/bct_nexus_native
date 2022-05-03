import React, { useCallback, useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationHeader } from '../../components/common/Headers';
import AssetListItem from '../../components/investment/AssetListItem';
import { padding } from '../../constants/variables';
import { setSelectedStock } from '../../redux/slices/portfolioSlice';
import { globalStyles } from '../../styles/global';

const StockList = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const stocks = useSelector(state => state.portfolios.stockPortfolio);
  const dispatch = useDispatch();

  const handleClickItem = useCallback(item => {
    dispatch(setSelectedStock(item));
    props.navigation.navigate('InvestmentStockScreen');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationHeader title="Stocks" onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles.container}>
        {stocks.map(stock => (
          <AssetListItem
            key={stock.symbol}
            label={stock.symbol}
            icon="Stock"
            balance={`${stock.latestPrice} ${stock.currency}`}
            onPress={() => handleClickItem(stock)}
          />
        ))}
        <View style={styles.section} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StockList;

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
