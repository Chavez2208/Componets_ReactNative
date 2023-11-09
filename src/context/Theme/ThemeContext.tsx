import React, { createContext, useReducer, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeState, themeReducer, lightTheme, darkTheme } from './ThemeReducer';


interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {

    const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme); //Todo: Leer el tema global

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
    };

    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
    };

    useEffect(() => {
        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme();
    }, [colorScheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
