import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/Theme/ThemeContext';

interface Props {
    title: string
}
const HeaderComponents = ({ title }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);

    const { top } = useSafeAreaInsets();
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20, backgroundColor: colors.background }}>
            <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
        </View>
    );
};

export default HeaderComponents;
