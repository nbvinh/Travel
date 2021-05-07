import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../Header";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Follower from "../../Follower";
import { scale } from "react-native-size-matters";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../../ImageHeader";
const FollowScreen = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Người theo dõi"}
                left={true}
            />
        ),
    });
    const data = useSelector(store => store.Follow.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <View style={styles.container} >
                    {data && data.map((item) => <Follower key={item.id.toString()} item={item} type={'follow'} />)}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default FollowScreen;
const styles = StyleSheet.create({
    container: {
        marginTop: scale(20),
        backgroundColor: 'white'
    }
})

