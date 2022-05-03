import React, { useContext, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { Body1, Body2 } from '../../common/Typography';

const CustomDatePicker = ({ date, onChangeDate, error }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const age = useMemo(() => {
    if (date) {
      return moment().diff(moment(date, 'DD/MM/YYYY'), 'y');
    }
    return 0;
  }, [date]);

  return (
    <View style={[styles.container, Boolean(date) && styles.activeContainer, error && styles.error]}>
      <View style={[styles.label, Boolean(date) && styles.activeLabel]}>
        <Body2
          color={date ? theme.colors.primary : error ? theme.colors.error : theme.colors.text_disabled}
          label="Date of birth"
        />
      </View>
      <View style={Boolean(date) && styles.content}>
        <DatePicker
          placeholder="DD/MM/YYYY"
          name="dob"
          format="DD/MM/YYYY"
          placeholderTextColor={theme.colors.text_secondary}
          onDateChange={onChangeDate}
          // onBlur={handleBlur('dob')}
          date={date}
          style={{fontSize: 22}}
          mode="date"
          customStyles={{
            dateIcon: {
              display: 'none',
            },
            dateText: {
              color: theme.colors.text_primary,
              fontSize: 14,
              textAlign: 'left',
            },
            dateTouchBody: {
              height: 30,
            },

            dateInput: styles.input,
            placeholderText: {
              color: theme.colors.text_disabled,
              fontSize: 14,
              marginLeft: 14,
            },
          }}
        />
        {!!age && (
          <Body1 style={{ marginTop: 6 }} label={`Age: ${age}`} />
        )}
      </View>
    </View>
  );
};

export default CustomDatePicker;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      height: 64,
      borderRadius: 4,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      position: 'relative',
      paddingTop: 22,
    },
    error: {
      borderColor: theme.colors.error,
    },
    activeContainer: {
      borderColor: 'transparent',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.primary,
    },
    label: {
      position: 'absolute',
      top: 8,
      left: 14,
    },
    activeLabel: {
      left: 0,
    },
    input: {
      borderColor: 'transparent',
      fontSize: 12,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
    },
  });

