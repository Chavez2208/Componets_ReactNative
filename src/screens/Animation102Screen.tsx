import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme/ThemeContext';

const Animation102Screen = () => {
    const { pan, panResponder } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styleScreen.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={{
                    ...styleScreen.CyanBox,
                    backgroundColor: colors.primary,
                    transform: [{
                        translateX: pan.getLayout().left,
                    },
                    {
                        translateY: pan.getLayout().top,
                    },
                    ],
                }}
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
    CyanBox: {
        backgroundColor: '#75CEDB',
        width: 150,
        height: 150,
        borderRadius: 5,
    },
});

export default Animation102Screen;
