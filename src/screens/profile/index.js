import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { PrimaryOutlineButton } from '../../components/common/Buttons';
import { logout } from '../../redux/slices/authSlice';
const ProfileScreen = props => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'AuthHome' }],
    });
  };

  return (
    <View style={styles.vBody}>
      <PrimaryOutlineButton label="Logout" onPress={onLogout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  vBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
});
