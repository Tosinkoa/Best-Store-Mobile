// Formik x React Native example
import {Formik} from 'formik';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../../theme/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';

const Login = ({navigation}: any) => {
  const [hidePassword, setHidePassword] = useState(true);

  const validation = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Kindly enter a valid email'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={validation}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View style={styles.authBg}>
          <View style={styles.authFormBg}>
            <View style={styles.inputBg}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text style={styles.errorText}>{errors.email}</Text>
            </View>
            <View style={styles.inputBg}>
              <Text style={styles.inputLabel}>Password</Text>
              <View
                style={{position: 'absolute', right: 10, top: 40, zIndex: 10}}>
                {!hidePassword && (
                  <Ionicons
                    size={23}
                    name={'eye-off-outline'}
                    onPress={() => setHidePassword(true)}
                  />
                )}
                {hidePassword && (
                  <Ionicons
                    size={23}
                    name={'eye-outline'}
                    onPress={() => setHidePassword(false)}
                  />
                )}
              </View>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                keyboardType="ascii-capable"
                value={values.password}
                secureTextEntry={hidePassword}
              />
              <Text style={styles.errorText}>{errors.password}</Text>
              <Text
                style={{
                  fontWeight: '600',
                  color: COLORS.primaryPurple500,
                  fontSize: 17,
                }}>
                Forgot password?
              </Text>
            </View>
          </View>
          <View style={{display: 'flex', gap: 20}}>
            <TouchableOpacity
              style={styles.authButton}
              onPress={() => navigation.navigate('Tab')}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 20,
                  color: COLORS.secondaryNeutral100,
                }}>
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;

const styles = StyleSheet.create({
  authFormBg: {
    display: 'flex',
    gap: 8,
  },
  errorText: {
    color: '#cc3a00',
    fontSize: 15,
  },
  textInput: {
    borderColor: COLORS.secondaryNeutral300,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  inputLabel: {
    display: 'flex',
    fontSize: 18,
    fontWeight: '700',
  },
  inputBg: {
    display: 'flex',
    position: 'relative',
  },
  authBg: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    height: 400,
    padding: '5%',
  },
  authButton: {
    backgroundColor: '#6b21a8',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
  },
});
