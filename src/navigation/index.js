import React, { useEffect, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'react-native-elements';

import HomeScreen from '../screens/home';
import AuthHomeScreen from '../screens/authentication/Home';
import SignUpStartScreen from '../screens/authentication/signup/Start';
import SignUpPhoneScreen from '../screens/authentication/signup/SignUpPhone';
import DigitCodeScreen from '../screens/authentication/signup/DigitCode';
import SignUpCountryScreen from '../screens/authentication/signup/SignUpCountry';
import SignUpAddressScreen from '../screens/authentication/signup/SignUpAddress';
import SignUpNameScreen from '../screens/authentication/signup/SignUpName';
import SignUpBirthdayScreen from '../screens/authentication/signup/SignUpBithday';
import SignUpEmailScreen from '../screens/authentication/signup/SignUpEmail';
import SignUpPasswordScreen from '../screens/authentication/signup/SignUpPassword';
import SignUpConfirmPassword from '../screens/authentication/signup/SignUpConfirmPassword';
import SignUpVerifyIdentify from '../screens/authentication/signup/SignUpVerifyIdentify';
import SignUpCapturePassport from '../screens/authentication/signup/SignUpCapturePassport';
import LoginStartScreen from '../screens/authentication/login/Start';
import LoginEmailScreen from '../screens/authentication/login/LoginEmail';
import LoginDigitCodeScreen from '../screens/authentication/login/LoginDigitCode';
import FaceCaptureScreen from '../screens/authentication/FaceCapture';

import InvestmentHomeScreen from '../screens/investment/Home';
import InvestmentStockScreen from '../screens/investment/Stock';
import AfterYouBuyScreen from '../screens/investment/AfterYouBuy';
import PropertyScreen from '../screens/investment/Property';
import CryptoScreen from '../screens/investment/Crypto';
import CryptoListScreen from '../screens/investment/CryptoList';
import StockListScreen from '../screens/investment/StockList';
import ProfileScreen from '../screens/profile';
import TabBarIcon from '../components/common/TabBarIcon';

import ActiveAnalyzeIcon from '../assets/images/analyse_icon.png';
import AnalyzeIcon from '../assets/images/active_analyse_icon.png';
import WalletIcon from '../assets/images/wallet_icon.png';
import ActiveWalletIcon from '../assets/images/active_wallet_icon.png';
import TagIcon from '../assets/images/tag_icon.png';
import ActiveTagIcon from '../assets/images/active_tag_icon.png';
import ActiveDoubleArrowIcon from '../assets/images/double_arrow_icon.png';
import DoubleArrowIcon from '../assets/images/active_double_arrow_icon.png';
import ActiveUserIcon from '../assets/images/user_icon.png';
import UserIcon from '../assets/images/active_user_icon.png';

import { useSelector, useDispatch } from 'react-redux';
const jwtDecode = require('jwt-decode');
import { logout, selectToken } from '../redux/slices/authSlice';
import TradeScreen from '../screens/trade';

const TIME_TRACKING = 10000; // 10s

const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = props => {
  const token = useSelector(selectToken);
  return (
    <Stack.Navigator
      animationEnabled
      presentation="transparentModal"
      initialRouteName={token ? 'TabNavigation' : 'AuthHome'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
      {/* Sign up on boarding */}
      <Stack.Screen name="SignUpStartScreen" component={SignUpStartScreen} />
      <Stack.Screen name="SignUpPhoneScreen" component={SignUpPhoneScreen} />
      <Stack.Screen name="DigitCodeScreen" component={DigitCodeScreen} />
      <Stack.Screen name="SignUpCountryScreen" component={SignUpCountryScreen} />
      <Stack.Screen name="SignUpAddressScreen" component={SignUpAddressScreen} />
      <Stack.Screen name="SignUpNameScreen" component={SignUpNameScreen} />
      <Stack.Screen name="SignUpBirthdayScreen" component={SignUpBirthdayScreen} />
      <Stack.Screen name="SignUpEmailScreen" component={SignUpEmailScreen} />
      <Stack.Screen name="SignUpPasswordScreen" component={SignUpPasswordScreen} />
      <Stack.Screen name="SignUpConfirmPassword" component={SignUpConfirmPassword} />
      <Stack.Screen name="SignUpVerifyIdentify" component={SignUpVerifyIdentify} />
      <Stack.Screen name="SignUpCapturePassport" component={SignUpCapturePassport} />
      {/* Log in */}
      <Stack.Screen name="LoginStartScreen" component={LoginStartScreen} />
      <Stack.Screen name="LoginEmailScreen" component={LoginEmailScreen} />
      <Stack.Screen name="LoginDigitCodeScreen" component={LoginDigitCodeScreen} />
      <Stack.Screen name="FaceCaptureScreen" component={FaceCaptureScreen} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack1.Screen name="TradeScreen" component={TradeScreen} />
    </Stack.Navigator>
  );
};

const InvestmentStackNavigation = props => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const timeout = useRef(null);

  useEffect(() => {
    timeout.current = setInterval(() => {
      if (token) {
        const exp = +jwtDecode(token)?.exp;
        const now = Date.now() / 1000;
        if (now > exp) {
          dispatch(logout());
          props.navigation.reset({
            index: 0,
            routes: [{ name: 'AuthHome' }],
          });
        }
      }
    }, TIME_TRACKING);

    return () => {
      timeout.current && clearInterval(timeout.current);
    };
  }, [token, dispatch, props.navigation]);

  return (
    <Stack1.Navigator
      animationEnabled
      presentation="transparentModal"
      initialRouteName="InvestmentHomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack1.Screen name="InvestmentHomeScreen" component={InvestmentHomeScreen} />
      <Stack1.Screen name="InvestmentStockScreen" component={InvestmentStockScreen} />
      <Stack1.Screen name="AfterYouBuyScreen" component={AfterYouBuyScreen} />
      <Stack1.Screen name="PropertyScreen" component={PropertyScreen} />
      <Stack1.Screen name="CryptoListScreen" component={CryptoListScreen} />
      <Stack1.Screen name="StockListScreen" component={StockListScreen} />
      <Stack1.Screen name="CryptoScreen" component={CryptoScreen} />
    </Stack1.Navigator>
  );
};
const ProfileStackNavigation = props => {
  return (
    <Stack1.Navigator
      animationEnabled
      presentation="transparentModal"
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack1.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack1.Navigator>
  );
};
export const TabNavigation = () => {
  const theme = React.useContext(ThemeContext).theme;

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 80,
          backgroundColor: theme.colors.tabBar,
          borderTopWidth: 0,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          paddingHorizontal: 30,
          marginTop: -20,
        },
      }}
      initialRouteName="Investment"
    >
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={AnalyzeIcon} activeIcon={ActiveAnalyzeIcon} />
          ),
        }}
        name="Investment"
        component={InvestmentStackNavigation}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={WalletIcon} activeIcon={ActiveWalletIcon} />,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={TagIcon} activeIcon={ActiveTagIcon} />,
        }}
        name="SpendingHomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={DoubleArrowIcon} activeIcon={ActiveDoubleArrowIcon} />
          ),
        }}
        name="BorrowingHomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} icon={UserIcon} activeIcon={ActiveUserIcon} />,
        }}
        name="Profile"
        component={ProfileStackNavigation}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;
