import React from 'react';
import {TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useTextColorHook from '../01CustomHooks/theme/useTextColorHook';

const BackButton = ({onPress}: {onPress: () => void}) => {
  const {textColor} = useTextColorHook();

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons size={35} color={textColor} name={'keyboard-arrow-left'} />
    </TouchableOpacity>
  );
};

export default BackButton;
