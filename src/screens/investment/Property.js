import React, { useContext } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiamondIcon from '../../assets/images/diamond_icon.png';
import HeroImage from '../../assets/images/home_image.png';
import HomeIcon from '../../assets/images/house_icon.png';
import MapImage from '../../assets/images/map.png';
import MoneyBagIcon from '../../assets/images/money_bag_icon.png';
import { NavigationHeader } from '../../components/common/Headers';
import TradeAction from '../../components/common/TradeAction';
import { Body1, Body2, Subtitle1, Subtitle2, Tiny } from '../../components/common/Typography';
import { padding } from '../../constants/variables';
import { globalStyles } from '../../styles/global';

const PropertyScreen = props => {
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
            <View style={styles.progressWrapper}>
              <View style={styles.progress} />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.tokenValue}>
              <Subtitle1 color={theme.colors.primary} label="$100" />
              <Body2 style={{ marginBottom: 3, marginLeft: 4 }} color={theme.colors.primary} label="Per Token" />
            </View>
            <Subtitle2 label="London City Apartment" />
            <View style={styles.description}>
              <Icon name="map-marker" size={22} style={{ color: theme.colors.text_secondary, marginRight: 8 }} />
              <Body1 color={theme.colors.text_secondary} label="Central London Camden..." />
            </View>
            <View style={styles.info}>
              <View style={styles.infoChip}>
                <Image source={MoneyBagIcon} />
                <Tiny color={theme.colors.text_primary} label="ROL: 6.5%" />
              </View>
              <View style={styles.infoChip}>
                <Image source={HomeIcon} />
                <Tiny color={theme.colors.text_primary} label="Bed: 1" />
              </View>
              <View style={styles.infoChip}>
                <Image source={DiamondIcon} />
                <Tiny color={theme.colors.text_primary} label="Value: 2.1M" />
              </View>
            </View>
          </View>

          <View style={[styles.section, styles.borderNone]}>
            <Subtitle2 style={{ marginBottom: 8 }} label="Information" />
            <Body2
              color={theme.colors.text_primary}
              label="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </View>
        </View>
        <View>
          <Image style={{ width: '100%' }} source={MapImage} />
        </View>
        <View style={[styles.content, styles.mt0]}>
          <View style={[styles.section, styles.borderNone]}>
            <Subtitle2 style={{ marginBottom: 8 }} label="Property Details" />
            <View style={styles.row}>
              <Body1 color={theme.colors.text_disabled} label="Type:" />
              <Body1 label="1 Bed" />
            </View>
            <View style={styles.row}>
              <Body1 color={theme.colors.text_disabled} label="Occupation:" />
              <Body1 label="90%" />
            </View>
            <View style={styles.row}>
              <Body1 color={theme.colors.text_disabled} label="Yearly Rent:" />
              <Body1 label="$80,000" />
            </View>
            <View style={styles.row}>
              <Body1 color={theme.colors.text_disabled} label="Payment Plan:" />
              <Body1 label="Monthly" />
            </View>
          </View>

          <View style={styles.section}>
            <Subtitle2 style={{ marginBottom: 8 }} textAlign="center" label="Property Documents" />
            <View style={styles.buttons}>
              <View style={styles.documentChip}>
                <Icon name="paperclip" size={22} style={{ color: theme.colors.text_secondary, marginRight: 8 }} />
                <Body1 label="PPM" />
              </View>
              <View style={styles.documentChip}>
                <Icon name="paperclip" size={22} style={{ color: theme.colors.text_secondary, marginRight: 8 }} />
                <Body1 label="Financials" />
              </View>
            </View>
          </View>

          <TradeAction value="78,000/100,000" label="Tokens sold" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyScreen;

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
    hero: {
      position: 'absolute',
      top: 0,
    },
    progress: {
      position: 'absolute',
      width: 100,
      height: 3,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      top: 0,
      left: 0,
    },
    progressWrapper: {
      width: wp(100) - 40,
      height: 1,
      backgroundColor: theme.colors.text_disabled,
      position: 'relative',
      marginTop: 10,
      marginHorizontal: padding.container,
    },
    content: {
      padding: padding.container,
      paddingTop: 0,
      marginTop: 420,
    },
    mt0: {
      marginTop: 0,
    },
    borderNone: {
      borderBottomColor: 'transparent',
    },
    section: {
      paddingVertical: 20,
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      borderStyle: 'solid',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      paddingVertical: 8,
    },
    title: {
      textTransform: 'capitalize',
      fontWeight: 'normal',
    },
    tokenValue: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    description: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 30,
      paddingBottom: 8,
    },
    infoChip: {
      display: 'flex',
      alignItems: 'center',
    },
    buttons: {
      display: 'flex',
      flexDirection: 'row',
      marginHorizontal: 0,
      paddingVertical: 15,
      justifyContent: 'space-between',
    },
    documentChip: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      height: 48,
      width: wp(50) - 30,
    },
  });
