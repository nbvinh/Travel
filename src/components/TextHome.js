import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
const { height, width } = Dimensions.get('screen')
const TextHome = (props) => {
    const text1 = props.text1
    const text2 = props.text2
    return (
        <View style={styles.textPromotion}>
            <Text style={styles.text4}>{text1}</Text>
            <Text style={styles.text5}>{text2}</Text>
        </View>
    )
}
export default TextHome;
const styles = StyleSheet.create({
    textPromotion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    text4: {
        fontWeight: 'bold',
        fontSize: height / 45
    },
    text5: {
        fontSize: height / 45,
        color: '#9E9E9E',
        fontWeight: '600'
    }
})