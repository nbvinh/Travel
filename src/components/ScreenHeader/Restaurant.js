import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Input from "./Input";
import styles from "./styles";
import Body from "./Body";
import ImageHeader from "../ImageHeader";
import { useHeaderHeight } from "@react-navigation/stack";
const Restaurant = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Nhà hàng"}
                left={true}
                right={true}
                imgHotel={true}
            />
        ),
    });
    return (
        <ScrollView style={AppStyle.StyleHome.scrollview}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Input type={"SearchRestaurant"} />
                </View>
                <Body type={"RestaurantScreen"} />
            </View>
        </ScrollView>
    )
}
export default Restaurant;