import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Button from './Button';

const EmptyList = () => {
  return (
    <View style={{backgroundColor:"aliceblue", flex:1}}>
      <View style={{alignItems: 'center', justifyContent: 'center' , marginTop:'50%'}}>
        <Text style={{fontSize:hp(6)}}>🚊</Text>
        <Text style={{fontSize:hp(3), fontFamily:"outfitBold" , color:'#454545'}}>No trips planned yet!</Text>
      </View>
      <Button btnText='Plan trip'/>
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({});
