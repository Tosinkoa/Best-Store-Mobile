import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../theme/theme';
import Header from '../../components/00-Utils/Header';
import {RootStackParamList} from '../../types/types';

type CartScreenRouteProp = RouteProp<RootStackParamList, 'Cart'>;
type CartScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Cart'
>;

type Props = {
  route: CartScreenRouteProp;
  navigation: CartScreenNavigationProp;
};

const Cart = ({route, navigation}: Props) => {
  const [productCount, setProductCount] = useState<number>(1);
  const [productCountError, setProductCountError] = useState<string>('');

  const addProductCount = () => {
    if (productCount + 1 > 50)
      return setProductCountError('Product count cannot be greater than 50');
    setProductCount(prevCount => prevCount + 1);
  };

  const minusProductCount = () => {
    if (productCount - 1 < 1)
      return setProductCountError('Product count cannot be less than 1');
    setProductCount(prevCount => prevCount - 1);
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Header middleTitle="My Cart" dontShowBorder dontShowBackButton />
      <View style={styles.cartBg}>
        <View style={styles.eachProductCard}>
          <Image
            style={{height: 110, width: 110, borderRadius: 10}}
            source={require('../../assets/images/girl.jpg')}
          />
          <View style={styles.productInfo}>
            <View style={styles.productRow}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={styles.productTitle}>
                XIAOMI Redmi 12 6.79" 8GB RAM/256GB ROM Android 13 - Midnight
                Black
              </Text>
              <AntDesign name="close" size={22} />
            </View>
            <View style={styles.productButAndPriceBg}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  gap: 10,
                }}>
                <TouchableOpacity
                  onPress={minusProductCount}
                  style={styles.productCountIcon}>
                  <AntDesign name="minus" style={styles.productIcon} />
                </TouchableOpacity>
                <Text style={styles.productCount}>{productCount}</Text>
                <TouchableOpacity
                  onPress={addProductCount}
                  style={styles.productCountIcon}>
                  <AntDesign name="plus" style={styles.productIcon} />
                </TouchableOpacity>
              </View>
              <Text style={{fontWeight: '500', fontSize: 20}}> ₦40000</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartBg: {
    flex: 1,
    padding: 10,
  },
  eachProductCard: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryNeutral50,
    elevation: 8,
  },
  productTitle: {
    fontWeight: '500',
    fontSize: 16,
    width: '90%',
  },
  productInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productCountIcon: {
    height: 28,
    width: 35,
    borderRadius: 4,
    paddingHorizontal: 5,
    backgroundColor: COLORS.secondaryNeutral800,
    justifyContent: 'center',
  },
  productIcon: {
    textAlign: 'center',
    color: COLORS.secondaryNeutral50,
    fontSize: 20,
  },
  productCount: {
    borderWidth: 1,
    width: 40,
    height: 28,
    borderRadius: 4,
    padding: 4,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  productButAndPriceBg: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 'auto',
    justifyContent: 'space-between',
  },
});
