import { createSlice } from '@reduxjs/toolkit';
import { darkTheme } from '../../utils/constants';

export const TYPE_NEWS = { crypto: 'CRYPTO', stocks: 'STOCKS' };

const initialState = {
  theme: darkTheme,
  userInfo: {},
  cryptoPortfolio: [],
  stockPortfolio: [],
  estatePortfolio: [],
  ideaPortfolio: [],
  selectedCrypto: {},
  selectedStock: {},
  purchaseStore: { id: 0, amount: 0, quantity: 0, buy: 1 },
  selectNews: [],
  newsFor: TYPE_NEWS.stocks,
};

export const portfolioSlice = createSlice({
  name: 'portfolios',
  initialState: initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
    readUserInfo: state => {
      return state.userInfo;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    updateUserBalance: (state, action) => {
      // let temp = action.payload;
      state.userInfo = { ...state.userInfo, account_balance: action.payload };
    },
    updateCardInfo: (state, action) => {
      // state.userInfo = {...state.userInfo, card_info: action.payload};
      state.userInfo.card_info = action.payload;
    },
    updateUserGoals: (state, action) => {
      state.userInfo.goals.push(action.payload);
    },
    setCryptoPortfolio: (state, action) => {
      state.cryptoPortfolio = action.payload;
    },
    setStockPortfolio: (state, action) => {
      state.stockPortfolio = action.payload;
    },
    setIdeaPortfolio: (state, action) => {
      state.ideaPortfolio = action.payload;
    },
    setPurchaseStore: (state, action) => {
      state.purchaseStore = action.payload;
    },
    setSelectedCrypto: (state, action) => {
      state.selectedCrypto = action.payload;
    },
    setSelectedStock: (state, action) => {
      state.selectedStock = action.payload;
    },
    setSelectedNews: (state, action) => {
      state.selectNews = action.payload.news;
      state.newsFor = action.payload.typeNews;
    },
  },
});

export const {
  setUserInfo,
  updateTheme,
  updateUserBalance,
  updateCardInfo,
  setCryptoPortfolio,
  setStockPortfolio,
  setIdeaPortfolio,
  setPurchaseStore,
  setSelectedCrypto,
  setSelectedStock,
  setSelectedNews,
} = portfolioSlice.actions;

export default portfolioSlice.reducer;
