import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../Header";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import { scale } from "react-native-size-matters";
import Follower from "../../Follower";
const FollowingScreen = ({ navigation }) => {
    const data = useSelector(store => store.Follow.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Đang theo dõi'} onBack={() => navigation.goBack()} />
                <View style={styles.container} >
                    {data && data.map((item) => <Follower type={'following'}  key={item.id.toString()} item={item} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default FollowingScreen;
const styles = StyleSheet.create({
    container:{
        marginTop: scale(20),
        backgroundColor:'white'
    }
})
