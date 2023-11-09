import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItem';
import HeaderComponents from '../components/HeaderComponents';
import ItemSeparator from '../components/ItemSeparator';


const HomeScreen = () => {
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>
            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name} //Llave Unica
                ListHeaderComponent={<HeaderComponents title="Menú de Opciones" />}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    );
};

export default HomeScreen;
