import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from '../context/Theme/ThemeContext';


const { theme: { colors: Colores } } = useContext(ThemeContext);
export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 10,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
    },
    rowContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 7,
    },
    text: {
        color: Colores.text,
    },
});

export const colors = {
    primary: Colores.primary,
    Botones: Colores.notification,
    translucido: Colores.primary,
};
