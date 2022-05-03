import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Body2, Subtitle3 } from '../../common/Typography';

const StatsSection = () => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  return (
    <View style={styles.container}>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="Open" />
          <Subtitle3 fontWeight="normal" label="147.91" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="Volume" />
          <Subtitle3 fontWeight="normal" label="10.4B" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="High" />
          <Subtitle3 fontWeight="normal" label="149.02" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="Avg. Vol" />
          <Subtitle3 fontWeight="normal" label="10.4B" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="Low" />
          <Subtitle3 fontWeight="normal" label="147.91" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="Mrk Cap" />
          <Subtitle3 fontWeight="normal" label="10.4B" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="52wk High" />
          <Subtitle3 fontWeight="normal" label="148.109" />
        </View>
      </View>
      <View style={styles.itemWrapper}>
        <View style={styles.item}>
          <Body2 label="P/E" />
          <Subtitle3 fontWeight="normal" label="10.4B" />
        </View>
      </View>
    </View>
  );
};

export default StatsSection;

const styleSheet = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    itemWrapper: {
      width: (wp(100) - 40) / 2,
      padding: 6,
    },
    item: {
      borderWidth: 0.5,
      borderColor: theme.colors.border_light,
      borderRadius: 10,
      backgroundColor: theme.colors.surface2,
      display: 'flex',
      alignItems: 'center',
      padding: 8,
    },
  });
