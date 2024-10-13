import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../constants/colors';


const Button = ({btnText , onPress}) => {
  return (
    <View>
     <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{btnText}</Text>
     </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  btn:{
    backgroundColor:"black",
    padding:15,
    marginVertical:hp(4),
    borderRadius:33,
    width:wp(50),
    alignSelf:'center',
  },
  btnText:{
    color:colors.primary,
    textAlign:'center',
    fontSize:hp(1.7),
    fontFamily:'outfitMedium'
  }
})