import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "./styles";

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