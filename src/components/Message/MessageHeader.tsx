import {TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import useTextColorHook from '../01CustomHooks/theme/useTextColorHook';

const MessageHeader = () => {
  const {textColor} = useTextColorHook();

  return (
    <View style={{flexDirection: 'row', gap: 18, alignItems: 'center'}}>
      <TouchableOpacity onPress={() => console.log('you clicked menu')}>
        <Feather size={25} color={textColor} name={'video'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('you clicked menu')}>
        <Feather size={25} color={textColor} name={'phone'} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('you clicked menu')}>
        <Entypo size={25} color={textColor} name={'dots-three-vertical'} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageHeader;
