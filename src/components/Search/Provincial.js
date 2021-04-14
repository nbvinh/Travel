import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, TextInput, Image, StyleSheet } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')
const Provincial = (props) => {
    const item = props.item
    const navigation = props.navigation
    return (
        <View style={styles.container}>
            <Image
                source={require('../../img/vinh30.png')}
                style={styles.img}
            />
            <View style={styles.body}>
                <Text style={styles.provincial}>{item.provincial}</Text>
                <Text style={styles.label}>{item.label}</Text>
            </View>
        </View>
    )
}
export default Provincial;
const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: 'row',
        marginBottom:scale(10)
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