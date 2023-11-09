import React, { useContext, useRef, useState } from 'react';
import { View, Text, ImageSourcePropType, Dimensions, Image, TouchableOpacity, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';
import { ThemeContext } from '../context/Theme/ThemeContext';
import { styles } from '../theme/appTheme';

const { width: screenWidth } = Dimensions.get('window');
interface Props extends StackScreenProps<any, any> { }

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];


const SlideScreen = ({ navigation }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext);
    const [activeIndex, setactiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimation();
    // const [isVisible, setisVisible] = useState(false);
    const isVisible = useRef(false);

    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={{ ...styles.title, color: colors.text }}>{item.title}</Text>
                <Text style={{ ...styles.text, color: colors.text }}>{item.desc}</Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }: any) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout="default"
                onSnapToItem={(index) => {
                    setactiveIndex(index);
                    if (index === 2) {
                        // setisVisible(true);
                        isVisible.current = true;
                        fadeIn();
                    }
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 20,
                    marginBottom: 20,
                }}
            >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 15,
                        height: 15,
                        borderRadius: 10,
                        backgroundColor: colors.primary,
                    }}
                />
                {
                    isVisible && (
                        <Animated.View
                            style={{ opacity }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{ flexDirection: 'row', backgroundColor: colors.primary, width: 140, height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => {
                                    if (isVisible.current) {
                                        navigation.navigate('HomeScreen');
                                        isVisible.current = false;
                                        setactiveIndex(0);
                                    }
                                }}
                            >
                                <Text>Iniciar</Text>
                                <Icon name="chevron-forward-outline" size={30} color={colors.primary} />
                            </TouchableOpacity>
                        </Animated.View>
                    )
                }


            </View>
        </View>
    );
};

export default SlideScreen;
