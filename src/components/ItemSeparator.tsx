import React from 'react';
import { View } from 'react-native';

const ItemSeparator = () => {
    return (
        <View
            style={{
                borderBottomWidth: 1,
                opacity: 0.5,
                marginVertical: 4,
            }}
        />
    );
};

export default ItemSeparator;
