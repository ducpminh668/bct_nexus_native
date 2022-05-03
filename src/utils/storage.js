import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeTheme = (theme = {}) => AsyncStorage.setItem('@storage_theme', theme);

export const getTheme = () => AsyncStorage.getItem('@storage_theme');
