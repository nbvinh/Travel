import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import InputItem from "./InputItem";
import Provincial from "./Provincial";
const Search = ({ navigation }) => {
    const datasearch = useSelector(store => store.Search.data)
    const search = useSelector(store => store.Search.search)
    const newsearch = useSelector(store => store.Search.newsearch)
    const data = search === '' ? datasearch : newsearch
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
                <InputItem navigation={navigation} />
                {data && data.map((item) => <Provincial key={item.id} item={item} navigation={navigation} />)}
            </ScrollView>
        </SafeAreaView>
    )
}
export default Search;

