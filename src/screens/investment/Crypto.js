import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { ChartInfoChip } from '../../components/common/Chips';
import Gallery from '../../components/common/Gallery';
import { NavigationHeader } from '../../components/common/Headers';
import { Body1, Subtitle2 } from '../../components/common/Typography';
import CryptoCarousel from '../../components/investment/CryptoCarousel';
import CryptoChartSection from '../../components/investment/CryptoChartSection';
import CryptoDisplay from '../../components/investment/CryptoDisplay';
import CurrencyTable from '../../components/investment/CurrencyTable';
import { padding } from '../../constants/variables';
import { News } from '../../lib/api/news.api';
import { setSelectedNews, TYPE_NEWS } from '../../redux/slices/portfolioSlice';
import { globalStyles } from '../../styles/global';
import { category } from '../../utils/constants';

const portfolio = [
  {
    currency: 'Ethereum',
    status: 'primary',
    amount: '1',
    bought: '$500',
    price: '$400',
    pl: '7%',
  },
  {
    currency: 'Bitcoin',
    status: 'primary',
    amount: '1',
    bought: '$800',
    price: '$370',
    pl: '8%',
  },
  {
    currency: 'Cardona',
    status: 'error',
    amount: '1',
    bought: '$630',
    price: '$300',
    pl: '3%',
  },
];

const history = [
  {
    currency: 'Ethereum',
    status: 'primary',
    amount: '1',
    bought: '$500',
    price: '$400',
    pl: '7%',
  },
];

const CryptoScreen = props => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const selectedCrypto = useSelector(state => state.portfolios.selectedCrypto);
  const selectedNews = useSelector(state => state.portfolios.selectNews);

  useEffect(() => {
    News(selectedCrypto.symbol, [category[0]])
      .then(res => {
        console.log({ res });
        dispatch(setSelectedNews({ news: res, typeNews: TYPE_NEWS.crypto }));
      })
      .catch(error => {
        console.log({ error });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationHeader title={selectedCrypto.symbol} onPress={() => props.navigation.goBack()} />
      <ScrollView style={styles.container}>
        <View style={globalStyles.center}>
          <CryptoDisplay {...selectedCrypto} />
        </View>
        <CryptoChartSection />
        <View style={styles.infoChips}>
          <ChartInfoChip variant="error" value="-1.2%" label="24h Change" />
          <ChartInfoChip value="$5,000" label="Total Value" />
          <ChartInfoChip value="+12%" label="P/L" />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="Portfolio" />
          <CurrencyTable data={portfolio} />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="History" />
          <CurrencyTable data={history} />
        </View>

        {selectedNews.length > 0 && (
          <View style={styles.section}>
            <Subtitle2 style={styles.subtitle} label="Top News" />
            <Gallery />
          </View>
        )}

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="Popular Crypto" />
          <CryptoCarousel />
        </View>

        <View style={styles.section}>
          <Subtitle2 style={styles.subtitle} label="Upcoming Earnings" />
          <View style={styles.upcomingItem}>
            <View style={styles.upcomingIcon}>
              <Icon name="dollar" size={20} style={{ color: theme.colors.text_primary }} />
            </View>
            <Body1 style={{ flex: 1 }} label="ADA Hard Folk" />
            <Body1 label="7 Days" />
          </View>
          <View style={styles.upcomingItem}>
            <View style={styles.upcomingIcon}>
              <Icon name="dollar" size={20} style={{ color: theme.colors.text_primary }} />
            </View>
            <Body1 style={{ flex: 1 }} label="ETH New Update" />
            <Body1 label="10 Days" />
          </View>
        </View>

        <View style={styles.section} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CryptoScreen;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      paddingTop: 40,
      flex: 1,
    },
    infoChips: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: padding.container,
      paddingTop: 30,
      paddingBottom: 40,
    },
    section: {
      marginVertical: 10,
      paddingHorizontal: padding.container,
      paddingBottom: 20,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'normal',
      marginBottom: 14,
      color: theme.colors.text_secondary,
    },
    upcomingItem: {
      borderWidth: 1,
      borderColor: theme.colors.text_disabled,
      borderRadius: 12,
      padding: 10,
      marginBottom: 10,
      backgroundColor: theme.colors.surface2,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    upcomingIcon: {
      backgroundColor: theme.colors.surface1,
      width: 40,
      height: 40,
      marginRight: 10,
      borderRadius: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
