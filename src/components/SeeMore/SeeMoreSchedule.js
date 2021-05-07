import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { verticalScale, scale } from "react-native-size-matters";
import Schedule from "../Schedule";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const { height, width } = Dimensions.get('screen')
const SeeMoreSchedule = ({ navigation }) => {
    const dataheader = useSelector(store => store.Schedule.data)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Lịch trình gần đây"}
                left={true}
            />
        ),
    });
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <Schedule style={{ marginHorizontal: verticalScale(20), marginVertical: scale(20) }} item={item} key={item.id} typeNavigation={'add'} type={'add'} navigation={navigation} />
                    )
                })
            }
        </ScrollView>
    )
}
export default SeeMoreSchedule;