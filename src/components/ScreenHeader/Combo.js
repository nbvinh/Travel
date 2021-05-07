import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Input from "./Input";
import styles from "./styles";
import BodyCombo from "./BodyCombo";
import { scale } from "react-native-size-matters";
import ImageHeader from "../ImageHeader";
import { useHeaderHeight } from "@react-navigation/stack";
const Combo = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Combo"}
                left={true}
                right={true}
                imgHotel={true}
            />
        ),
    });
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <View style={[styles.container, { marginBottom: scale(20) }]}>
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