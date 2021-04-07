import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../theme/index";
const { height, width } = Dimensions.get('screen')
const Hotel = () => {
    const dataheader = useSelector(store => store.PopularPlace.data)
    const id = useSelector(store => store.PopularPlace.id)

    return (
        <View style={AppStyle.StylePopularPlaceDetails.ProposedSchedule}>
            {
                dataheader && dataheader.map((item) => {
                    if (id === item.id)
                        return (
                            <ScrollView horizontal={true} key={item.id.toString()}>
                                {
                                    item.HotelLySon && item.HotelLySon.map((item) => {
                                        return (
                                            <View key={item.id.toString()} style={AppStyle.StylePopularPlaceDetails.Restaurant}>
                                                <Image
                                                    source={{ uri: item.img }}
                                                    style={AppStyle.StyleHotel.img1}
                                                />
                                                <View style={AppStyle.StyleHotel.content}>
                                                    <Text style={AppStyle.StyleHotel.text1}>{item.text2}</Text>
                                                    <View style={AppStyle.StyleHotel.content2}>
                                                        <Image
                                                            source={require('../../../img/star.png')}
                                                            style={AppStyle.StyleHotel.star}
                                                        />
                                                        <Image
                                                            source={require('../../../img/star.png')}
                                                            style={AppStyle.StyleHotel.star}
                                                        />
                                                        <Image
                                                            source={require('../../../img/star.png')}
                                                            style={AppStyle.StyleHotel.star}
                                                        />
                                                        <Image
                                                            source={require('../../../img/star.png')}
                                                            style={AppStyle.StyleHotel.star}
                                                        />
                                                        <Image
                                                            source={require('../../../img/star.png')}
                                                            style={AppStyle.StyleHotel.star}
                                                        />
                                                    </View>
                                                </View>
                                                <Text style={AppStyle.StyleHotel.text2}>{item.text}</Text>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Image
                                                        source={require('../../../img/location.png')}
                                                        style={AppStyle.StyleHotel.img2}
                                                    />
                                                    <Text style={AppStyle.StyleHotel.text3}>{item.text1}</Text>
                                                </View>
                                                <Text style={AppStyle.StyleHotel.text4}>{item.price} đ/ đêm</Text>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                        )
                })
            }
        </View>
    )
}
export default Hotel;