import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { baseUrl } from "../Services"
import axios from 'axios'
import FlashMessage, { showMessage } from "react-native-flash-message";

// import CheckBox from '@react-native-community/checkbox';

const RegisterScreen = ({ navigation }) => {
  const [Name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [checkPasswordError, setCheckPasswordError] = React.useState('');
  const [showCheckPassword, setShowCheckPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState('');
  const [apiAlert, setApiAlert] = React.useState(false);




  const [checkPassword, setCheckPassword] = React.useState('');
  const showPasswordFunction = () => {
    setShowPassword(!showPassword);
  }
  const showCheckPasswordFunction = () => {
    setShowCheckPassword(!showCheckPassword);
  }
  const submitData = () => {
    if (!Name || !email || !password || !checkPassword) {
      setAlert('all filed required')
    } else {
      setLoading(true)
      // send a POST  request to the backend API to register the user
      axios.post(`${baseUrl}auth/signup?email_or_phone=${email}&password=${password}&register_by=email&name=${Name}`)
        .then((response) => {
          if (response.data.result) {
            setLoading(false)
            console.log(response.data);

            navigation.navigate('Login')

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
          backgroundColor: 'white'
        }}>
        {apiAlert &&
          <FlashMessage  position="top" />
        }
        <View style={styles.logoContainer}>
          <Text >
            hello logo
          </Text>
        </View>
        <ScrollView>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={Name}
              placeholder="Name"
              keyboardType="default"
              id="Name"
            />

            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
              inputMode="email"
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
            {checkPasswordError &&
              <Text style={{ color: 'red' }}>
                {checkPasswordError}
              </Text>
            }
            <View style={{ position: 'relative' }}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setCheckPassword(text)}
                secureTextEntry={!showCheckPassword}
                value={checkPassword}
                placeholder="Check Password"
                keyboardType="numeric"
                id="checkPassword"
                onBlur={() => {
                  if (password !== checkPassword) {
                    setCheckPasswordError('password didnot much')
                  }
                }}
                onFocus={() => {
                  setCheckPasswordError('')

                }}
              />

              {/*<Feather
                  name="eye-off"
                  size={24}
                  color="#aaa"
                  style={{ position: 'absolute', bottom: 29, right: 0 }}
                  onPress={toggleShowPassword}
                />
                :
                <Feather
                name="eye-off"
                size={24}
                color="#aaa"
                style={{ position: 'absolute', bottom: 29, right: 0 }}
                onPress={toggleShowPassword}
              />

              } */}
              {/* <MaterialCommunityIcons
                name={showCheckPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#aaa"
                style={{ position: 'absolute', bottom: 29, right: 0 }}
                onPress={toggleShowPassword}
              /> */}

            </View>
            <View style={{ marginBottom: 10 }}>

              {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
            </View>
            <Button
              title={loading ? "Create an account........." : "Create an account"}
              onPress={submitData}
            />
            <View
              style={{ flexDirection: 'row', marginTop: 20, alignSelf: 'center' }}
            >
              <Text>OR </Text>
              <Text
                onPress={() => navigation.navigate('Login')}
                style={{ color: '#000' }}
              >Login to your account</Text>

            </View>
          </View>

        </ScrollView>
      </View >
    </SafeAreaView >
  )
}

export default RegisterScreen

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
