import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../../../theme/theme';
import {useState} from 'react';
import useBorderColorHook from '../../components/01CustomHooks/theme/useBorderColorHook';
import NumberFormatter from '../../components/00-Utils/NumberFormatter';
import Header from '../../components/00-Utils/Header';

const calculateOverallRating = (ratings: number[]): number => {
  if (ratings.length === 0) {
    return 0; // Default to 0 if there are no ratings
  }

  const sumOfRatings = ratings.reduce((sum, rating) => sum + rating, 0);
  const overallRating = sumOfRatings / ratings.length;
  return parseFloat(overallRating.toFixed(1)); // Round to one decimal place
};

const Shop = () => {
  const {borderColor} = useBorderColorHook();
  const [searchValue, setSearchValue] = useState<string>('');

  const ratings = [4, 5, 3, 2, 4];
  const overallRating = calculateOverallRating(ratings);

  const filledStars = Math.floor(overallRating);
  const hasHalfStar = overallRating % 1 !== 0;

  const renderStars = (): React.ReactNode[] => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= filledStars) {
        stars.push(<FontAwesome key={i} name="star" style={styles.starIcon} />);
      } else if (hasHalfStar && i === filledStars + 1) {
        stars.push(
          <FontAwesome key={i} name="star-half-full" style={styles.starIcon} />,
        );
      } else {
        stars.push(
          <FontAwesome key={i} name="star-o" style={styles.starIcon} />,
        );
      }
    }
    return stars;
  };

  const productData = [
    {
      id: 1,
      productName: "Apple IPhone 14 Pro Max 6.7' 256GB Nano Sim - Deep Purple",
      productPrice: 600000,
      crossedOutPrice: 700000,
      productImage: require('../../assets/images/iphone-14.png'),
    },
    {
      id: 2,
      productName: "Nexus 50' UHD 4K Frameless Android Smart TV (U4K621B)SA",
      productPrice: 560000,
      crossedOutPrice: 850000,
      productImage: require('../../assets/images/smart-tv.png'),
    },
    {
      id: 3,
      productName:
        'Sony Computer Entertainment Playstation 4 Slim Console 1TB + Extra Controller',
      productPrice: 950000,
      crossedOutPrice: 120000,
      productImage: require('../../assets/images/ps4-picture.png'),
    },
    {
      id: 4,
      productName: 'Airpods Pro With Noise Cancellation - White',
      productPrice: 10000,
      crossedOutPrice: 120000,
      productImage: require('../../assets/images/airpod.png'),
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Header leftTitle="Products" dontShowBackButton />

      <View style={styles.productListBg}>
        <FlatList
          ListHeaderComponent={() => (
            <View style={styles.productSearchBg}>
              <View style={styles.searchIconBg}>
                <AntDesign name="search1" style={styles.productSearchIcon} />
              </View>
              <TextInput
                style={styles.productSearch}
                placeholder="Search product"
                onChangeText={setSearchValue}
                onSubmitEditing={() => console.log(searchValue)}
              />
            </View>
          )}
          data={productData}
          numColumns={2}
          columnWrapperStyle={{gap: 10}}
          // contentContainerStyle={{gap: 10}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{flex: 1, marginBottom: 10}}>
              <View
                style={{
                  elevation: 3,
                  borderRadius: 8,
                  backgroundColor: COLORS.secondaryNeutral50,
                  height: 300,
                  width: '100%',
                  borderColor: borderColor,
                  justifyContent: 'space-between',
                  borderWidth: 1,
                }}>
                <Image
                  source={item.productImage}
                  style={{
                    height: 180,
                    width: '100%',
                    objectFit: 'contain',
                    borderBottomWidth: 1,
                  }}
                />
                <View style={{padding: 8}}>
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={{fontSize: 15}}>
                    {item.productName}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight: '700'}}>
                      ₦{NumberFormatter(item.productPrice)}
                    </Text>
                    <Text style={{textDecorationLine: 'line-through'}}>
                      ₦{NumberFormatter(item.crossedOutPrice)}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.starRatingContainer}>
                      {renderStars()}
                      <Text style={styles.ratingText}>{overallRating}</Text>
                    </View>
                    <FontAwesome6
                      size={25}
                      color={COLORS.secondaryNeutral700}
                      name="cart-arrow-down"
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  productSearchBg: {
    marginVertical: 10,
    width: '85%',
    position: 'relative',
    alignSelf: 'center',
  },
  searchIconBg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 20,
    justifyContent: 'center',
  },
  productSearch: {
    borderRadius: 15,
    backgroundColor: 'white',
    width: '100%',
    paddingLeft: 60,
    fontSize: 18,
  },
  productSearchIcon: {
    zIndex: 10,
    color: COLORS.secondaryNeutral700,
    fontSize: 28,
  },
  productListBg: {
    paddingHorizontal: 10,
    gap: 10,
    paddingBottom: 60,
  },
  starRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  starIcon: {
    fontSize: 20,
    color: 'gold',
    marginHorizontal: 1,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
