import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Input from "./Input";
import styles from "./styles";
import Body from "./Body";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const HotelScreen = ({ navigation, route }) => {
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Khách sạn"}
                left={true}
                right={true}
                imgHotel={true}
            />
        ),
    });
    const dispatch = useDispatch()
    return (
        <ScrollView style={AppStyle.StyleHome.scrollview}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Input />
                    <Image
                        source={require('../../img/vinh56.png')}
                        style={styles.img1}
                    />
                </View>
                <Body type={"Hotel"} />
            </View>
        </ScrollView>
    )
}
export default HotelScreen;