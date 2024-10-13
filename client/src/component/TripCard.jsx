import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import randomImages from '../assets/images/randomImage';

const TripCard = ({location, country, date, onPress, onCardPress , onDelete}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onCardPress}>
      <View style={styles.cardImage}>
        <Image source={randomImages()} style={styles.cardThumbnail} />
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.cardHeader}>
          <Text style={styles.headerText}>{location}</Text>
          <Text style={[styles.headerText, {color: 'gray', fontSize: 14}]}>
            {date}
          </Text>
        </View>
        <Text style={{textTransform: 'capitalize', fontFamily: 'outfitMedium'}}>
          {country}
        </Text>
        <View style={styles.cardBtn}>
          <TouchableOpacity onPress={onDelete}>
            <Icon name="delete" size={hp(3.5)} color="#454545" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addBtn} onPress={onPress}>
            <Text
              style={{
                textAlign: 'center',
                color: '#454545',
                fontFamily: 'outfitMedium',
              }}>
              Add Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TripCard;

const styles = StyleSheet.create({
  cardThumbnail: {
    resizeMode: 'cover',
    width: '98%',
    height: '100%',
    borderRadius: 15,
    alignSelf: 'center',
  },
  cardBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
    alignItems: 'center',
  },
  addBtn: {
    borderColor: '#454545',
    borderWidth: 1,
    paddingVertical: hp(0.4),
    borderRadius: 5,
    width: wp(25),
    backgroundColor: 'white',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: wp(45),
    height: hp(30),
    borderRadius: 15,
    elevation: 10,
    borderColor: 'tomato',
    borderWidth: 0.5,
    marginTop: hp(3),
  },
  cardImage: {
    // width: '100%',
    height: '50%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardInfo: {
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(1),
  },
  headerText: {
    fontSize: hp(2.3),
    textTransform: 'capitalize',
    color: '#454545',
    fontFamily: 'outfitBold',
  },
});
