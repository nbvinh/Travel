import React, { useEffect, useState } from "react";
import { View,TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import AppStyle from "../../theme/index";
const { height, width } = Dimensions.get('screen')
const SeeMorePopularPlace = ({ navigation }) => {
    const dataheader = useSelector(store => store.PopularPlace.data)
    return (
        <SafeAreaView style={AppStyle.StyleSeeMorePopularPlace.container}>
            <StatusBar backgroundColor='#E5E5E5' barStyle={"dark-content"} />
            <Header text={'Địa điểm phổ biến'} onBack={() => navigation.goBack()} />
            <View style={AppStyle.StyleSeeMorePopularPlace.content}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <TouchableOpacity key={item.id.toString()} style={{ marginBottom: width / 18.75 }}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={AppStyle.StyleSeeMorePopularPlace.img1}
                                    />
                                    <View style={AppStyle.StyleSeeMorePopularPlace.content2}>
                                        <Image 
                                            source={require('../../img/img24.png')}
                                            style={AppStyle.StyleSeeMorePopularPlace.img2}
                                        />
                                        <Text style={AppStyle.StyleSeeMorePopularPlace.text1}>{item.text}</Text>
                                    </View>
                                    <Text style={AppStyle.StyleSeeMorePopularPlace.text2}>{item.text1}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default SeeMorePopularPlace;