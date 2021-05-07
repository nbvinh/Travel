import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { LoginManager } from "react-native-fbsdk";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from "./Item";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../../ImageHeader";
const Setting = ({ navigation }) => {
    const dispatch = useDispatch()
    const dataItem = useSelector(store => store.people.dataSetting)
    const userInfo = useSelector(store => store.people.userInfo)
    const onScreen = (item) => {
        item.id === 0 ?
            navigation.navigate("ProfileStack", { screen: 'PrivacyPolicy' })
            :
            item.id === 1 ?
                navigation.navigate("ProfileStack", { screen: 'TermsOfUse' })
                :
                item.id === 3 ?
                    Logout()
                    :
                    null
    }
    const logoutWithFacebook = () => {
        LoginManager.logOut();
        // dispatch({ type: 'USERFACEBOOK', userInfo: {} })
    };
    const Logout = async () => {
        await AsyncStorage.removeItem('Token')
        logoutWithFacebook()
        dispatch({ type: "LOGOUT" })
        navigation.replace("AuthStack", { screen: 'ScreenFirst' });
    }
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Cài đặt"}
                left={true}
            />
        ),
    });
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <ScrollView style={AppStyle.StyleHome.scrollview}>
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

