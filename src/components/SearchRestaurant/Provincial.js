import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
const { width, height } = Dimensions.get('screen')
const Provincial = (props) => {
    const item = props.item
    const navigation = useNavigation()
    const FindAroundHere = () => {
        navigation.navigate("FindAroundHere", { item: item })
    }
    return (
        <TouchableOpacity onPress={() => FindAroundHere()} style={styles.container}>
            <Image
                source={require('../../img/vinh30.png')}
                style={styles.img}
            />
            <View style={styles.body}>
                <Text style={styles.provincial}>{item.provincial}</Text>
                <Text style={styles.label}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Provincial;
const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: 'row',
        marginBottom: scale(10)
    },
    body: {
        marginLeft: scale(10)
    },
    img: {
        width: scale(10.83),
        height: scale(15.68),
        marginLeft: scale(15),
        marginTop: scale(10)
    },
    provincial: {
        fontSize: scale(13),
        fontWeight: '500',
        color: '#000000'
    },
    label: {
        fontSize: scale(10),
        color: '#9A9A9A',
        textAlign: 'center'
    }
})