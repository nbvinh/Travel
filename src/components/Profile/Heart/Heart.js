import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Header from '../../Header'
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Schedule from "../../Schedule";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../../ImageHeader";
const { height, width } = Dimensions.get('screen')
const Heart = ({ navigation }) => {
    const heart = useSelector(store => store.Schedule.heartARR)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Yêu thích"}
                left={true}
            />
        ),
    });
    return (
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <View style={{ flex: 10, marginHorizontal: verticalScale(20), marginVertical: scale(20) }}>
                    {heart && heart.map((item) => <Schedule item={item} key={item.id} type={'heart'} />)}
                </View>
            </ScrollView>
    )
}
export default Heart;


