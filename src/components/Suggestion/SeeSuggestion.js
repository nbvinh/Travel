import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Schedule from "../Schedule";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const { height, width } = Dimensions.get('screen')
const SeeSuggestion = ({ navigation }) => {
    const data = useSelector(store => store.MySchedule.data)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Gợi ý"}
                left={true}
            />
        ),
    });
    return (
        <ScrollView style={[AppStyle.StyleHome.scrollview, { backgroundColor: '#E5E5E5' }]}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={{ flex: 10, marginHorizontal: verticalScale(20), marginVertical: scale(20) }}>
                {data && data.map((item) => <Schedule item={item} key={item.id} typeNavigation={'add'} type={'add'} navigation={navigation} />)}
            </View>
        </ScrollView>
    )
}
export default SeeSuggestion;


