import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Text from './Text';
import * as Colors from '../styles/Colors'
import { DetailsSmall } from '../assets/images/iconSvg';
import ToggleSwitch from 'toggle-switch-react-native';
import { useNavigation } from '@react-navigation/native';

const SettingCell = ({ style, item, index, length, ...props }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [value, setValue] = useState(item.hint)

    const toggleSwitch = () => {
        isEnabled ? setIsEnabled(false) : setIsEnabled(true)
    }
    const navigation = useNavigation();

    return (

        <TouchableOpacity onPress={() => item.goTo && item.goToScreen ? navigation.navigate(item.goToScreen) : null}
            style={[style, {
                width: '100%',
                height: 60,
                display: "flex",
                justifyContent: "center"
            }]}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                    {
                        item.Icon ?
                            <TouchableOpacity style={styles.icon}>
                                <item.Icon />
                            </TouchableOpacity>
                            : null
                    }
                    {
                        item.title ?
                            <Text GulfText size={17} color={Colors.paua} style={styles.title}>
                                {item.title}
                            </Text>
                            : null
                    }
                </View>
                {
                    !item.goTo ?
                        <View style={{ width: item.type == 'password' ? '50%' : '60%' }}>
                            <TextInput
                                secureTextEntry={item.type === 'password'}
                                // secureTextEntry={item.type === 'password' ? hidePassword : false}
                                style={[styles.hint, {
                                    marginEnd: item.hint == 'تغيير' ? wp("-30%") : item.goTo ? wp("-8%") :
                                        item.type == 'password' ? "9%" : "7%"
                                }]}
                                // style={[
                                //   styles.input,
                                //   {textAlign: I18nManager.isRTL ? 'right' : 'left'},
                                //   props.inputStyle,
                                // ]}
                                onChangeText={value => {
                                    setValue(value)
                                }}
                                value={value}
                                // placeholder={props.placeholder}
                                // placeholderTextColor={Colors.darkGrey}
                                autoCapitalize="none"
                            // {...props}
                            />
                        </View> : item.hint ?
                            <Text SFProRegular size={15} color={Colors.paua}
                                style={[styles.hint, { marginEnd: item.hint == 'تغيير' ? wp("-30%") : item.goTo ? wp("-8%") : "5%" }]}>
                                {item.hint}
                            </Text>
                            : null
                }
                {
                    item.title != "تفعيل التنبيهات" ?
                        item.goTo &&
                        <TouchableOpacity style={styles.details}>
                            <DetailsSmall />
                        </TouchableOpacity>
                        :
                        <View style={styles.details}>
                            <ToggleSwitch
                                isOn={isEnabled}
                                onColor="#eb5d4e"
                                offColor="#d3d3d3"
                                labelStyle={{ color: "black", fontWeight: "900" }}
                                size="large"
                                onToggle={toggleSwitch}
                                thumbOnStyle={{ width: 31, height: 31, marginLeft: -11 }}
                                thumbOffStyle={{ width: 31, height: 31 }}
                                trackOnStyle={{ width: 56, height: 36 }}
                                trackOffStyle={{ width: 56, height: 36 }}
                            />
                        </View>
                }
            </View>

            {
                item.title != "تفعيل التنبيهات" && index != length - 1 ?
                    <View style={styles.divider}></View>
                    : null
            }
        </TouchableOpacity>
    )
}
export default SettingCell;

const styles = StyleSheet.create({
    genderImg: {
        width: 72,
        height: 72
    },
    name: {
        marginTop: '12%',
        lineHeight: 20
    },
    age: {
        lineHeight: 20
    },
    divider: {
        width: '88%',
        height: 1,
        backgroundColor: "#d0dbe5",
        alignSelf: 'flex-end',
        top: "12%"
    },
    details: {
        alignSelf: 'center',
        marginEnd: '3%'
    },
    hint: {
        opacity: 0.64,
        marginStart: '15%',
        textAlignVertical: 'center',
        top: "-0.5%",
        overflow: 'hidden'

    },
    title: {
        textAlignVertical: 'center',
        top: "-3%"
    },
    icon: {
        left: "20%",
        marginEnd: 20
    }
})
