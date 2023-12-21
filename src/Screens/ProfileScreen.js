import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
    <View
        style={{
            height: '30%',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: '#bc529a',
            marginBottom: 10
        }}
    >
    </View>




    <ScrollView>
        <View>
            <View style={styles.tabContainer}>
                {/* <Image source={require('')} /> */}
                <Text style={{ fontSize: 17 }}>Nancy Ahmed</Text>
            </View>
            <View style={styles.tabContainer}>
                {/* <Image source={require('')} /> */}
                <Text style={{ fontSize: 17 }}>Anancyahmed977@icloud.com</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}
                style={[styles.tabContainer, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                <View
                >
                    {/* <Image source={require('')} /> */}
                    <Text style={{ fontSize: 17 }}>Update Profile</Text>
                </View>
                <View><Text>kdfjkfjklsdf</Text></View>



            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('dsjjsfj')}
                style={[styles.tabContainer, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                <View
                >
                    {/* <Image source={require('')} /> */}
                    <Text style={{ fontSize: 17 }}>Logout</Text>
                </View>
                <View><Text>kdfjkfjklsdf</Text></View>



            </TouchableOpacity>

            <Text
                style={{ fontWeight: '500', fontSize: 18, padding: 10 }}
            >
                General Setting
            </Text>
            <TouchableOpacity
                onPress={() =>navigation.navigate('Wishlist')}
                style={[styles.tabContainer, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                <View
                >
                    {/* <Image source={require('')} /> */}
                    <Text style={{ fontSize: 17 }}>My Wishlist</Text>
                </View>
                <View><Text>kdfjkfjklsdf</Text></View>



            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>navigation.navigate('Order')}
                style={[styles.tabContainer, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                <View
                >
                    {/* <Image source={require('')} /> */}
                    <Text style={{ fontSize: 17 }}>My Order</Text>
                </View>
                <View><Text>kdfjkfjklsdf</Text></View>



            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => console.log('dsjjsfj')}
                style={[styles.tabContainer, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                <View
                >
                    {/* <Image source={require('')} /> */}
                    <Text style={{ fontSize: 17 }}>Dark Mode</Text>
                </View>
                <View><Text>kdfjkfjklsdf</Text></View>



            </TouchableOpacity>

        </View>
    </ScrollView>
</View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})