import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, StatusBar, FlatList, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import HeaderEdit from "../Profile/PersonalPage/HeaderEdit";
import styles from "./styles";
import Star from "./Star";
import Comment from "./Comment";
import Footer from "./Footer";
const { width, height } = Dimensions.get('screen')
const Rating = ({ navigation }) => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.MySchedule.finish)
    const dataStar = useSelector(store => store.people.Star)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <HeaderEdit text={'Đánh giá'} type={"Rating"} onBack={() => navigation.goBack()} onSave={() => console.log('Rating')} />
                <View style={styles.container}>
                    <View style={styles.star}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
                            {dataStar && dataStar.map((item) => <Star key={item.id} item={item} />)}
                        </ScrollView>
                    </View>
                    <Comment />
                    <Footer />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Rating;