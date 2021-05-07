import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import TopTab from "./TopTab";
import Care from "./Care";
import Body from "./Body";
import ButtonCF from "./ButtonCF";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const Suggestion = ({ navigation }) => {
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Xem gợi ý"}
                left={true}
            />
        ),
    });
    return (
        <ScrollView style={AppStyle.StyleHome.scrollview}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={styles.container}>
                <TopTab />
                <Care />
                <Body />
                <ButtonCF type={"Xem gợi ý"} />
            </View>
        </ScrollView>
    )
}
export default Suggestion;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
})