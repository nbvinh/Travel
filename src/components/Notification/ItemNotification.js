import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
const { width, height } = Dimensions.get('screen')
const ItemNotification = (props) => {
    const dispatch = useDispatch()
    const item = props.item
    const onChoose = () => {
        dispatch({ type: 'NEWNOTIFICATION', id: item.id })
    }
    const test = useSelector(store => store.people.test)
    return (
        <TouchableOpacity
            onPress={() => !test ? onChoose() : null}
            style={[styles.container, { backgroundColor: item.color }]}
        >
            <Image
                source={item.img}
                style={styles.img}
            />
            <View style={styles.text}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.time}>{item.day} lúc {item.time}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ItemNotification;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    img: {
        width: scale(34),
        height: scale(34),
        marginLeft: scale(15),
        marginRight: scale(10),
        borderRadius: scale(18)
    },
    label: {
        fontSize: scale(13),
        fontWeight: '400',
        color: '#000000',
        marginTop: scale(10)
    },
    time: {
        color: '#9A9A9A',
        fontSize: scale(11),
        fontWeight: '400',
        marginBottom: scale(10)
    },
    text: {
        marginRight: scale(10),
        width: '80%'
    }

})