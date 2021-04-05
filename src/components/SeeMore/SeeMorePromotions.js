import React, { useState, useEffect } from "react";
import { Text,TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../Header";
const { height, width } = Dimensions.get('screen')
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
const SeeMorePromotions = ({ navigation }) => {
    const dataheader = useSelector(store => store.Promotion.data)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='#E5E5E5' barStyle={"dark-content"} />
            <Header text={'Khuyến Mại'} onBack={() => navigation.goBack()} />
            <View style={{ flex: 10, marginHorizontal: 10 }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <TouchableOpacity
                                    key={item.id.toString()}
                                    style={AppStyle.StyleSeeMorePromotions.container}
                                    onPress={() => navigation.navigate('PromotionDetails', { id: item.id })}
                                >
                                    <Image
                                        source={item.img}
                                        style={AppStyle.StyleSeeMorePromotions.img}
                                    />
                                    <Text style={AppStyle.StyleSeeMorePromotions.text1}>{item.text1}</Text>
                                    <View style={AppStyle.StyleSeeMorePromotions.time}>
                                        <Text style={AppStyle.StyleSeeMorePromotions.text2}>Thời gian áp dụng :
                                            <Text style={AppStyle.StyleSeeMorePromotions.text3}>{item.timeIN}
                                                <Text> - {item.timeOut}</Text>
                                            </Text>
                                        </Text>
                                        {
                                            item.condition ?
                                                <Text style={AppStyle.StyleSeeMorePromotions.text4}>Đã hết Hạn</Text>
                                                :
                                                null
                                        }
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default SeeMorePromotions;
