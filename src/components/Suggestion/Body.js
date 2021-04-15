import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import TextHome from "../TextHome";
import styles from "./styles";
const Body = () => {
    const DataContent = useSelector(store => store.Suggestion.DataContent)
    const dispatch = useDispatch()
    return (
        <View style={[styles.container,{marginBottom:scale(30)}]}>
            {DataContent && DataContent.map((item) => {
                return (
                    <TouchableOpacity key={item.id} style={styles.content}>
                        <Image
                            source={item.icon}
                            style={{ width: item.width, height: item.height, marginRight: scale(15), marginLeft: scale(5) }}
                        />
                        <Text style={styles.label2}>{item.label}</Text>
                        {item.id === 3 ?
                            <Image
                                source={require('../../img/vinh48.png')}
                                style={styles.img1}
                            />
                            : null
                        }
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
export default Body;