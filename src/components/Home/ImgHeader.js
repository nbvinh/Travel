import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { scaleW } from "../../config/Ultils";
const { height } = Dimensions.get('screen')
const ImgHeader = () => {
    const dataheader = useSelector(store => store.dataheader.data)
    const navigation = useNavigation();
    const onChoose = (item) => {
        item.id === 1 ?
            navigation.navigate("HomeStack", { screen:'HotelScreen'})
            : item.id === 4 ?
                navigation.navigate("HomeStack", { screen:'Restaurant'})
                : item.id === 3 ?
                    navigation.navigate("HomeStack", { screen:'Combo'})
                    : null
    }
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => onChoose(item)}
                            key={item.id.toString()}
                            style={{ marginTop: scaleW(19), marginRight: scaleW(34) }}
                        >
                            <Image
                                source={item.img}
                                style={{ width: scaleW(35), height: scaleW(35), marginBottom:scaleW(5) }}
                            />
                            <Text style={{ color: 'white', fontSize: scaleW(12), textAlign: 'center' }}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
export default ImgHeader;