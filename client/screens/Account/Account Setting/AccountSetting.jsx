import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useContext } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../../../src/component/Button';
import { AuthContext } from '../../../src/context/authContext';

const AccountSetting = () => {
  const [state] = useContext(AuthContext)
  return (
    <View style={{backgroundColor: 'aliceblue', flex: 1}}>
      <View>
        <Image
          source={require('../../../src/assets/images/Random(8).jpeg')}
          style={styles.userImage}
        />
      </View>
      <View style={styles.userDetails}>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput value={state.existingUser.name} style={styles.inputField} editable={false} />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={state.existingUser.email} style={styles.inputField} editable={false} />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value=""
            style={styles.inputField}
            secureTextEntry={true}
          />
        </View>
        <Text
          style={{
            textAlign: 'left',
            color: 'red',
            fontFamily: 'outfitRegular',
          }}>
          You can only change your Password*
        </Text>
        <Button btnText="update profile" />
      </View>
    </View>
  );
};

export default AccountSetting;

const styles = StyleSheet.create({
  userImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 150,
    width: 150,
    borderRadius: 100,
    marginTop: hp(5),
  },
  userDetails: {
    marginHorizontal: wp(5),
    marginTop: hp(4),
  },
  label: {
    fontFamily: 'outfitMedium',
    fontSize: hp(2),
  },
  fieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp(1),
  },
  inputField: {
    backgroundColor: 'white',
    width: wp(70),
    paddingLeft: wp(5),
    fontSize: hp(2),
    fontFamily: 'outfitMedium',
    borderRadius: 10,
    elevation: 5,
  },
});
