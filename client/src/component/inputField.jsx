import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../constants/colors';

const InputField = ({label , placeholder , secureTextEntry , onChangeText , value , readOnly}) => {
  return (
    <View>
      <View style={styles.bottomContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput placeholder={placeholder} style={styles.InputField} secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value} readOnly={readOnly}/>
      </View>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputLabel:{
        paddingVertical:hp(1),
        paddingLeft:wp(2),
        color:colors.textLabel,
        textTransform:"uppercase",
        fontSize:hp(1.5),
        paddingTop:hp(2),
        fontFamily:'outfitMedium'

    },
    InputField:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        paddingLeft:15,
        elevation:10,
        backgroundColor:colors.primary,
        fontFamily:'outfitMedium'

    }
})