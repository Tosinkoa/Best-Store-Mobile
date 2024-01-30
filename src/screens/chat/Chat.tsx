import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useBorderColorHook from '../../components/01CustomHooks/theme/useBorderColorHook';
import {RootStackParamList} from '../../types/types';
import Header from '../../components/00-Utils/Header';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'Chat'>;
type ChatScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Chat'
>;

type Props = {
  route: ChatScreenRouteProp;
  navigation: ChatScreenNavigationProp;
};

const Chat = ({route, navigation}: Props) => {
  const {borderColor} = useBorderColorHook();
  const chats = [
    {
      id: 1,
      user: 'John Eddie',
      message: 'Hello there',
      profileImage: require('../../assets/images/guy.jpg'),
      unread_message: 2,
      date: '10/20/2023',
    },
    {
      id: 2,
      user: 'Mary Clare',
      message:
        'Exercitation do dolor amet proident consectetur do laborum magna tempor. Consectetur nisi voluptate adipisicing Lorem tempor non sint ullamco adipisicing aliquip aute deserunt.',
      profileImage: require('../../assets/images/girl.jpg'),
      unread_message: 1,
      date: 'Yesterday',
    },
  ];

  return (
    <View>
      <Header
        leftTitle="Chat"
        dontShowBackButton
        rightIcon={
          <AntDesign name="search1" size={30} style={{fontWeight: '800'}} />
        }
      />
      <FlatList
        data={chats}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Message')}>
            <View style={styles.userChat}>
              <Image
                style={styles.chatProfilePicture}
                source={item.profileImage}
              />
              <View style={{flexDirection: 'column', flex: 1, gap: 2}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontWeight: '600', fontSize: 16}}>
                    {item.user}
                  </Text>
                  <Text style={{fontSize: 16}}>{item.date}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={{fontSize: 16, maxWidth: '95%'}}>
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      backgroundColor: 'red',
                      borderRadius: 50,
                      fontWeight: '500',
                      verticalAlign: 'middle',
                      color: '#ffffff',
                      height: 28,
                      width: 28,
                      textAlign: 'center',
                    }}>
                    {item.unread_message}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatHeaderStyle: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  chatHeaderTitle: {
    fontWeight: '400',
    fontSize: 24,
  },
  chatProfilePicture: {
    height: 50,
    width: 50,
    borderRadius: 50,
    objectFit: 'cover',
  },
  userChat: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
