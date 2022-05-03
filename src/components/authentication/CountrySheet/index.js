import React, { useContext, useState, useMemo } from 'react';
import { StyleSheet, View, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Body2, Subtitle3 } from '../../common/Typography';

import { CountryImages } from '../../../constants/images';
import Countries from '../../../constants/countries.json';
import { Fonts } from '../../../utils/fonts';

const CountrySheet = ({ parentRef, isPhone, value, onChangeValue }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);
  const [filter, setFilter] = useState('');

  const handleSelectItem = (item) => {
    parentRef.current.close();
    onChangeValue(item);
  };

  const data = useMemo(() => {
    return Countries.filter((item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1);
  }, [filter]);

  return (
    <RBSheet
      ref={parentRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.7)',
        },
        draggableIcon: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: theme.colors.surface2,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
      }}
      height={hp(100)}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.inputWrapper}>
            <Icon
              name="search"
              size={16}
              style={{ color: theme.colors.text_hint }}
            />
            <TextInput
              style={styles.input}
              placeholder="Country"
              placeholderTextColor={theme.colors.text_hint}
              value={filter}
              onChangeText={setFilter}
            />
          </View>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => parentRef.current.close()}
          >
            <Body2 label="Cancel" color={theme.colors.primary_light} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          {data.map((item, index) => (
            <TouchableOpacity
              style={[styles.item, value && value.code === item.code && styles.active]}
              key={index}
              onPress={() => handleSelectItem(item)}
            >
              <Image
                style={styles.flag}
                source={CountryImages[item.code]}
              />
              <Subtitle3
                style={{ ...styles.code,  width: isPhone ? 100 : 60 }}
                label={isPhone ? item.prefix : item.code}
              />
              <Subtitle3
                style={{
                  fontWeight: 'normal',
                  color: value && value.code === item.code ? theme.colors.surface1 : theme.colors.text_primary,
                }}
                label={item.name}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.anchor} />
      </View>
    </RBSheet>
  );
};

export default CountrySheet;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 33,
    },
    content: {
      backgroundColor: theme.colors.surface1,
      height: '100%',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    inputWrapper: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      paddingLeft: 14,
      marginRight: 20,
    },
    input: {
      color: theme.colors.text_secondary,
      fontFamily: Fonts.Soft,
      flex: 1,
    },
    cancel: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
    anchor: {
      width: 120,
      height: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
      position: 'absolute',
      left: wp(50) - 60,
      bottom: hp(20) - 20,
      zIndex: 10,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      padding: 20,
      borderRadius: 8,
      marginVertical: 4,
      position: 'relative',
      overflow: 'visible',
    },
    active: {
      backgroundColor: theme.colors.primary_light,
    },
    // bar: {
    //   position: 'absolute',
    //   height: 80,
    //   width: 3,
    //   top: -4,
    //   left: -3,
    //   borderRadius: 4,
    //   backgroundColor: 'red',
    // },
    flag: {
      width: 40,
      height: 26,
      borderRadius: 3,
    },
    code: {
      color: theme.colors.text_disabled,
      paddingLeft: 20,
      fontWeight: 'normal',
    },
  });
