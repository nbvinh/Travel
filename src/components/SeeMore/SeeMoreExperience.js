import React, { useEffect, useState } from "react";
import { View,TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import AppStyle from "../../theme/index";
const { height, width } = Dimensions.get('screen')
const SeeMoreExperience = ({ navigation }) => {
    const dataheader = useSelector(store => store.Experience.data)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='#E5E5E5' barStyle={"dark-content"} />
            <Header text={'Trải nghiệm nổi bật'} onBack={() => navigation.goBack()} />
            <View style={AppStyle.StyleSeeMoreExperience.container}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleSeeMoreExperience.content}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={AppStyle.StyleSeeMoreExperience.img}
                                    />
                                    <View style={AppStyle.StyleSeeMoreExperience.content1}>
                                        <Text style={AppStyle.StyleSeeMoreExperience.text1}>{item.text}</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Image
                                                source={require('../../img/location.png')}
                                                style={AppStyle.StyleSeeMoreExperience.img1}
                                            />
                                            <Text style={ AppStyle.StyleSeeMoreExperience.text2}>{item.text1}</Text>
                                        </View>
                                        <Text style={AppStyle.StyleSeeMoreExperience.text3}>Từ
                                            <Text style={AppStyle.StyleSeeMoreExperience.text4}> {item.price}</Text>
                                        </Text>
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
export default SeeMoreExperience;