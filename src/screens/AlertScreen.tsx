import React from 'react';
import { View, Button, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderComponents from '../components/HeaderComponents';
import { styles } from '../theme/appTheme';

const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Titulo de la alerta',
            'Mensaje de Alertaaa',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'destructive',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log('Funciooo'),
            }
        );
    };

    const showPromptAlerta = () => {
        prompt(
            'Titulo de de Prompt Alerta',
            'Cuerpo de la alerta, msg',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'phone-pad',
                cancelable: true,
                defaultValue: 'Hola valor por defecto',
                placeholder: 'Placeholder',
            },
        );
    };


    return (
        <View style={{ marginTop: 20, ...styles.globalMargin }}>
            <HeaderComponents title="Alertas Nativas" />
            <Button
                title="Mostrar Alerta Simple"
                onPress={showAlert}
            />
            <View style={{ flex: 1, marginVertical: 10 }} />
            <Button
                title="Mostrar Alerta Prompt"
                onPress={showPromptAlerta}
            />
        </View>
    );
};

export default AlertScreen;
