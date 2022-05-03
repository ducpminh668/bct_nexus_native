import React, { useContext } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeroImage from '../../assets/images/home_image.png';
import { PrimaryOutlineButton } from '../../components/common/Buttons';
import { PrimarySmallChip, TokenChip } from '../../components/common/Chips';
import { NavigationHeader } from '../../components/common/Headers';
import TradeAction from '../../components/common/TradeAction';
import { Body1, Subtitle1, Subtitle2 } from '../../components/common/Typography';
import { padding } from '../../constants/variables';
import { globalStyles } from '../../styles/global';

const AfterYouBuyScreen = props => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.root,
        backgroundColor: theme.colors.surface1,
        position: 'relative',
      }}
    >
      <View style={styles.header}>
        <NavigationHeader onPress={() => props.navigation.goBack()} iconHidden />
      </View>
      <ScrollView>
        <View style={styles.hero}>
          <View style={styles.background}>
            <Image style={{ height: 400 }} source={HeroImage} />
            <View style={styles.cameraBtn}>
              <Icon name="camera" size={16} style={{ color: theme.colors.text_primary }} />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <Subtitle1 style={styles.title} label="London City Apartment" />
            <View style={styles.description}>
              <Icon name="map-marker" size={24} style={{ color: theme.colors.text_secondary, marginRight: 8 }} />
              <Body1 color={theme.colors.text_secondary} label="Central London Camden..." />
            </View>
            <View style={styles.chips}>
              <PrimarySmallChip label="1 Bedroom" />
              <PrimarySmallChip label="ROI: 6.5%" />
              <PrimarySmallChip label="Value: 2.5M" />
            </View>
          </View>

          <View style={styles.section}>
            <Subtitle2 textAlign="center" label="Token value" />
            <View style={styles.chipGroup}>
              <TokenChip field="Number of Token" value="10" />
              <TokenChip field="Investment" value="$55" />
              <TokenChip field="Growth" value="10%" />
              <TokenChip field="Est Value Per Token" value="$5.5" />
            </View>
          </View>

          <View style={styles.section}>
            <Subtitle2 textAlign="center" label="Rent" />
            <View style={styles.chipGroup}>
              <TokenChip field="Rent Per Month" value="$0.29" />
              <TokenChip field="Rent So Far" value="$55" />
              <TokenChip field="ROI" value="6.5%" />
              <TokenChip field="Next Pay Day" value="1/3" />
            </View>
          </View>

          <View style={styles.section}>
            <Subtitle2 style={{ marginBottom: 14 }} textAlign="center" label="Estimated Growth of Rent" />
            <BarChart
              data={{
                labels: ['2019', '2020', '2021', '2022'],
                datasets: [
                  {
                    data: [200, 184, 180, 178],
                  },
                ],
              }}
              yAxisInterval={20}
              width={wp(100 - 20)}
              height={220}
              withInnerLines={false}
              chartConfig={{
                backgroundGradientFrom: '#1E2923',
                backgroundGradientFromOpacity: 0,
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => 'transparent',
                labelColor: () => theme.colors.text_primary,
                strokeWidth: 2, // optional, default 3
                barPercentage: 0.5,
                barRadius: 10,
                decimalPlaces: 0,
                fillShadowGradientOpacity: 1,
                fillShadowGradient: '#f0fc04',
                useShadowColorFromDataset: false, // optional
                propsForHorizontalLabels: [220, 184, 180, 178],
              }}
              style={{
                borderWidth: 1,
                borderColor: theme.colors.border,
                borderRadius: 20,
                backgroundColor: theme.colors.surface2,
              }}
            />
          </View>

          <View style={styles.buttons}>
            <View style={styles.buttonWrapper}>
              <PrimaryOutlineButton rounded size="small" label="Property Info" />
            </View>
            <View style={styles.buttonWrapper}>
              <PrimaryOutlineButton rounded size="small" label="Annual Report" />
            </View>
          </View>

          <TradeAction value="54,380,246" label="Today's Volume" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AfterYouBuyScreen;

const styleSheet = theme =>
  StyleSheet.create({
    header: {
      position: 'absolute',
      top: 0,
      width: wp(100),
      zIndex: 1,
    },
    background: {
      position: 'relative',
    },
    cameraBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      backgroundColor: '#666',
      borderColor: theme.colors.text_secondary,
      borderWidth: 0.5,
      width: 34,
      height: 34,
      position: 'absolute',
      bottom: 16,
      left: wp(100) - 60,
    },
    hero: {
      position: 'absolute',
      top: 0,
    },
    content: {
      padding: padding.container,
      paddingTop: 0,
      marginTop: 400,
    },
    section: {
      paddingVertical: 20,
      paddingHorizontal: 14,
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      borderStyle: 'solid',
    },
    title: {
      textTransform: 'capitalize',
      fontWeight: 'normal',
    },
    description: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    chips: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: -5,
      marginTop: 20,
    },
    chipGroup: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 14,
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: -10,
      paddingVertical: 15,
    },
    buttonWrapper: {
      padding: 14,
      flex: 1,
    },
  });
