import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import HeaderComponents from '../components/HeaderComponents';

const ModalScreen = () => {

    const [isVisible, setisVisible] = useState(false);


    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <HeaderComponents title="Modal Screen" />

            <Button
                title="Open Modal"
                onPress={() => setisVisible(true)}

            />

            <Modal
                animationType="fade"
                visible={isVisible}
                transparent={true}
            >

                {/* Background de modal */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: colors.translucido,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {/* contenido del modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderRadius: 7,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> Titulo</Text>
                        <Text style={{ fontSize: 16, fontWeight: '300', color: 'black' }}> Cuerpo del modal</Text>
                        <Text> Cuerpo del modal</Text>
                        <Button
                            title="Cerrar"
                            onPress={() => setisVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalScreen;
