import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fonts } from '../../../utils/fonts';
import { Body1, Body2, Subtitle3 } from '../../common/Typography';

const Portfolio = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <View>
        <Icon
          name="apple"
          size={38}
          style={{
            color: theme.colors.text_primary,
            marginBottom: 4,
          }}
        />
        <Body1 label="Total shares" />
        <Text style={styles.shares}>10.2378</Text>
        <View style={styles.value}>
          <Subtitle3 label="$619.2" />
          <Icon
            name="external-link"
            size={18}
            style={{
              color: theme.colors.text_primary,
              marginLeft: 8,
            }}
          />
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity>
          <View style={styles.historyBtn}>
            <Icon
              name="clock-o"
              size={20}
              style={{
                color: theme.colors.text_primary,
                marginRight: 8,
              }}
            />
            <Body2 color={theme.colors.text_primary} label="QP History" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Portfolio;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: theme.colors.primary_light,
      borderRadius: 20,
      padding: 18,
      backgroundColor: theme.colors.primary,
      display: 'flex',
      flexDirection: 'row',
    },
    shares: {
      fontSize: 34,
      color: theme.colors.text_primary,
      lineHeight: 34,
      marginBottom: 10,
      fontFamily: Fonts.Soft,
    },
    value: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      flex: 1,
    },
    historyBtn: {
      borderWidth: 0.5,
      borderColor: '#fff',
      borderRadius: 30,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 7,
    },
  });
