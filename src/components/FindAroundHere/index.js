import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "./Header";
const FindAroundHere = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Gợi ý gần đây'} onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default FindAroundHere;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
})