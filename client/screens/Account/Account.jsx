import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AccountMenu from '../../src/component/accountMenu';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../src/context/authContext';

const Account = () => {
  const [state] = useContext(AuthContext)
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.profileImage}>
          <Image
            source={require('../../src/assets/images/Random(6).jpeg')}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{state.existingUser.name}</Text>
          <Text style={styles.userEmail}>{state.existingUser.email}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <AccountMenu cardTitle="Recent Trips" cardIcon="✈️" arrowIcon={true} onPress={()=>navigation.navigate('EmptyList')}/>
        <AccountMenu
          cardTitle="Account Settings"
          cardIcon="⚙️"
          arrowIcon={true}
          onPress={()=>navigation.navigate("setting")}
        />
        <AccountMenu cardTitle="About" cardIcon="🤖" arrowIcon={true} onPress={()=>navigation.navigate("About")} />
        <AccountMenu cardTitle="Logout" cardIcon="📤" />
        <View style={styles.dev}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(1.3),
                fontFamily: 'outfitRegular',
              }}>
              Made with ❤️
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: hp(1.3),
                fontFamily: 'outfitRegular',
              }}>
              Nitish Kumar & Rohit Varshney
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  topContainer: {
    height: hp(18),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp(10),
  },
  bottomContainer: {
    backgroundColor: 'aliceblue',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
  },
  profileImage: {
    borderRadius: hp(6),
    elevation: 10,
  },
  profilePicture: {
    resizeMode: 'contain',
    height: hp(12),
    width: hp(12),
    borderRadius: hp(40),
  },
  userInfo: {
    width: wp(50),
  },
  userName: {
    fontSize: hp(2.5),
    color: 'black',
    textTransform: 'capitalize',
    fontFamily: 'outfitBold',
  },
  userEmail: {
    fontSize: hp(1.8),
    color: 'gray',
    textTransform: 'lowercase',
    fontFamily: 'outfitMedium',
    paddingLeft: wp(0.5),
  },
  dev: {
    alignSelf: 'center',
    marginTop: hp(2),
  },
});
