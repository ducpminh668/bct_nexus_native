import React, { useContext } from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart, BarChart, ProgressChart } from 'react-native-chart-kit';
import { ThemeContext } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const ChartTest = () => {
  const theme = useContext(ThemeContext).theme;

  return (
    <View>

    </View>
  );
};

export default ChartTest;
