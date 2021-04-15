import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../Header";
import TopTab from "./TopTab";
import Care from "./Care";
import Body from "./Body";
import ButtonCF from "./ButtonCF";
const Suggestion = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Xem gợi ý'} onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <TopTab />
                    <Care navigation={navigation} />
                    <Body />
                    <ButtonCF />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Suggestion;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
})
