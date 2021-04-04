import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Text, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
const Touch = () => {

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.Plus}
            >
                <Image
                    source={require('../img/touchable.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
        </View>
    );
}
export default Touch;
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -60,
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
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FF5F24"
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 50,
        left: -10
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 50
    },
    Plus: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    }
});