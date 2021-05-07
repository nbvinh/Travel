import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import HeaderHotelDetails from "./HeaderHotelDetails";
import Body from "./Body";
const HotelDetails = ({ route }) => {
    const dispatch = useDispatch()
    const item = useSelector(store => store.Hotel.item)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview} showsVerticalScrollIndicator={false}>
                <HeaderHotelDetails />
                <Body />
            </ScrollView>
        </SafeAreaView>
    )
}
export default HotelDetails;