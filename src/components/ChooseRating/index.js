import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../Header";
import Schedule from "../Schedule";
import { scale, verticalScale } from "react-native-size-matters";
const ChooseRating = ({ navigation }) => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.MySchedule.finish)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview} showsVerticalScrollIndicator={false}>
                <Header text={'Chọn lịch trình'} onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    {
                        data && data.map((item) => {
                            return (
                                <Schedule item={item} key={item.id} typeNavigation={'finish'} type={'add'} navigation={navigation} />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ChooseRating;
const styles = StyleSheet.create({
    container: {
        flex: 10,
        marginHorizontal: verticalScale(20),
        marginTop: scale(15)
    },
})