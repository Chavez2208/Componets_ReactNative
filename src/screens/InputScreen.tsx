import React, { useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderComponents from '../components/HeaderComponents';
import CustomSwitch from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/Theme/ThemeContext';


const InputScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const { form, onChange, isSubscribed } = useForm({
        name: undefined,
        email: undefined,
        phone: undefined,
        isSubscribed: false,
    });


    return (
        <ScrollView >
            <View style={styles.globalMargin}>
                <HeaderComponents title={JSON.stringify(form, null, 4)} />
                <TextInput
                    style={{ ...styleScreen.txtInput, color: colors.text }}
                    placeholder="Ingrese su nombre"
                    placeholderTextColor={colors.text}
                    autoCapitalize="words"
                    onChangeText={(value) => onChange(value, 'name')}
                    keyboardType="default"
                />
                <TextInput
                    style={{ ...styleScreen.txtInput, color: colors.text }}
                    placeholder="Ingrese su Email"
                    placeholderTextColor={colors.text}
                    autoCapitalize="none"
                    onChangeText={(value) => onChange(value, 'email')}
                    keyboardType="email-address"
                />
                <TextInput
                    style={{ ...styleScreen.txtInput, color: colors.text }}
                    placeholder="Ingrese su Telefono"
                    placeholderTextColor={colors.text}
                    autoCapitalize="none"
                    onChangeText={(value) => onChange(value, 'phone')}
                    keyboardType="number-pad"
                />
                <View style={styles.rowContainer}>
                    <Text style={{ color: colors.text }}>
                        Subscribirse
                    </Text>
                    <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
                </View>
            </View>
        </ScrollView>
    );
};

const styleScreen = StyleSheet.create({
    txtInput: {
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 50,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10,
    },
});

export default InputScreen;
