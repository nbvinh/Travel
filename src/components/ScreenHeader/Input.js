import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, StyleSheet } from "react-native";
import styles from "./styles";

const Input = (props) => {
    const [input, setInput] = useState('')
    const type = props.type
    const navigation = useNavigation()
    return (
        <TextInput
            onChangeText={(value) => setInput(value)}
            placeholder={"Bạn muốn đi đâu ?"}
            placeholderTextColor={"#828282"}
            style={styles.input}
            maxLength={30}
            onFocus={() => {
                type === 'SearchRestaurant' ?
                    navigation.navigate('SearchRestaurant')
                    : null
            }}
        />
    )
}
export default Input;