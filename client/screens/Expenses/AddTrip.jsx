import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import InputField from '../../src/component/inputField';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../src/component/Button';
import axios from 'axios';
import { AuthContext } from '../../src/context/authContext';
import { TripContext } from '../../src/context/tripContext';

const AddTrip = () => {
  const navigation = useNavigation();
  const [place, setPlace] = useState();
  const [country, setCountry] = useState();
  const [trip , setTrip] = useContext(TripContext);
  const [state] = useContext(AuthContext);
  const token = state.token
  const handleSubmit = async () => {
    
    if (!place) {
      return ToastAndroid.show('Enter place', ToastAndroid.LONG);
    }
    if (!country) {
      return ToastAndroid.show('Enter country', ToastAndroid.LONG);
    }
  
    console.log(token);
    try {
      const res = await axios.post(
        'http://192.168.1.9:5000/api/trip/create-trip',
        {place, country, tripDate},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (res.data.status == true) {
        Alert.alert('Trip added successfully');
        navigation.navigate('expense');
         setTrip(res.data.post)
      }
      // console.log(res.data.post)
      setCountry('');
      setPlace('');
      setTripDate('');
    } catch (error) {
      Alert.alert('Something Wents wrong');
    }
  };

  return (
    <View style={{backgroundColor: 'aliceblue', flex: 1}}>
      <View style={{paddingTop: hp(7)}}>
        <View style={{marginHorizontal: wp(5)}}>
          <Text
            style={{
              fontFamily: 'outfitBold',
              fontSize: hp(3.5),
              color: '#454545',
            }}>
            Add your trips here
          </Text>
          <Text
            style={{
              fontFamily: 'outfitRegular',
              fontSize: hp(2),
              color: '#454545',
            }}>
            Markdown your happiness
          </Text>
        </View>
        <View style={{marginHorizontal: wp(5)}}>
          <InputField
            label="Place"
            placeholder="Place"
            onChangeText={e => setPlace(e)}
          />
          <InputField
            label="Country"
            placeholder="Country"
            onChangeText={e => setCountry(e)}
          />
        </View>
        <View></View>
        <View>
          <Button btnText="Add trip" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default AddTrip;

const styles = StyleSheet.create({});
