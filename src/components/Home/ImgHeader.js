import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('screen')
const ImgHeader = () => {
    const dataheader = useSelector(store => store.dataheader.data)
    const navigation = useNavigation();
    const onChoose = (item) => {
        item.id === 1 ?
            navigation.navigate('HotelScreen')
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
                            style={{ marginTop: height / 40, marginRight: 30 }}
                        >
                            <Image
                                source={item.img}
                                style={{ width: scale(35), height: scale(35) }}
                            />
                            <Text style={{ color: 'white', fontSize: height / 68, textAlign: 'center' }}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}
export default ImgHeader;