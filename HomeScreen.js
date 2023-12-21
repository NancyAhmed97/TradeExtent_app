import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{position:'relative',height:'100%'}}>
    <Text>Home</Text>
    <View
    style={{
      position: "absolute",
      bottom: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 18,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      borderTopColor: 'rgba(0,0,0,0.1)',
      borderTopWidth: 1
    }}>
    <Text
      onPress={() => navigation.navigate('Home')}

    >Home</Text>
    <Text
      onPress={() => navigation.navigate('Categouries')}

    >Categouries</Text>
    <Text
      onPress={() => navigation.navigate('Search')}

    >Search</Text>
    <Text
      onPress={() => navigation.navigate('Cart')}

    >Cart</Text>
    <Text
      onPress={() => navigation.navigate('Account')}

    >Account</Text>


  </View>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})