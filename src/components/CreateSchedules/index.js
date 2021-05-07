import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Body from "./Body";
import ButtonCF from "../Suggestion/ButtonCF";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const CreateSchedules = ({ navigation }) => {
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Tạo lịch trình"}
                left={true}
            />
        ),
    });
    return (
        <View style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <View style={styles.container}>
                    <Body navigation={navigation} />
                </View>
            </ScrollView>
            <ButtonCF type={"Tạo lịch trình"} />
        </View>
    )
}
export default CreateSchedules;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
})