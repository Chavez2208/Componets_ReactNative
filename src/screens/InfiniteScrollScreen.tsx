import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import HeaderComponents from '../components/HeaderComponents';
import { colors, styles } from '../theme/appTheme';
import { FlatList } from 'react-native-gesture-handler';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {

    const [numbers, setnumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }
        setTimeout(() => {
            setnumbers([...numbers, ...newArray]);
        }, 500);
    };

    // const renderItem = (item: number) => {
    //     return (
    //         <Text style={{ ...styles.text, height: 150 }}>{item}</Text>
    //     );
    // };

    const renderItem = (item: number) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                    borderRadius: 5,
                    marginBottom: 1,
                }}
            />
            // <Image
            //     source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
            //     style={{
            //         width: '100%',
            //         height: 400,
            //     }}
            // />
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={<HeaderComponents title="Scroll Infinito" />}
                onEndReached={loadMore} //Cuando llega al final del scrool
                onEndReachedThreshold={0.5}

                ListFooterComponent={() => (
                    <View style={{ height: 100, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size={30} color={colors.Botones} />
                    </View>
                )}
            />
        </View>
    );
};

export default InfiniteScrollScreen;
