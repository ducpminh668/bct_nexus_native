import React, { useContext, useMemo } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlueChart from '../../../assets/images/blue_graph.png';
import ErrorChart from '../../../assets/images/error_chart.png';
import PrimaryChart from '../../../assets/images/primary_graph.png';
import WarningChart from '../../../assets/images/warning_graph.png';
import { globalStyles } from '../../../styles/global';
import FeatureBox from '../../common/FeatureBox';
import { Body2, Subtitle3, Tiny } from '../../common/Typography';

const InvestmentCategoryCard = ({ onPressDetail, variant, icon, category, balance = 0, change = 0 }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const graph = useMemo(() => {
    if (variant === 'info') {
      return BlueChart;
    }
    if (variant === 'warning') {
      return WarningChart;
    }
    if (variant === 'error') {
      return ErrorChart;
    }
    return PrimaryChart;
  }, [variant]);

  return (
    <FeatureBox>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onPressDetail}>
            <View style={[styles.expandBtn, globalStyles.center]}>
              <Icon name="expand" size={10} style={{ color: theme.colors.text_secondary }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.chart}>
          <Image style={{ width: '100%' }} source={graph} />
        </View>
        <View style={styles.content}>
          <Icon
            name={icon}
            size={16}
            style={{
              color: theme.colors.text_secondary,
              marginRight: 6,
              marginBottom: 2,
            }}
          />
          <View style={styles.info}>
            <Body2 label={category} />
            <Subtitle3 fontWeight="normal" label={`${balance}`} />
          </View>
          <Tiny color={theme.colors.primary} label={`${change} %`} />
        </View>
      </View>
    </FeatureBox>
  );
};

export default InvestmentCategoryCard;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      padding: 10,
    },
    header: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    expandBtn: {
      width: 22,
      height: 22,
      borderRadius: 100,
      backgroundColor: theme.colors.surface2,
    },
    chart: {},
    content: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    info: {
      flex: 1,
    },
  });
