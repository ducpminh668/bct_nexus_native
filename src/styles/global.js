import { Platform, StatusBar, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors, measures } from './colors';
export const globalStyles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  tradingStoryPanel: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingTop: 16,
  },
  fixedBottomBtn: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    height: 100,
    width: wp(100),
    paddingHorizontal: measures.side,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dismissBtn: {
    position: 'relative',
    bottom: 40,
    height: 60,
    marginHorizontal: 16,
    borderRadius: 50,
    backgroundColor: '#5AC53A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tradeCancelBtn: {
    marginHorizontal: measures.side,
    flexDirection: 'row',
  },
  tradeBuyBtn: {
    height: 60,
    marginHorizontal: 16,
    borderRadius: 50,
    backgroundColor: '#5AC53A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tradeBtn: {
    backgroundColor: '#EB663B',
    borderRadius: 30,
    height: 56,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenBorder: {
    borderRadius: 50,
    borderColor: colors.greenColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyCancelGreenBtn: {
    flex: 1,
    borderColor: colors.greenColor,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const themedStyles = theme =>
  StyleSheet.create({
    verticalBordered: {
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.background_third,
      paddingVertical: 8,
    },
    redText: {
      color: theme.colors.brand_red,
    },
    greenText: {
      color: theme.colors.brand_green,
    },
    normalSizeText: {
      fontSize: 13,
    },
  });
