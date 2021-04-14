import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import AppStyle from "../../theme/index";
import { verticalScale, scale } from "react-native-size-matters";
import Schedule from "../Schedule";
const { height, width } = Dimensions.get('screen')
const SeeMoreSchedule = ({ navigation }) => {
    const dataheader = useSelector(store => store.Schedule.data)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <Header text={'Lịch trình gần đây'} onBack={() => navigation.goBack()} />
            <View style={{ flex: 10, marginHorizontal: verticalScale(20), marginVertical: scale(20) }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <Schedule item={item} key={item.id} typeNavigation={'add'} type={'add'} navigation={navigation} />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default SeeMoreSchedule;