import {ScrollView, Text, View, useColorScheme} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {COLORS} from '../../../theme/theme';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';

type MessageScreenRouteProp = RouteProp<RootStackParamList, 'Message'>;
type MessageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Message'
>;

type Props = {
  route: MessageScreenRouteProp;
  navigation: MessageScreenNavigationProp;
};

const Message = ({route, navigation}: Props) => {
  const [message, setMessage] = useState<string>('');

  return (
    <View style={{flex: 1, height: '100%'}}>
      <ScrollView style={{maxHeight: '100%'}}>
        <Text style={styles.beginingMessageText}>
          This is the very begining of your legendary conversation with John
        </Text>

        <View style={{marginTop: 10, padding: 20}}>
          <Text style={styles.messageDate}>Yesterday</Text>
          {Array(3)
            .fill('')
            .map((_, index) => (
              <View
                key={index}
                style={[styles.messageBg, {marginLeft: 'auto'}]}>
                <Text
                  style={[
                    styles.message,
                    {
                      backgroundColor: COLORS.primaryPurple600,
                      color: COLORS.primaryPurple200,
                    },
                  ]}>
                  Hello how are you doing Paul?{' '}
                </Text>
                <View style={[styles.timeAndSeen, {marginLeft: 'auto'}]}>
                  <Text>10: 03PM</Text>
                  {/* <Ionicons name="checkmark" size={20} /> */}
                  <Ionicons name="checkmark-done" size={20} />
                </View>
              </View>
            ))}
          {Array(3)
            .fill('')
            .map((_, index) => (
              <View key={index} style={styles.messageBg}>
                <Text
                  style={[
                    styles.message,
                    {
                      backgroundColor: COLORS.secondaryNeutral200,
                      color: COLORS.secondaryNeutral700,
                    },
                  ]}>
                  I am doing fine, and you?
                </Text>
                <View style={styles.timeAndSeen}>
                  <Text>10: 03PM</Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
      <View style={styles.messageInputBg}>
        <TextInput
          onChangeText={value => setMessage(value)}
          placeholder="Type your message here..."
          style={{
            borderWidth: 1,
            borderRadius: 50,
            width: '100%',
            padding: 10,
            fontSize: 16,
          }}
        />
        {message.trim() ? (
          <Ionicons
            style={{marginLeft: 6}}
            name="send"
            size={30}
            color={COLORS.primaryPurple600}
          />
        ) : (
          <MaterialIcons
            style={{marginLeft: 6}}
            name="mic"
            size={40}
            color={COLORS.primaryPurple600}
          />
        )}
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  beginingMessageText: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondaryNeutral200,
    width: '80%',
    marginHorizontal: 'auto',
  },
  messageDate: {
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.secondaryNeutral400,
    marginBottom: 10,
  },
  message: {
    alignSelf: 'flex-start',
    fontSize: 16,
    borderRadius: 30,
    padding: 12,
    fontWeight: '500',
  },
  messageBg: {
    alignSelf: 'flex-start',
    maxWidth: '80%',
    marginVertical: 6,
  },
  timeAndSeen: {
    alignSelf: 'flex-start',
    paddingRight: 5,
    gap: 5,
    flexDirection: 'row',
  },
  messageInputBg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingVertical: 4,
    paddingHorizontal: 30,
    flexDirection: 'row',
    width: '100%',
  },
});
