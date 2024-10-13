import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../../src/component/Button';
import {useNavigation} from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'aliceblue', flex: 1}}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>About Us ✈️</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam earum
          impedit odit, consequatur, enim laboriosam explicabo nisi animi libero
          pari quibusdam qui edit odit, consequatur, enim laboriosam explicabo
          nisi animi libero pariatur aliquam sunt, ab illum vitae voluptatum
          architecto eaque autem iste perspiciatis. Veniam, minima! Labore, sint
          cumque. Est dolor debitis i quibusdam qui edit odit, consequatur, enim
          laboriosam explicabo nisi animi libero pariatur aliquam sunt, ab illum
          vitae voluptatum architecto eaque
        </Text>
      </View>
      <Button
        btnText="Plan new trip"
        onPress={() => navigation.navigate('home')}
      />
      <View>
        <Text
          style={{
            marginTop: hp(30),
            textAlign: 'center',
            fontSize: hp(2),
            fontFamily: 'outfitRegular',
          }}>
          {' '}
          ©2024 All rights reserved
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  topContainer: {
    alignSelf: 'center',
    paddingTop: hp(10),
  },
  heading: {
    fontFamily: 'outfitBold',
    fontSize: hp(4),
    color: '#454545',
  },
  bottomContainer: {
    marginHorizontal: wp(5),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  aboutText: {
    textAlign: 'center',
    fontFamily: 'outfitRegular',
    fontSize: 14,
  },
});
