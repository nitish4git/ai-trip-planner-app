import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login&Register/Login';
import Register from '../Login&Register/Register';
import Tabs from '../Tab Navigation/Tabs';
import AddExpense from '../Expenses/AddExpense';
import ExpenseHistory from '../Expenses/ExpenseHistory';
import About from '../Account/About/About';
import Home from '../Home/Home';
import AccountSetting from '../Account/Account Setting/AccountSetting';
import EmptyList from '../../src/component/EmptyList';
import AddTrip from '../Expenses/AddTrip';


const Stack = () => {
    const Stack = createNativeStackNavigator();
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Register' component={Register}/>
    <Stack.Screen name="AddExpense" component={AddExpense}/>
    <Stack.Screen name="ExpenseHistory" component={ExpenseHistory}/>
    <Stack.Screen name='About' component={About}/>
    <Stack.Screen name='setting' component={AccountSetting}/>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='EmptyList' component={EmptyList}/>
    <Stack.Screen name='Tabs' component={Tabs}/>
    <Stack.Screen name='AddTrip' component={AddTrip}/>
   </Stack.Navigator>
  )
}

export default Stack