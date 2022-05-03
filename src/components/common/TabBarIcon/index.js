import React, { useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';

const TabBarIcon = ({ focused, icon, activeIcon }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <Image source={focused ? activeIcon : icon} />
      {focused && <View style={styles.active} />}
    </View>
  );
};

export default TabBarIcon;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: 30,
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    active: {
      position: 'absolute',
      top: 30,
      left: 13,
      width: 6,
      height: 6,
      borderRadius: 100,
      backgroundColor: theme.colors.primary,
    },
  });
