import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale, verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import HeaderBottomTab from "../HeaderBottomTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Finish from "./Finish";
import Upcoming from "./Upcoming";
import Walking from "./Walking";
const { height, width } = Dimensions.get('screen')
const MySchedule = ({ navigation }) => {
    const data = useSelector(store => store.Notification.data)
    const Tab = createMaterialTopTabNavigator()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <HeaderBottomTab text={'Lịch trình của tôi'} />
                <View style={AppStyle.StyleProfile.body}>
                    <ScrollView style={AppStyle.StyleHome.scrollview}>
                        <View style={styles.container}>
                            <Tab.Navigator
                                tabBarOptions={{
                                    showLabel: true,
                                    labelStyle: { fontSize: verticalScale(12), fontWeight: 'bold', color: '#FF5F24' },
                                    indicatorStyle: { backgroundColor: '#FF5F24' },
                                    style: { backgroundColor: '#E5E5E5' },

                                }}>
                                <Tab.Screen name="Upcoming" component={Upcoming}
                                    options={{
                                        tabBarLabel: "Sắp Tới",
                                    }} />
                                <Tab.Screen name="Walking" component={Walking} options={{ tabBarLabel: 'Đang đi' }} />
                                <Tab.Screen name="Finish" component={Finish} options={{ tabBarLabel: 'Hoàn thành' }} />
                            </Tab.Navigator>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default MySchedule;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    textfocus: {
        fontSize: scale(12),
        color: '#FF5F24',
        fontWeight: '500'
    },
    text: {
        fontSize: scale(12),
        color: '#000000',
        fontWeight: '500'
    }
})
