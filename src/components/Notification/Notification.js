import { useHeaderHeight } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import ImageHeader from "../ImageHeader";
import ItemNotification from "./ItemNotification";
const Notification = ({ navigation }) => {
    const data = useSelector(store => store.Notification.data)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Thông báo"}
                right={true}
            />
        ),
    });
    return (
        <ScrollView style={[AppStyle.StyleHome.scrollview, { backgroundColor: '#E5E5E5' }]}>
            {/* <HeaderNotification text={'Thông báo'} imgNotification={require('../../img/Notification.png')} /> */}
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <View style={styles.container}>
                    {data && data.map((item) => <ItemNotification key={item.id.toString()} item={item} />)}
                </View>
            </ScrollView>
        </ScrollView>
    )
}
export default Notification;
const styles = StyleSheet.create({
    container: {
        flex: 10,
        marginVertical: scale(20)
    }
})
