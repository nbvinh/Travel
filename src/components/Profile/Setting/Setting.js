import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Header from "../../Header";
const { height, width } = Dimensions.get('screen');
import Item from "./Item";
const Setting = ({ navigation }) => {
    const dataItem = useSelector(store => store.people.dataSetting)
    const onScreen = (item) => {
        item.id === 0 ?
            navigation.navigate('PrivacyPolicy')
            :
            item.id === 1 ?
                navigation.navigate('TermsOfUse')
                :
                item.id === 3 ?
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'ScreenFirst' }],
                    })
                    :
                    null
    }
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Cài đặt'} onBack={() => navigation.goBack()} />
                <View style={AppStyle.StyleProfile.body}>
                    <ScrollView style={AppStyle.StyleHome.scrollview}>
                        <View style={AppStyle.StyleProfile.setting}>
                            {dataItem && dataItem.map((item) => <Item key={item.id.toString()} item={item} onScreen={() => onScreen(item)} />)}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Setting;

