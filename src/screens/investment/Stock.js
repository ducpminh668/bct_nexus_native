import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { ChartInfoChip } from '../../components/common/Chips';
import Gallery from '../../components/common/Gallery';
import { NavigationHeader } from '../../components/common/Headers';
import TradeAction from '../../components/common/TradeAction';
import { Body1, Subtitle2, Subtitle3, Tiny } from '../../components/common/Typography';
import BoughtCarousel from '../../components/investment/BoughtCarousel';
import PerformanceCarousel from '../../components/investment/PerformanceCarousel';
import Portfolio from '../../components/investment/Portfolio';
import StatsSection from '../../components/investment/StatsSection';
import StockChartSection from '../../components/investment/StockChartSection';
import InvestmentInfoDisplay from '../../components/investment/StockDisplay';
import TradeBSheet from '../../components/trade/TradeBSheet';
import { padding } from '../../constants/variables';
import { News } from '../../lib/api/news.api';
import { setSelectedNews, TYPE_NEWS } from '../../redux/slices/portfolioSlice';
import { globalStyles } from '../../styles/global';
import { category } from '../../utils/constants';

const InvestmentStockScreen = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const selectedStock = useSelector(state => state.portfolios.selectedStock);
  const selectedStockNews = useSelector(state => state.portfolios.selectNews);
  const tradeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    News(selectedStock.symbol, [category[0]])
      .then(res => {
        dispatch(setSelectedNews({ news: res, typeNews: TYPE_NEWS.stocks }));
      })
      .catch(error => {
        console.log({ error });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTradeAction = useCallback(() => {
    tradeRef.current && tradeRef.current.open();
  }, []);
  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationHeader
        title={selectedStock.companyName}
        subtitle={selectedStock.symbol}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView style={styles.container}>
        <View style={styles.hero}>
          <InvestmentInfoDisplay {...selectedStock} />
        </View>
        <StockChartSection />

        <View style={styles.infoChips}>
          <ChartInfoChip variant="error" value="-1.2%" label="24h Change" />
          <ChartInfoChip value="$5,000" label="Total Value" />
          <ChartInfoChip value="+12%" label="P/L" />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="Performance" />
          <PerformanceCarousel />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="In Portfolio" />
          <Portfolio />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="Stats" />
          <StatsSection />
        </View>

        {selectedStockNews.length > 0 && (
          <View style={styles.section}>
            <Subtitle2 style={styles.subtitle} label="Top News" />
            <Gallery />
          </View>
        )}

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="Earnings" />
          {/* <EarningChartSection /> */}
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="People Also Bought" />
          <BoughtCarousel />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="About The Company" />
          <Body1
            style={{ marginBottom: 8 }}
            color={theme.colors.text_secondary}
            label="Apple inc. is an American multinational technology company that specializes in consumer electronics,
            software and online services. Apple is the largest information technology company by revenue (totaling US$365.8 billion in 2021)
            and, as of January 2021."
          />
          <TouchableOpacity>
            <Tiny color={theme.colors.text_disabled} label="Read more" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.cell}>
            <Subtitle3 fontWeight="normal" label="CEO" color={theme.colors.text_secondary} />
            <Body1 label="Timothy Donald Cook" />
          </View>
          <View style={styles.cell}>
            <Subtitle3 fontWeight="normal" label="Headquarters" color={theme.colors.text_secondary} />
            <Body1 label="Cupertino, California" />
          </View>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Subtitle3 fontWeight="normal" label="Founded" color={theme.colors.text_secondary} />
              <Body1 label="1976" />
            </View>
            <View style={styles.cell}>
              <Subtitle3 fontWeight="normal" label="Employees" color={theme.colors.text_secondary} />
              <Body1 label="147,000" />
            </View>
          </View>
          <TradeAction onPress={onTradeAction} label="Today's volume" value="245.567" />
        </View>
      </ScrollView>
      <TradeBSheet navigation={props.navigation} parentRef={tradeRef} />
    </SafeAreaView>
  );
};

export default InvestmentStockScreen;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      paddingTop: 30,
      paddingBottom: 0,
      flex: 1,
    },
    hero: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
    },
    infoChips: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: padding.container,
      paddingTop: 30,
      paddingBottom: 20,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'normal',
      marginBottom: 14,
      color: theme.colors.text_secondary,
    },
    section: {
      marginVertical: 10,
      paddingHorizontal: padding.container,
      paddingBottom: 20,
    },
    cell: {
      marginBottom: 40,
      flex: 1,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    divider: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.colors.surface1,
    },
  });
