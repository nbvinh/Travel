import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Text, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { scale } from "react-native-size-matters";
import Form from "./Form";
const AddButton = (props) => {
    let mode = new Animated.Value(0);
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch({ type: 'MODE' })
    };
    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });
    return (
        <View style={{ flex: 1 }}>
            <Form mode={mode} />
            <TouchableOpacity style={styles.Plus}
                onPress={() => handlePress()}
            >
                <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                    <FontAwesome5 name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}
export default AddButton;
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: scale(72),
        height: scale(72),
        borderRadius: scale(36),
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -scale(60),
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: scale(48),
        height: scale(48),
        borderRadius: scale(24),
        backgroundColor: "#FF5F24"
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: scale(50),
        left: -scale(10)
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: scale(50)
    },
    Plus: {
        width: scale(50),
        height: scale(50),
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(30)
    }
});