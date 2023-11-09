import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../context/Theme/ThemeContext';


interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={stylesScreen.container}>
                <Icon name={menuItem.icon} size={25} color={theme.colors.primary} />
                <Text style={{ ...stylesScreen.itemText, color: theme.colors.text }}>
                    {menuItem.name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon name="chevron-forward-outline" size={25} color={theme.colors.primary} />
            </View>
        </TouchableOpacity>
    );
};


const stylesScreen = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemText: {
        color: 'black',
        marginLeft: 5,
    },
});
