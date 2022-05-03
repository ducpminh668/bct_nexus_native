import React, { useContext, useEffect, useMemo } from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import Gallery from '../../components/common/Gallery';
import { NavigationHeader } from '../../components/common/Headers';
import { Body2, Subtitle1, Subtitle2, Subtitle3 } from '../../components/common/Typography';
import InvestmentCategoryCard from '../../components/investment/CategoryCard';
import UpcomingCarousel from '../../components/investment/UpcomingCarousel';
import { padding } from '../../constants/variables';
import httpClient from '../../lib/api/http.client';
import { setCryptoPortfolio, setStockPortfolio } from '../../redux/slices/portfolioSlice';
import { globalStyles } from '../../styles/global';

const InvestmentHomeScreen = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const dispatch = useDispatch();
  const portfolios = useSelector(state => state.portfolios);

  useEffect(() => {
    // Fetch Cryptos
    httpClient
      .get('/fetch/cryptos')
      .then(res => {
        if (res.status === 'Success') {
          dispatch(setCryptoPortfolio(res.data));
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message, [], {
          cancelable: true,
        });
      })
      .finally(() => {});
    // Fetch Stocks
    httpClient
      .get('/fetch/stocks')
      .then(res => {
        if (res.status === 'Success') {
          dispatch(setStockPortfolio(res.data));
        }
      })
      .catch(error => {
        Alert.alert('Error', error.message, [], {
          cancelable: true,
        });
      })
      .finally(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cryptoInfo = useMemo(() => {
    let totalBalance = 0;
    let totalChange = 0;
    portfolios.cryptoPortfolio.map(asset => {
      totalBalance = totalBalance + Math.floor(Math.random() * 1000);
      totalChange = totalChange + Math.random();
    });
    return {
      totalBalance: totalBalance.toFixed(2),
      totalChange: totalChange.toFixed(2),
    };
  }, [portfolios.cryptoPortfolio]);

  const stockInfo = useMemo(() => {
    let totalBalance = 0;
    let totalChange = 0;
    portfolios.stockPortfolio.map(asset => {
      totalBalance = totalBalance + Math.floor(Math.random() * 1000);
      totalChange = totalChange + asset.change;
    });
    return {
      totalBalance: totalBalance.toFixed(2),
      totalChange: totalChange.toFixed(2),
    };
  }, [portfolios.stockPortfolio]);

  const totalInfo = useMemo(() => {
    const totalBalance = (Number(cryptoInfo.totalBalance) + Number(stockInfo.totalBalance)).toFixed(2);
    const totalChange = (Number(cryptoInfo.totalChange) + Number(stockInfo.totalChange)).toFixed(2);
    return { totalBalance, totalChange };
  }, [cryptoInfo, stockInfo]);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
      }}
    >
      <NavigationHeader title="Investments" actionType="notification" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.grid}>
            <View style={[styles.gridItem, styles.w100]}>
              <View style={[styles.row, styles.hero]}>
                <View>
                  <Subtitle3 color={theme.colors.text_disabled} fontWeight="normal" label="Portfolio" />
                  <Subtitle1 label={`$${totalInfo.totalBalance}`} />
                  <View style={styles.row}>
                    <Icon
                      name="caret-up"
                      size={20}
                      style={{
                        color: theme.colors.primary_light,
                        marginRight: 6,
                      }}
                    />
                    <Body2 color={theme.colors.primary_light} label={`${totalInfo.totalChange}%`} />
                    <Body2 color={theme.colors.text_disabled} label="Today" />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.gridItem, styles.w50]}>
              <InvestmentCategoryCard
                variant="warning"
                icon="bitcoin"
                category="Crypto"
                balance={cryptoInfo.totalBalance}
                change={cryptoInfo.totalChange}
                onPressDetail={() => props.navigation.navigate('CryptoListScreen')}
              />
            </View>
            <View style={[styles.gridItem, styles.w50]}>
              <InvestmentCategoryCard
                variant="info"
                icon="dollar"
                category="Stock"
                balance={stockInfo.totalBalance}
                change={stockInfo.totalChange}
                onPressDetail={() => props.navigation.navigate('StockListScreen')}
              />
            </View>
            <View style={[styles.gridItem, styles.w50]}>
              <InvestmentCategoryCard
                icon="lightbulb-o"
                category="Ideas"
                balance={0}
                change={0}
                // onPressDetail={() => props.navigation.navigate('AfterYouBuyScreen')}
              />
            </View>
            <View style={[styles.gridItem, styles.w50]}>
              <InvestmentCategoryCard
                variant="error"
                icon="building"
                category="Real Estate"
                balance={0}
                change={0}
                // onPressDetail={() => props.navigation.navigate('PropertyScreen')}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Subtitle2 style={styles.subtitle} label="Top News" />
            <Gallery />
          </View>

          <View style={styles.section}>
            <Subtitle2 style={styles.subtitle} label="Upcoming Earnings" />
            <UpcomingCarousel />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvestmentHomeScreen;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      padding: padding.container,
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      marginHorizontal: -8,
    },
    gridItem: {
      padding: 8,
    },
    w100: {
      width: '100%',
    },
    w50: {
      width: '50%',
    },
    hero: {
      paddingHorizontal: padding.container,
      paddingVertical: 50,
      borderWidth: 1,
      borderColor: theme.colors.text_disabled,
      borderRadius: 10,
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'normal',
      marginBottom: 14,
      color: theme.colors.text_secondary,
    },
    section: {
      marginVertical: 20,
    },
  });
