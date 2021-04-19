import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Hotel from "../Home/Hotel";
import TextHome from "../TextHome";
import Header from "./Header";
import Item from "./Item";
const FindAroundHere = ({ navigation, route }) => {
    const item = route.params.item;
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Gợi ý gần đây'} onBack={() => navigation.goBack()} />
                <Item navigation={navigation} item={item} />
            </ScrollView>
        </SafeAreaView>
    )
}
export default FindAroundHere;