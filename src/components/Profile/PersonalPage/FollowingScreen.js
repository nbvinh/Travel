import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import { scale } from "react-native-size-matters";
import Follower from "../../Follower";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../../ImageHeader";
const FollowingScreen = ({ navigation }) => {
    const data = useSelector(store => store.Follow.data)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Đang theo dõi"}
                left={true}
            />
        ),
    });
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <View style={styles.container} >
                    {data && data.map((item) => <Follower type={'following'} key={item.id.toString()} item={item} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default FollowingScreen;
const styles = StyleSheet.create({
    container: {
        marginTop: scale(20),
        backgroundColor: 'white'
    }
})
