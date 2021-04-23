import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import AppStyle from "../../theme/index";
import { scale } from "react-native-size-matters";
const SeeMoreHotel = ({ navigation }) => {
    const data = useSelector(store => store.Hotel.data)
    const dispatch = useDispatch()
    const onHotel = (item) => {
        navigation.navigate('HotelDetails')
        dispatch({ type: 'ITEM', item: item })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <Header text={'Khách sạn & Resort'} onBack={() => navigation.goBack()} />
                <View style={{ flex: 10, alignItems: 'center', marginTop: scale(16) }}>
                    {
                        data && data.map((item) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => onHotel(item)}
                                    key={item.id.toString()}
                                    style={AppStyle.StyleSeeMoreSchedule.container}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={AppStyle.StyleSeeMoreSchedule.img1}
                                        />
                                        <View>
                                            <Image
                                                source={{ uri: item.img3 }}
                                                style={AppStyle.StyleSeeMoreSchedule.img2}
                                            />
                                            <View style={AppStyle.StyleSeeMoreSchedule.viewIMG}>
                                                <Image
                                                    source={{ uri: item.img1 }}
                                                    style={AppStyle.StyleSeeMoreSchedule.img3}
                                                />
                                                <Image
                                                    source={{ uri: item.img2 }}
                                                    style={AppStyle.StyleSeeMoreSchedule.img3}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={AppStyle.StyleSeeMoreHotel.container}>
                                        <Text style={AppStyle.StyleHotel.text1}>{item.text2}</Text>
                                        <View style={AppStyle.StyleSeeMoreHotel.text1}>
                                            <Image
                                                source={require('../../img/star.png')}
                                                style={AppStyle.StyleHotel.star}
                                            />
                                            <Image
                                                source={require('../../img/star.png')}
                                                style={AppStyle.StyleHotel.star}
                                            />
                                            <Image
                                                source={require('../../img/star.png')}
                                                style={AppStyle.StyleHotel.star}
                                            />
                                            <Image
                                                source={require('../../img/star.png')}
                                                style={AppStyle.StyleHotel.star}
                                            />
                                            <Image
                                                source={require('../../img/star.png')}
                                                style={AppStyle.StyleHotel.star}
                                            />
                                        </View>
                                    </View>
                                    <Text style={[AppStyle.StyleHotel.text2, { marginHorizontal: 15 }]}>{item.text}</Text>
                                    <View style={AppStyle.StyleSeeMoreHotel.content}>
                                        <Image
                                            source={require('../../img/location.png')}
                                            style={AppStyle.StyleHotel.img2}
                                        />
                                        <View style={AppStyle.StyleSeeMoreHotel.viewText}>
                                            <Text style={AppStyle.StyleSeeMoreHotel.text2}>{item.text1}</Text>
                                            <Text style={AppStyle.StyleSeeMoreHotel.text4}>Từ
                                                <Text style={AppStyle.StyleSeeMoreHotel.text3}> {item.price}</Text>
                                            </Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SeeMoreHotel;