import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View, useColorScheme} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {COLORS} from '../theme/theme';
import BackButton from './components/00-Utils/BackButton';
import MessageHeader from './components/Message/MessageHeader';
import TabNavigators from './navigators/TabNavigators';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Message from './screens/chat/Message';
import LandingScreen from './screens/landing/LandingScreen';
import {RootStackParamList} from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const myDarkTheme = {
    dark: true,
    colors: {
      primary: COLORS.primaryPurple700,
      background: COLORS.secondaryNeutral800,
      card: COLORS.secondaryNeutral800,
      text: COLORS.secondaryNeutral200,
      border: COLORS.secondaryNeutral200,
      notification: COLORS.secondaryNeutral800,
    },
  };

  const myLightTheme = {
    dark: true,
    colors: {
      primary: COLORS.primaryPurple700,
      background: COLORS.secondaryNeutral50,
      card: COLORS.secondaryNeutral50,
      text: COLORS.secondaryNeutral800,
      border: COLORS.secondaryNeutral400,
      notification: COLORS.secondaryNeutral50,
    },
  };

  return (
    <NavigationContainer theme={isDarkMode ? myDarkTheme : myLightTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: COLORS.secondaryNeutral50,
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Tab"
            component={TabNavigators}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={LandingScreen}
          />
          <Stack.Screen
            options={({navigation}) => ({
              headerLeft: () => (
                <BackButton onPress={() => navigation.goBack()} />
              ),
            })}
            name="Log in"
            component={Login}
          />
          <Stack.Screen
            options={({navigation}) => ({
              headerTintColor: COLORS.secondaryNeutral700,
              headerLeft: () => (
                <BackButton onPress={() => navigation.goBack()} />
              ),
            })}
            name="Sign up"
            component={Signup}
          />
          <Stack.Screen
            options={({navigation}) => ({
              headerLeft: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <BackButton onPress={() => navigation.goBack()} />
                  <Image
                    source={require('./assets/images/girl.jpg')}
                    style={{height: 40, width: 40, borderRadius: 50}}
                  />
                </View>
              ),
              headerRight: () => <MessageHeader />,
              title: '',
            })}
            name="Message"
            component={Message}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
