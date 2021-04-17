import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../Header";
import Body from "./Body";
import ButtonCF from "../Suggestion/ButtonCF";
const CreateSchedules = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Tạo lịch trình'} onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <Body navigation={navigation} />
                </View>
            </ScrollView>
            <ButtonCF type={"Tạo lịch trình"} />
        </SafeAreaView>
    )
}
export default CreateSchedules;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
})