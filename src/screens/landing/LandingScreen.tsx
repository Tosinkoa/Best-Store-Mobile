import React, {useState} from 'react';

import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import Octicons from 'react-native-vector-icons/Octicons';
import {COLORS} from '../../../theme/theme';
import BestAppLogo from '../../components/00-Utils/BestAppLogo';

const LandingScreen = ({navigation}: any) => {
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState(0);
  const width = Dimensions.get('window').width;

  const carouselContent = [
    {
      id: 1,
      image: require('../../assets/images/transaction.png'),
      content: 'Fast and seamless transaction.',
    },
    {
      id: 2,
      image: require('../../assets/images/handshake.png'),
      content: 'Connect with people who share the same interest.',
    },
    {
      id: 3,
      image: require('../../assets/images/shopping-cart.png'),
      content: 'Shopping made easy with just a click',
    },
    {
      id: 4,
      image: require('../../assets/images/call.png'),
      content: 'Connect with chat and voice or video call',
    },
  ];

  const renderDot = (index: number) => (
    <View style={styles.iconBg} key={index}>
      <Octicons
        size={23}
        color={selectedCarouselIndex === index ? '#9333ea' : '#dbdbdb'}
        name={'dot-fill'}
        style={styles.carouselIcon}
      />
    </View>
  );

  return (
    <View style={styles.background}>
      <BestAppLogo />
      <Carousel
        loop
        autoPlay={true}
        width={width}
        height={width / 2}
        data={carouselContent}
        scrollAnimationDuration={1000}
        onSnapToItem={index => setSelectedCarouselIndex(index)}
        style={{height: 450}}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Image source={item.image} style={styles.landingScreeImage} />
            <Text style={styles.landingScreenText}>{item.content}</Text>
          </View>
        )}
      />
      <View style={{flexDirection: 'row'}}>
        {carouselContent.map((_, index) => renderDot(index))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#6b21a8',
          paddingHorizontal: 30,
          paddingVertical: 15,
          borderRadius: 50,
        }}
        onPress={() => navigation.navigate('Sign up')}>
        <Text style={styles.createAccountButtonText}>Create account</Text>
      </TouchableOpacity>
      <View style={styles.questionTextBg}>
        <Text style={styles.questionText}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Log in')}>
          <Text style={[styles.questionText, {color: COLORS.primaryPurple600}]}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingVertical: '15%',
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    rowGap: 30,
  },
  landingScreenText: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  landingScreeImage: {
    height: 350,
    width: 350,
    objectFit: 'contain',
    display: 'flex',
  },
  createAccountButtonText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fafafa',
  },
  questionTextBg: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '500',
  },
  iconBg: {
    display: 'flex',
    flexDirection: 'row',
  },
  carouselIcon: {
    margin: 4,
  },
});
export default LandingScreen;
