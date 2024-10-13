import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const AddButton = () => {
  return (
    <View>
      <View style={styles.container}>
        <Icon name="add-circle" size={hp(10)} color="tomato" />
      </View>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        right:10,
        bottom:100
    }
});
