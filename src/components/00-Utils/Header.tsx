import {StyleSheet, Text, View} from 'react-native';
import BackButton from './BackButton';
import {RootStackParamList} from '../../types/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useBorderColorHook from '../01CustomHooks/theme/useBorderColorHook';
import {COLORS} from '../../../theme/theme';

type Props = {
  navigation?: NativeStackNavigationProp<RootStackParamList>;
  leftIcon?;
  rightTitle?: string;
  leftTitle?: string;
  rightIcon?;
  dontShowBackButton?: boolean;
  middleTitle?: string;
  dontShowBorder?: boolean;
};

const Header = ({
  navigation,
  leftIcon,
  rightTitle,
  rightIcon,
  leftTitle,
  dontShowBackButton,
  middleTitle,
  dontShowBorder,
}: Props) => {
  const {borderColor} = useBorderColorHook();

  return (
    <View
      style={[
        styles.headerStyle,
        {
          borderBottomColor: dontShowBorder
            ? COLORS.transparentColor
            : borderColor,
        },
      ]}>
      <View style={styles.leftContainer}>
        {leftIcon && <View>{leftIcon}</View>}
        {leftTitle && <Text style={styles.headerTitle}>{leftTitle}</Text>}
        {!leftIcon && !dontShowBackButton && (
          <BackButton onPress={() => navigation?.goBack()} />
        )}
      </View>

      <View style={styles.middleContainer}>
        {middleTitle && <Text style={styles.headerTitle}>{middleTitle}</Text>}
      </View>

      <View style={styles.rightContainer}>
        {rightTitle && <Text style={styles.headerTitle}>{rightTitle}</Text>}
        {rightIcon && <View>{rightIcon}</View>}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerTitle: {
    fontWeight: '400',
    fontSize: 24,
  },
});
