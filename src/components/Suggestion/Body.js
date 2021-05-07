import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import Time from "./Time";
import styles from "./styles";
import Budget from "./Budget";
import { useNavigation } from '@react-navigation/native';
const Body = (props) => {
    const DataContent = useSelector(store => store.Suggestion.DataContent)
    const dispatch = useDispatch()
    const start = useSelector(store => store.Suggestion.start)
    const end = useSelector(store => store.Suggestion.end)
    const price = useSelector(store => store.Suggestion.price)
    const navigation = useNavigation();
    const onChoose = (item) => {
        item.id === 2 ?
            dispatch({ type: 'CHOOSETIME' }) : item.id === 3 ?
                dispatch({ type: 'CHOOSEBUDGET' }) :
                item.id === 4 ?
                    navigation.navigate("HomeStack", { screen: 'ChoosePerson' })
                    : null
    }
    return (
        <View style={[styles.container, { marginBottom: scale(30) }]}>
            {DataContent && DataContent.map((item) => {
                return (
                    <TouchableOpacity key={item.id} style={styles.content} onPress={() => onChoose(item)}>
                        <Image
                            source={item.icon}
                            style={{ width: item.width, height: item.height, marginRight: scale(15), marginLeft: scale(5) }}
                        />
                        <Text style={styles.label2}>
                            {
                                item.id === 2 ? start !== '' ? start + '-' + end : item.label :
                                    item.id === 3 ? price !== '' ? price : item.label :
                                        item.label
                            }
                        </Text>
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
            <Time />
            <Budget />
        </View>
    )
}
export default Body;