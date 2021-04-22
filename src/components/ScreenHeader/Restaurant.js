import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../FindAroundHere/Header";
import Input from "./Input";
import styles from "./styles";
import Body from "./Body";
const Restaurant = ({ navigation, route }) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Nhà hàng'} onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Input />
                    </View>
                    <Body type={"RestaurantScreen"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Restaurant;