import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Header from '../Header'
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Schedule from "../Schedule";
const { height, width } = Dimensions.get('screen')
const SeeSuggestion = ({ navigation }) => {
    const data = useSelector(store => store.MySchedule.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Gợi ý'} onBack={() => navigation.goBack()} />
                <View style={{ flex: 10, marginHorizontal: verticalScale(20), marginVertical: scale(20) }}>
                    {data && data.map((item) => <Schedule item={item} key={item.id} typeNavigation={'add'} type={'add'} navigation={navigation} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SeeSuggestion;


