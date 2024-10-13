import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TripCard from '../../src/component/TripCard';
import {useNavigation} from '@react-navigation/native';
import EmptyList from '../../src/component/EmptyList';
import {TripContext} from '../../src/context/tripContext';
import moment from 'moment';
import deletTrip from '../../API/deleteTrip';

const Expense = () => {
  const navigation = useNavigation();
  const [trip] = useContext(TripContext);
  const [deleteTrip, setDeleteTrip] = useState();
  const handleDelete = item => {
    setDeleteTrip(item._id);
    navigation.navigate('expense');
  };
// calling delte api
  useEffect(() => {
    deletTrip(deleteTrip);
  }, [deleteTrip]);
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'aliceblue'}}>
        <View style={styles.header}>
          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <View>
                <Text style={styles.headerText}>All Trips</Text>
                <Text style={{fontFamily: 'outfitMedium'}}>
                  Remember your happiness
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('AddTrip')}>
                <Icon name="add-circle" size={hp(5)} color="tomato" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.TripCard}>
          <FlatList
            data={trip}
            renderItem={({item}) => {
              return (
                <TripCard
                  location={item.place}
                  country={item.country}
                  date={moment(item.createdAt).format('DD/MM/YYYY')}
                  onPress={() => navigation.navigate('AddExpense')}
                  onCardPress={() => navigation.navigate('ExpenseHistory')}
                  onDelete={() => handleDelete(item)}
                />
              );
            }}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item._id}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            ListFooterComponent={<View style={{height: hp(45)}} />}
            ListEmptyComponent={<EmptyList />}
            style={{backgroundColor: 'aliceblue', height: '100%'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Expense;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 10,
  },
  TripCard: {
    paddingHorizontal: wp(3),
    backgroundColor: 'aliceblue',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: hp(2),
  },
  container: {
    marginHorizontal: wp(4),
  },
  headerText: {
    fontSize: hp(3.5),
    color: 'black',
    fontFamily: 'outfitBold',
  },
});
