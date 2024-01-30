import { useColorScheme } from "react-native";
import { COLORS } from "../../../../theme/theme";

const useBorderColorHook = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const borderColor = isDarkMode ? COLORS.secondaryNeutral700 : COLORS.secondaryNeutral200
    return { borderColor }
}

export default useBorderColorHook;