import { useColorScheme } from "react-native";
import { COLORS } from "../../../../theme/theme";

const useTextColorHook = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const textColor = isDarkMode ? COLORS.secondaryNeutral200 : COLORS.secondaryNeutral700
    return { textColor }
}

export default useTextColorHook;
