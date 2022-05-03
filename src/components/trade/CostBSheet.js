import React, { useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextButton } from '../common/Buttons';
import { Subtitle2 } from '../common/Typography';

const CostBSheet = ({ navigation, parentRef, btnColor, onPreviewPress }) => {
  const theme = useContext(ThemeContext).theme;
  const styles = styleSheet(theme);

  const ItemCost = ({ item, inde }) => {
    return <TextButton style={styles.itemCost}
      textStyle={styles.textItemCost}
      label={`$${item * 100}`} />;
  };
  return (
    <RBSheet
      ref={parentRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.6)',
        },
        draggableIcon: {
          backgroundColor: 'transparent',
        },
        container: {
          backgroundColor: 'transparent',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
      height={360}
    >
      <View style={styles.container}>
        <View style={styles.anchor} />
        <Subtitle2 label="Buy Bitcoin" />
        <Icon
          name="sync-circle"
          size={50}
          style={styles.icSync}
        />
        <View style={styles.listCost} >
          {[1, 2, 3, 4, 5, 6].map((item, index) => <ItemCost key={index} item={item} index={index} />)}
        </View>
        <TextButton
          style={[styles.btnPreview, { backgroundColor: btnColor }]}
          textStyle={styles.btnTextPreview}
          label="Preview"
          onPress={onPreviewPress}
        />
      </View>
    </RBSheet>
  );
};

export default CostBSheet;

const styleSheet = theme =>
  StyleSheet.create({
    textItemCost: {
      fontSize: 14,
      color: theme.colors.text_primary,
    },
    btnTextPreview: {
      fontSize: 18,
      color: theme.colors.text_primary,
    },
    btnPreview: {
      marginTop: 20,
      width: 250,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      height: 55,
      marginVertical: 20,
      alignSelf: 'center',
    },
    itemCost: {
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
      marginVertical: 5,
      height: 40,
      width: Dimensions.get('window').width / 4,
    },
    listCost: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      marginVertical: 10,
      paddingHorizontal: 10,
    },
    anchor: {
      alignItems: 'center',
      alignSelf: 'center',
      width: 20,
      height: 2,
      backgroundColor: 'white',
      marginBottom: 20,
    },
    container: {
      borderWidth: 1,
      borderTopColor: 'white',
      borderLeftColor: 'white',
      borderRightColor: 'white',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      justifyContent: 'flex-end',
      backgroundColor: 'black',
      flex: 1,
      width: Dimensions.get('window').width + 2,
      alignItems: 'center',
      marginLeft: -1,
    },
  });
