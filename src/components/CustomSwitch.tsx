import React, { useState } from 'react';
import { Switch, Platform } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../context/Theme/ThemeContext';


interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}
const CustomSwitch = ({ isOn, onChange }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };


    return (
        <Switch
            trackColor={{ false: '#D9D9DB', true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            // ios_backgroundColor={colors.background}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};

export default CustomSwitch;

