import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const BestAppLogo = () => {
  return (
    <View style={styles.logoBg}>
      <Text style={styles.logoText}> BEST </Text>
      <FontAwesome6 style={styles.logoIcon} name={'cart-shopping'} />
      <Text style={styles.logoText}> STORE </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoBg: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontWeight: '800',
    fontSize: 24,
  },
  logoIcon: {
    fontSize: 50,
    color: '#9333ea',
  },
});

export default BestAppLogo;
