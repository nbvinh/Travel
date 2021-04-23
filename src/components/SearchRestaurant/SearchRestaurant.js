import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import InputItem from "./InputItem";
import Provincial from "./Provincial";
const SearchRestaurant = ({ navigation }) => {
    const dataRestaurant = useSelector(store => store.Search.dataRestaurant)
    const search = useSelector(store => store.Search.search)
    const newsearch = useSelector(store => store.Search.newsearch)
    const data = search === '' ? dataRestaurant : newsearch
    const dispatch = useDispatch()
    console.log('thu thoi', newsearch)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <InputItem navigation={navigation} />
                {
                    data === dataRestaurant ?
                        <Text style={styles.SearchFailed}>Chưa có kết quả nào</Text>
                        :
                        newsearch.length === 0 ?
                            <Text style={styles.SearchFailed}>Chưa có kết quả nào</Text>
                            :
                            data && data.map((item) => <Provincial key={item.id} item={item} />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}
export default SearchRestaurant;
const styles = StyleSheet.create({
    SearchFailed: {
        marginTop: scale(40),
        textAlign: 'center',
        fontSize: scale(12)
    }
})
