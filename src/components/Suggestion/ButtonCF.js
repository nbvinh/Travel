import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
const { height, width } = Dimensions.get('screen')
const ButtonCF = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Xong</Text>
        </TouchableOpacity>
    )
}
export default ButtonCF;
const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(10),
        width: width - scale(20),
        backgroundColor: '#FF5F24',
        height: scale(35),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:scale(20),
        borderRadius:scale(5)
    },
    text: {
        fontSize: scale(14),
        fontWeight: '600',
        color: 'white'
    }
})