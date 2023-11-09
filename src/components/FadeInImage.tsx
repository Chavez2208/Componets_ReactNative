import React, { useState } from 'react';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme/ThemeContext';


interface Props {
    uri: string
    style?: StyleProp<ImageStyle>
}

const FadeInImage = ({ uri, style }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [isLoading, setisLoading] = useState(true);
    const { opacity, fadeIn } = useAnimation();

    const finishLoading = () => {
        setisLoading(false);
        fadeIn(1000);
    };

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {isLoading &&
                <ActivityIndicator color={colors.primary} size={30} style={{ position: 'absolute' }} />
            }
            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    );
};

export default FadeInImage;
