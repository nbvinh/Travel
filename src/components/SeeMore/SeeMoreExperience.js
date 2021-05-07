import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const { height, width } = Dimensions.get('screen')
const SeeMoreExperience = ({ navigation }) => {
    const dataheader = useSelector(store => store.Experience.data)
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Trải nghiệm nổi bật"}
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
                                    <Text style={AppStyle.StyleSeeMoreExperience.text2}>{item.text1}</Text>
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
    )
}
export default SeeMoreExperience;