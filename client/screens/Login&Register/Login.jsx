import {
  Alert,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import colors from '../../src/constants/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputField from '../../src/component/inputField';
import Button from '../../src/component/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../../src/context/authContext';

const Login = () => {
  const [state, setState] = useContext(AuthContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        return ToastAndroid.show('Enter email and password', ToastAndroid.LONG);
      }
      const res = await axios.post('http://192.168.1.9:5000/api/auth/login', {
        email,
        password,
      });
      setState(res.data);
      if (res.data.status == true) {
        Alert.alert('Logged In successfully!');
        await AsyncStorage.setItem('auth', JSON.stringify(res.data));
        const data = await AsyncStorage.getItem('auth');
        setEmail(''), setPassword('');
        navigation.navigate('Tabs');
      }
    } catch (error) {
      Alert.alert('Invalid Email or Password');
      console.log(error)
    }
  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <View style={styles.topContainer}>
        <Text style={styles.headeText}>Login</Text>
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
            label="Email"
            placeholder="Enter email"
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
        <Button btnText="Continue" onPress={handleLogin} />
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{fontFamily: 'outfitMedium'}}>
            Don't have an account ?{' '}
            <Text style={{color: 'blue', fontFamily: 'outfitBold'}}>
              Create Account
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
