import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
const Item = (props) => {
    const item = props.item
    const onScreen = props.onScreen
    return (
        <TouchableOpacity style={styles.container} onPress={()=>onScreen()}>
            <Image
                source={item.image}
                style={styles.img}
            />
            <Text style={styles.text}>{item.text}</Text>
        </TouchableOpacity>
    )
}
export default Item;
const styles = StyleSheet.create({
    img: {
        width: scale(17),
        height: scale(15.64),
        marginVertical: scale(10),
        marginRight: scale(15)
    },
    container: {
        flexDirection: 'row',
        marginLeft: scale(15)
    },
    text: {
        marginVertical: scale(10),
        marginRight: scale(10),
        fontSize: scale(13),
        fontWeight: '500'
    }
})

