import React, { useContext, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderComponents from '../components/HeaderComponents';
import { ThemeContext } from '../context/Theme/ThemeContext';

const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors, currentTheme } } = useContext(ThemeContext);
    const TxtTheme = useRef('');


    const setTheme = () => {
        currentTheme === 'dark' ? setLightTheme() : setDarkTheme();
        currentTheme === 'dark' ? TxtTheme.current = 'Dark' : TxtTheme.current = 'Light';
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderComponents title="Cambio de Tema" />
            <View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                    }}
                    onPress={setTheme}
                >
                    <Text style={{
                        color: colors.text,
                        textAlign: 'center',
                        fontSize: 15,
                    }}> {TxtTheme.current}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChangeThemeScreen;
