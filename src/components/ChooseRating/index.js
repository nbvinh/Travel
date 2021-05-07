import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Schedule from "../Schedule";
import { scale, verticalScale } from "react-native-size-matters";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const ChooseRating = ({ navigation }) => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.MySchedule.finish)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Chọn lịch trình"}
                left={true}
            />
        ),
    });
    return (
        <ScrollView style={[AppStyle.StyleHome.scrollview, { backgroundColor: '#E5E5E5' }]} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
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