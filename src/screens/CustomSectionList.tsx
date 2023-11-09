import React, { useContext } from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderComponents from '../components/HeaderComponents';
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/Theme/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin'],
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman'],
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama'],
    },
];

const CustomSectionList = () => {

    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={{ ...styles.globalMargin, flex: 1, marginBottom: 0, paddingBottom: 0 }}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderComponents title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{ bottom: 40 }}>
                        <HeaderComponents title={'Total de casas ' + casas.length} />
                    </View>
                )}

                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                stickySectionHeadersEnabled

                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>
                        <HeaderComponents title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderComponents title={'Total de heroes' + section.data.length} />
                )}

                SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}

                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CustomSectionList;
