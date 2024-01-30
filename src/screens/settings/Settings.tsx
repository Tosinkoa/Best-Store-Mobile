import {FlatList, StyleSheet, Text, View} from 'react-native';
import BackButton from '../../components/00-Utils/BackButton';
import useBorderColorHook from '../../components/01CustomHooks/theme/useBorderColorHook';
import {RootStackParamList} from '../../types/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {COLORS} from '../../../theme/theme';
import useTextColorHook from '../../components/01CustomHooks/theme/useTextColorHook';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/00-Utils/Header';

type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Settings'>;
type MessageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type Props = {
  route: SettingsScreenRouteProp;
  navigation: MessageScreenNavigationProp;
};

const Settings = ({navigation, route}: Props) => {
  const {textColor} = useTextColorHook();

  const accountSettingsOption = [
    {
      id: 1,
      text: 'Profile',
      icon: <Ionicons name="person-outline" color={textColor} size={25} />,
    },
    {
      id: 2,
      text: 'Password',
      icon: <Ionicons name="lock-closed-outline" color={textColor} size={25} />,
    },
    {
      id: 3,
      text: 'Notifications',
      icon: <SimpleLineIcons name="bell" color={textColor} size={23} />,
    },
  ];

  const moreSettingsOption = [
    {
      id: 1,
      text: 'Rate & Review',
      icon: <SimpleLineIcons name="star" color={textColor} size={23} />,
    },
    {
      id: 2,
      text: 'Help',
      icon: <SimpleLineIcons name="question" color={textColor} size={23} />,
    },
  ];

  return (
    <View>
      <Header middleTitle="Settings" />
      <View style={styles.settingsBg}>
        <View
          style={[
            styles.upgradeBg,
            {backgroundColor: COLORS.primaryPurple700},
          ]}>
          <Text
            style={{
              color: COLORS.primaryPurple100,
              fontSize: 22,
              fontWeight: '500',
            }}>
            Premium Membership
          </Text>
          <Text
            style={{
              color: COLORS.primaryPurple100,
              fontSize: 16,
              fontWeight: '400',
            }}>
            Upgrade for more features
          </Text>
        </View>
        <Text style={{fontWeight: '700', fontSize: 18}}>Account</Text>
        <FlatList
          data={accountSettingsOption}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.settingsList}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  {item.icon}
                  <Text style={{fontSize: 18, fontWeight: '500'}}>
                    {item.text}
                  </Text>
                </View>
                <MaterialIcons
                  size={25}
                  color={textColor}
                  name={'keyboard-arrow-right'}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <Text style={{fontWeight: '700', fontSize: 18}}>More</Text>
        <FlatList
          data={moreSettingsOption}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View style={styles.settingsList}>
                <View style={{flexDirection: 'row', gap: 10}}>
                  {item.icon}
                  <Text style={{fontSize: 18, fontWeight: '500'}}>
                    {item.text}
                  </Text>
                </View>
                <MaterialIcons
                  size={25}
                  color={textColor}
                  name={'keyboard-arrow-right'}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settingsBg: {
    padding: 20,
    gap: 15,
  },
  upgradeBg: {
    padding: 20,
    paddingVertical: 30,
    borderRadius: 12,
    gap: 4,
  },
  settingsList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondaryNeutral300,
  },
});
