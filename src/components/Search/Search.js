import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import InputItem from "./InputItem";
import Provincial from "./Provincial";
const Search = ({ navigation }) => {
    const data = useSelector(store => store.Search.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <InputItem navigation={navigation} />
                {data && data.map((item) => <Provincial key ={item.id} item={item} />)}
            </ScrollView>
        </SafeAreaView>
    )
}
export default Search;

