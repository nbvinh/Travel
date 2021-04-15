import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TextHome from "../TextHome";
import styles from "./styles";
const Care = (props) => {
    const data = useSelector(store => store.Suggestion.data)
    const navigation = props.navigation
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <TextHome text1={"Có thể bạn quan tâm"} text2={'Tất cả >'} onSeeMore={() => navigation.navigate('CareAll')} />
            <ScrollView style={styles.body} horizontal={true} showsHorizontalScrollIndicator={false}>
                {data && data.map((item) => {
                    return (
                        <View key={item.id} style={styles.card}>
                            <Image
                                source={item.img}
                                style={styles.img}
                            />
                            <View style={styles.footer}>
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
                })}
            </ScrollView>
        </View>
    )
}
export default Care;