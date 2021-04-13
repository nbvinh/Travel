import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { scale } from "react-native-size-matters";
import AppStyle from "../theme/index";
import { useDispatch, useSelector } from "react-redux";
const Input = (props) => {
    const value = props.value
    const text = props.text
    const editable = props.editable
    const selectTextOnFocus = props.selectTextOnFocus
    const dispatch = useDispatch()
    const onText = (val) => {
        text === 'Họ' ? dispatch({ type: 'FISRTNAME', fisrtname: val }) :
            dispatch({ type: 'LASTNAME', lastname: val })
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.text}>{text}</Text>
            </View>
            <TextInput
                onChangeText={(val) => onText(val)}
                // value={value}
                style={styles.textInput}
                editable={editable}
                selectTextOnFocus={selectTextOnFocus}
                placeholder={value}
                placeholderTextColor={'#000000'}
            />
        </View>
    )
}
export default Input;
const styles = StyleSheet.create({
    container: {
        height: scale(40),
        borderBottomWidth: scale(0.5),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    body: {
        justifyContent: 'center',
        width: '35%',
        height: '100%'
    },
    text: {
        color: '#555555',
        fontWeight: '400',
        fontSize: scale(14),
        textAlign: 'left'
    },
    textInput: {
        justifyContent: 'center',
        height: '100%',
        width: '65%',
        color: 'black',
        fontSize: scale(14)
    }
})