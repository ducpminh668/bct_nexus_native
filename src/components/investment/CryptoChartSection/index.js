import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChartTest from '../../chartTest';
import { Body2 } from '../../common/Typography';

const items = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

const CryptoChartSection = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const [option, setOption] = useState('1M');

  return (
    <View style={styles.container}>
      <LineChart
        data={{
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color: (opacity, index) => theme.colors.primary,
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color: (opacity, index) => theme.colors.error,
            },
          ],
        }}
        width={wp(100) + 130}
        height={220}
        yAxisInterval={20}
        yLabelsOffset={-20}
        withDots={false}
        withOuterLines={false}
        withHorizontalLines={false}
        withVerticalLines={false}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          decimalPlaces: 0,
          fillShadowGradientOpacity: 0,
          color: (opacity, index) => 'red',
          labelColor: opacity => theme.colors.text_hint,
          style: {
            borderRadius: 0,
          },
          yLabelsOffset: 100,
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
          paddingLeft: 0,
          backgroundColor: theme.colors.surface1,
          marginLeft: -60,
        }}
      />
      <ChartTest />
      <View style={styles.description}>
        <Icon
          name="clock-o"
          size={20}
          style={{
            color: theme.colors.text_disabled,
            marginRight: 4,
          }}
        />
        <Body2 color={theme.colors.text_disabled} textAlign="center" label="23 Aug, 8:50 PM - 30 Aug. 18:50 PM" />
      </View>
      <View style={styles.itemWrapper}>
        {items.map((item, index) => (
          <TouchableOpacity onPress={() => setOption(item)} key={index}>
            <View style={[styles.item, option === item && styles.active]}>
              <Body2 color={option === item ? theme.colors.surface1 : theme.colors.text_disabled} label={item} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CryptoChartSection;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      marginTop: 30,
    },
    description: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 10,
    },
    itemWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    item: {
      width: 50,
      height: 50,
      borderRadius: 10,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'transparent',
    },
    active: {
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.secondary,
    },
  });
