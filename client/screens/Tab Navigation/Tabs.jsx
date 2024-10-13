import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Expense from '../Expenses/Expense';
import Account from '../Account/Account';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({focused, size, color}) => (
            <Fontisto name="plane" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="expense"
        component={Expense}
        options={{
          tabBarLabel: 'Add Expense',
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons name="add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, size, color}) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    borderRadius: 30,
    height: hp(8),
  },
  tabBarItem: {
    padding: 10,
    paddingBottom: 10,
  },
  tabBarLabel: {
    fontSize: hp(1.6),
  },
});
