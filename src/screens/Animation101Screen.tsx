import React, { useContext } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/Theme/ThemeContext';

const Animation101Screen = () => {

    const { position, opacity, startMovingPosition, fadeIn, fadeOut } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styleScreen.container}>
            <Animated.View
                style={{
                    ...styleScreen.purpleBox,
                    backgroundColor: colors.primary,
                    opacity,
                    marginBottom: 20,
                    transform: [
                        {
                            translateY: position,
                        },
                    ],
                }}
            />

            <Button
                title="Fade In"
                onPress={() => {
                    fadeIn();
                    startMovingPosition(-100);
                }}
            />

            <Button
                title="Fade Out"
                onPress={fadeOut}
            />
        </View>
    );
};

const styleScreen = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        borderRadius: 10,
    },
});

export default Animation101Screen;

