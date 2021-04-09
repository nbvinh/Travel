import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get('screen')
const Item = (props) => {
    const item = props.item
    const onScreen = props.onScreen
    return (
        <TouchableOpacity style={styles.container} onPress={()=>onScreen()}>
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}
export default Item;
const styles = StyleSheet.create({
    container: {
        marginLeft: scale(15),
        borderBottomWidth:scale(0.2),
        color:'#B9B9B9'
    },
    text: {
        marginVertical: scale(10),
        marginRight: scale(10),
        fontSize: scale(13),
        fontWeight: '500'
    }
})

