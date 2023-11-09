import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HeaderComponents from '../components/HeaderComponents';
import { styles } from '../theme/appTheme';
import CustomSwitch from '../components/CustomSwitch';


interface StateSwitch {
    isActive: boolean,
    isHungry: boolean,
    isHappy: boolean,
}
const SwitchScreen = () => {

    const [state, setstate] = useState<StateSwitch>({
        isActive: false,
        isHungry: false,
        isHappy: false,
    });

    const { isActive, isHungry, isHappy } = state;

    const onChange = (value: boolean, field: string) => {
        setstate({
            ...state,
            [field]: value,
        });
    };


    return (
        <View style={{ marginTop: 20, ...styles.globalMargin }}>
            <HeaderComponents title="Switches" />
            <View style={styles.rowContainer}>
                <Text style={styles.text}>isActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>

            <View style={styles.rowContainer}>
                <Text style={styles.text}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>

            <View style={{ ...styles.rowContainer, marginBottom: 20 }}>
                <Text style={styles.text}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>

            <Text style={styles.text}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    );
};

export default SwitchScreen;
