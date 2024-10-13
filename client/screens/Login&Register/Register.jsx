import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../src/constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../../src/component/inputField';
import Button from '../../src/component/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async () => {
    try {
      if (!name || !email || !password) {
        return ToastAndroid.show('Fill all details', ToastAndroid.LONG);
      }
      const res = await axios.post(
        'http://192.168.1.7:5000/api/auth/register',
        {name, email, password},
      );
      if (res.data.status == true) {
        Alert.alert('Registration successfull');
        setEmail('');
        setName('');
        setPassword('');
        navigation.navigate('Login');
      }
    } catch (error) {
      Alert.alert('Something went wrong.Try again!');
    }
  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <View style={styles.topContainer}>
        <Text style={styles.headeText}>Create Account</Text>
        <Text
          style={{
            color: 'white',
            fontSize: hp(1.8),
            fontFamily: 'outfitRegular',
          }}>
          Let's drive into the adventure
        </Text>
      </View>
      <View style={styles.form}>
        <View>
          <InputField
            label="Name"
            placeholder="Enter name"
            onChangeText={e => setName(e)}
            value={name}
          />
        </View>
        <View>
          <InputField
            label="Email"
            placeholder="Enter Email"
            onChangeText={e => setEmail(e)}
            value={email}
          />
        </View>
        <View>
          <InputField
            label="Password"
            placeholder="Enter password"
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
            value={password}
          />
        </View>
        <Button btnText="Create Account" onPress={handleRegister} />
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{fontFamily: 'outfitMedium'}}>
            Already have an account ?{' '}
            <Text style={{color: 'blue', fontFamily: 'outfitBold'}}>
              Login here
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  topContainer: {
    height: hp(20),
    paddingHorizontal: wp(3),
    paddingTop: hp(4),
  },
  headeText: {
    fontSize: hp(5),
    color: colors.primary,
    fontFamily: 'outfitBold',
  },
  form: {
    backgroundColor: 'aliceblue',
    height: '100%',
    paddingHorizontal: hp(3),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: hp(3),
  },
});
