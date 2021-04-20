import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";

const Input = () => {
    const [input, setInput] = useState('')
    return (
        <TextInput
            onChangeText={(value) => setInput(value)}
            placeholder={"Bạn muốn đi đâu ?"}
            placeholderTextColor={"#828282"}
            style={styles.input}
            maxLength={30}
        />
    )
}
export default Input;
const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EAEAEA',
        width: '100%',
        height: scale(40),
        fontSize: scale(12),
        color: '#000000',
        marginVertical: scale(16),
        borderRadius: scale(5),
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        paddingLeft: scale(16)
    }
})