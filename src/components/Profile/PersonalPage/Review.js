import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import TextHome from "../../TextHome";
import AppStyle from "../../../theme/index";
const { height, width } = Dimensions.get('screen')
const Review = ({ navigation }) => {
    const dataheader = useSelector(store => store.Review.data)
    return (
        <View>
            <TextHome text1={'Bài viết đánh giá'} text2={'Xem thêm >'} />
            <ScrollView horizontal={true} style={AppStyle.StylePersonalPage.Review}>
                {
                    dataheader && dataheader.map((item) => {
                        return (
                            <View key={item.id.toString()} style={{ marginRight: scale(20) }}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={AppStyle.StylePersonalPage.img6}
                                />
                                <Text style={AppStyle.StylePersonalPage.text6}>{item.text1}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default Review;

