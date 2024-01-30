import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View, useColorScheme} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/theme';
import Cart from '../screens/cart/Cart';
import Chat from '../screens/chat/Chat';
import Settings from '../screens/settings/Settings';
import Shop from '../screens/shop/Shop';
import {RootStackParamList} from '../types/types';
import useBorderColorHook from '../components/01CustomHooks/theme/useBorderColorHook';

const TabNavigators = () => {
  const Tab = createMaterialTopTabNavigator<RootStackParamList>();
  const {borderColor} = useBorderColorHook();
  const isDarkMode = useColorScheme() === 'dark';
  const tabTextColor = isDarkMode
    ? COLORS.secondaryNeutral300
    : COLORS.secondaryNeutral500;

  const tabLabel = (labelName: string, focused: boolean) => (
    <View>
      <Text
        style={{
          color: focused ? COLORS.primaryPurple600 : tabTextColor,
          fontWeight: focused ? '600' : '400',
        }}>
        {labelName}
      </Text>
    </View>
  );

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      screenOptions={() => ({
        tabBarStyle: {
          height: 62,
          borderTopColor: borderColor,
          borderTopWidth: 1,
          marginBottom: 4,
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
          elevation: 0,
          zIndex: 0,
        },
        tabBarIconStyle: {
          width: 'auto',
          height: 'auto',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="shopping-bag"
              color={focused ? COLORS.primaryPurple600 : tabTextColor}
              size={28}
            />
          ),
          tabBarLabel: ({focused}) => tabLabel('Shop ', focused),
        }}
        name="Shop"
        component={Shop}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="chatbubble-outline"
              color={focused ? COLORS.primaryPurple600 : tabTextColor}
              size={28}
            />
          ),
          tabBarLabel: ({focused}) => tabLabel('Chat', focused),
        }}
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="cart-outline"
              color={focused ? COLORS.primaryPurple600 : tabTextColor}
              size={28}
            />
          ),
          tabBarLabel: ({focused}) => tabLabel('Cart', focused),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person-outline"
              color={focused ? COLORS.primaryPurple600 : tabTextColor}
              size={28}
            />
          ),
          tabBarLabel: ({focused}) => tabLabel('Settings', focused),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default TabNavigators;
