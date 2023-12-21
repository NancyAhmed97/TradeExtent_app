import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FlashMessage, { showMessage } from "react-native-flash-message";
import axios from 'axios';
import { baseUrl } from '../Services';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState('');
  const [apiAlert, setApiAlert] = React.useState(false);

  const submitData = () => {
    if (!email || !password) {
      setAlert('all filed required')
    } else {
      setLoading(true)
      // send a POST  request to the backend API to register the user
      axios.post(`${baseUrl}auth/login?user_type=customer&email=${email}&password=${password}`,
        {
          headers: { 
            'Authorization': 'basic T64Mdy7m['
        }

        }
      )
        .then((response) => {
          if (response.data.result) {
            setLoading(false)
            AsyncStorage.setItem('token',response.data.access_token);

            // navigation.navigate('/Home')

          } else {
            setApiAlert(true);
            showMessage(response.data.message)
            setLoading(false)
            setTimeout(() => {
              setApiAlert(false);

            }, 2000);

          }

        })
        .catch((error) => {
          setLoading(false)

          console.log(
            "Registration Error",
            "An error occurred while registering"
          );
          console.log("registration failed", error);
        });


    }

  }
  return (
    <SafeAreaView>

      <View
        style={{
          height: '100%',
        }}>
        {apiAlert &&
          <FlashMessage position="top" />
        }
        <View
          style={{ marginTop: '25%' }}
        >
          <View style={styles.logoContainer}>
            <Text >
              hello logo
            </Text>
          </View>
          <ScrollView>

            <View style={styles.formContainer}>

              <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                id="email"
              />

              <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                placeholder="Password"
                keyboardType="numeric"
                id="password"
              />

              <Button
                title={loading ? "Sign In........." : "Sign In"}

                onPress={submitData}
              />


              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 10,

                }}

              >OR</Text>
              <View
                style={styles.loginWithSocialMedia}
              >

              </View>


              <View
                style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}
              >
                <Text>Don,t have an account ?  </Text>
                <Text
                  onPress={() => navigation.navigate('Register')}
                  style={{ color: '#000' }}
                >Sign Up</Text>

              </View>
            </View>

          </ScrollView>

        </View>
      </View>

      {/* <ScrollView
contentInsetAdjustmentBehavior="automatic"
style={backgroundStyle}>
<Header />
<View
style={{
backgroundColor: isDarkMode ? Colors.black : Colors.white,
}}>
<Section title="Step One">
Edit <Text style={styles.highlight}>App.tsx</Text> to change this
screen and then come back to see your edits.
</Section>
<Section title="See Your Changes">
<ReloadInstructions />
</Section>
<Section title="Debug">
<DebugInstructions />
</Section>
<Section title="Learn More">
Read the docs to discover what to do next:
</Section>
<LearnMoreLinks />
</View>
</ScrollView> */}
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: '10%',
    marginBottom: '10%'
  },
  formContainer: {
    marginHorizontal: 50,
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
  }

});
