import { useHeaderHeight } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Hotel from "../Home/Hotel";
import ImageHeader from "../ImageHeader";
import TextHome from "../TextHome";
import Item from "./Item";
const FindAroundHere = ({ navigation, route }) => {
    const item = route.params.item;
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Gợi ý gần đây"}
                left={true}
                right={true}
                imgHotel={true}
            />
        ),
    });
    return (
        <ScrollView style={AppStyle.StyleHome.scrollview}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <Item navigation={navigation} item={item} />
        </ScrollView>
    )
}
export default FindAroundHere;