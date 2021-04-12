import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import AppStyle from "../theme/index";
const Follower = (props) => {
    const item = props.item
    const type = props.type
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <View style={styles.header}>
                    <Image
                        source={item.img}
                        style={styles.avatar}
                    />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <TouchableOpacity style={styles.footer}>
                    <Text style={styles.follow}>{type === 'follow' ? item.follow : item.following}</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Follower;
const styles = StyleSheet.create({
    container: {
        height: scale(40),
        width: '100%',
    },
    avatar: {
        width: scale(29),
        height: scale(29),
        marginRight: scale(5)
    },
    header: {
        // marginLeft: scale(10)
        flexDirection: 'row'
    },
    footer: {
        // marginRight: scale(10)
        backgroundColor: '#FF5F24',
        borderRadius: scale(5),
        width: scale(73),
        height: scale(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",
        borderBottomWidth: scale(0.5),
        flex: 1,
        marginHorizontal: scale(10)
    },
    name: {
        color: '#000000',
        fontWeight: '400',
        fontSize: scale(14),
        marginTop: scale(3)
    },
    follow: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: scale(10)
    }
})