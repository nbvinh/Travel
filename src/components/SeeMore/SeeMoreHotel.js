import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
import { scale } from "react-native-size-matters";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const SeeMoreHotel = ({ navigation, route }) => {
    const data = route.params.dataHotel
    const type = useSelector(store => store.Hotel.typeHotel)
    const dispatch = useDispatch()
    const onHotel = (item) => {
        navigation.navigate("HomeStack", { screen: 'HotelDetails' })
        dispatch({ type: 'ITEM', item: item })
    }
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={type === "Hotel" ? 'Khách sạn & Resort' : "Nhà hàng"}
                left={true}
            />
        ),
    });
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={{ flex: 1, alignItems: 'center', marginTop: scale(16) }}>
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
    )
}
export default SeeMoreHotel;