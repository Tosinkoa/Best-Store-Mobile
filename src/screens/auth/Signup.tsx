// Formik x React Native example
import {Formik} from 'formik';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../theme/theme';
// import { COLORS } from "@/theme/theme";

const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(false);

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
      }}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.authBg}>
          <View style={styles.authFormBg}>
            <View style={styles.inputRow}>
              <View style={styles.inputBg}>
                <Text style={styles.inputLabel}>First Name</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('first_name')}
                  onBlur={handleBlur('first_name')}
                  value={values.first_name}
                />
              </View>
              <View style={styles.inputBg}>
                <Text style={styles.inputLabel}>Last Name</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={handleChange('last_name')}
                  onBlur={handleBlur('last_name')}
                  value={values.last_name}
                />
              </View>
            </View>
            <View style={styles.inputBg}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View style={styles.inputBg}>
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 40,
                  zIndex: 10,
                }}>
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
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                keyboardType="ascii-capable"
                value={values.password}
                secureTextEntry={hidePassword}
              />
            </View>
            <View style={styles.inputBg}>
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 40,
                  zIndex: 10,
                }}>
                {!hideConfirmPassword && (
                  <Ionicons
                    size={23}
                    name={'eye-off-outline'}
                    onPress={() => setHideConfirmPassword(true)}
                  />
                )}
                {hideConfirmPassword && (
                  <Ionicons
                    size={23}
                    name={'eye-outline'}
                    onPress={() => setHideConfirmPassword(false)}
                  />
                )}
              </View>
              <Text style={styles.inputLabel}>Confirm Password</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                keyboardType="ascii-capable"
                value={values.confirm_password}
                secureTextEntry={hideConfirmPassword}
              />
            </View>
          </View>
          <View style={{display: 'flex', gap: 20}}>
            <Text style={{color: COLORS.secondaryNeutral700, fontSize: 17}}>
              By continuing, you agree to our{' '}
              <Text style={{color: COLORS.primaryPurple500}}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text style={{color: COLORS.primaryPurple500}}>
                Privacy Policy.
              </Text>
            </Text>
            <TouchableOpacity style={styles.authButton}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 20,
                  color: COLORS.secondaryNeutral100,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({
  authFormBg: {
    display: 'flex',
    gap: 8,
  },
  textInput: {
    borderColor: COLORS.secondaryNeutral300,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  inputLabel: {
    display: 'flex',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.secondaryNeutral500,
  },
  inputBg: {
    display: 'flex',
    width: '100%',
    position: 'relative',
  },
  authBg: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    height: 680,
    padding: '5%',
  },
  authButton: {
    backgroundColor: '#6b21a8',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
  },
});
