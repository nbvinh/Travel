import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const { height, width } = Dimensions.get('screen')
const SeeMorePopularPlace = ({ navigation }) => {
    const dataheader = useSelector(store => store.PopularPlace.data)
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Địa điểm phổ biến"}
                left={true}
            />
        ),
    });
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                dispatch({ type: 'IDPOPULARPLACE', item: item })
                                navigation.navigate("HomeStack", { screen: 'PopularPlaceDetails' })
                            }}
                            key={item.id.toString()}
                            style={{ marginBottom: width / 18.75, marginHorizontal: 10 }}
                        >
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
    )
}
export default SeeMorePopularPlace;