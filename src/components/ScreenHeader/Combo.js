import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../FindAroundHere/Header";
import Input from "./Input";
import styles from "./styles";
import BodyCombo from "./BodyCombo";
import { scale } from "react-native-size-matters";
const Combo = ({ navigation, route }) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Combo'} onBack={() => navigation.goBack()} />
                <View style={[styles.container,{marginBottom:scale(20)}]}>
                    <View style={styles.header}>
                        <Input />
                    </View>
                    <BodyCombo type={"ComboScreen"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Combo;