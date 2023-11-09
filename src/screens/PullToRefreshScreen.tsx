import React, { useState } from 'react';
import { View, Text, ScrollView, RefreshControl } from 'react-native';
import HeaderComponents from '../components/HeaderComponents';
import { styles } from '../theme/appTheme';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme/ThemeContext';

const PullToRefreshScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [refreshing, setrefreshing] = useState(false);

    const onRefresh = () => {
        setrefreshing(true);
        setTimeout(() => {
            console.log('finish');
            setrefreshing(false);
        }, 4000);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={40} //Espacio de TOP
                    progressBackgroundColor={'#C4C4C4'}
                    colors={['#363795', '#2B32B2', '#0575E6']}
                    title="Buscando..."
                    titleColor={colors.text}
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderComponents title="Pull to Refresh" />
                <Text style={{ color: colors.text }}>PullToRefreshScreen</Text>
            </View>
        </ScrollView>

    );
};

export default PullToRefreshScreen;

