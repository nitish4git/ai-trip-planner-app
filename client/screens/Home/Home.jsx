import { StatusBar, StyleSheet, Text, View , Button, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { TripContext } from '../../src/context/tripContext'

const Home = () => {
  const [trip] = useContext(TripContext)
  // console.log("all the rirps",trips[0].place)

  // useEffect(()=>{
  //   getAllTrips();
  // },[])
//  const x = trip[0].createdAt
//  const y = x.split("T")[0].split("-")
//  const date = `${y[2]}/${y[1]}/${y[0]}`
 
  return (
    <ScrollView>
    <View style={{backgroundColor:'aliceblue', flex:1}}>
      <Text>{JSON.stringify(trip , null , 4)}</Text>
      <Button title='get data'/>
      {/* <Text>{JSON.stringify(x)}</Text>
      <Text>{JSON.stringify(y)}</Text>
      <Text>{date}</Text> */}
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})