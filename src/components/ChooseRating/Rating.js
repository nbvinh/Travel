import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, StatusBar, FlatList, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import styles from "./styles";
import Star from "./Star";
import Comment from "./Comment";
import Footer from "./Footer";
import ImageHeader from "../ImageHeader";
import { useHeaderHeight } from "@react-navigation/stack";
const { width, height } = Dimensions.get('screen')
const Rating = ({ navigation }) => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.MySchedule.finish)
    const dataStar = useSelector(store => store.people.Star)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Đánh giá"}
                left={true}
                right={true}
                Rating={true}
            />
        ),
    });
    return (
        <ScrollView style={[AppStyle.StyleHome.scrollview, { backgroundColor: '#E5E5E5' }]}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={styles.star}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                    {dataStar && dataStar.map((item) => <Star key={item.id} item={item} />)}
                </ScrollView>
            </View>
            <Comment />
            <Footer />
        </ScrollView>
    )
}
export default Rating;