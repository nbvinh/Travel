import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import HeaderNotification from "./HeaderNotification";
import ItemNotification from "./ItemNotification";
const { height, width } = Dimensions.get('screen')
const Notification = ({ navigation }) => {
    const data = useSelector(store => store.Notification.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <HeaderNotification text={'Thông báo'} imgNotification={require('../../img/Notification.png')} />
                <View style={AppStyle.StyleProfile.body}>
                    <ScrollView style={AppStyle.StyleHome.scrollview}>
                        <View style={styles.container}>
                            {data && data.map((item) => <ItemNotification key={item.id.toString()} item={item} />)}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Notification;
const styles = StyleSheet.create({
    container: {
        flex: 10,
        marginVertical: scale(20)
    }
})
