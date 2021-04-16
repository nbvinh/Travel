import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TextHome from "../TextHome";
import styles from "./styles";
const Care = (props) => {
    const item = props.item
    const navigation = props.navigation
    const dispatch = useDispatch()
    return (
        <View style={styles.card2}>
            <Image
                source={item.img}
                style={styles.img2}
            />
            <View style={styles.footer2}>
                <Text style={styles.label}>{item.label}</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    dispatch({ type: "CHECK", id: item.id })
                }}
                style={styles.oncheck}
            >
                {item.check ?
                    <Image
                        source={require('../../img/check2.png')}
                        style={styles.check}
                    />
                    :
                    <Image
                        source={require('../../img/check1.png')}
                        style={styles.check}
                    />
                }

            </TouchableOpacity>
        </View>

    )
}
export default Care;