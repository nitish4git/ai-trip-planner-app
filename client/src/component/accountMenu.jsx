import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AccountMenu = ({cardTitle, cardIcon, arrowIcon, onPress}) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.cardIcon}>{cardIcon}</Text>
          <Text style={styles.cardName}>{cardTitle}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          {arrowIcon ? <Icon name="arrow-redo-outline" size={hp(2.5)} /> : null}
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

export default AccountMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    padding: hp(2.5),
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginHorizontal: wp(4),
  },
  cardName: {
    paddingLeft: 10,
    fontSize: hp(2),
    color: '#454545',
    fontFamily: 'outfitMedium',
  },
  cardIcon: {
    fontSize: hp(2.5),
  },
});
