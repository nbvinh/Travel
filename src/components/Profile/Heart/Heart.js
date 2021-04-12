import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Header from '../../Header'
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Schedule from "../../Schedule";
const { height, width } = Dimensions.get('screen')
const Heart = ({ navigation }) => {
    const heart = useSelector(store => store.Schedule.heartARR)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Thông tin cá nhân'} onBack={() => navigation.goBack()} />
                <View style={{ flex: 10, marginHorizontal: verticalScale(20), marginVertical: scale(20) }}>
                    {heart && heart.map((item) => <Schedule item={item} key={item.id} type={'heart'} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Heart;


