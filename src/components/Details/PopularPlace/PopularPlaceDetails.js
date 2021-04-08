import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../../Header";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../theme/index";
import { scale, verticalScale } from "react-native-size-matters";
import TextHome from "../../../components/TextHome";
import ProposedSchedule from "./ProposedSchedule";
import Hotel from "./Hotel";
import Restaurant from "./Restaurant";
import Experience from "./Experience";
const PopularPlaceDetails = ({ navigation, route }) => {
    const dataheader = useSelector(store => store.PopularPlace.data)
    const id = route.params.id;
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'IDPOPULARPLACE', id: id })
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='#E5E5E5' barStyle={"dark-content"} />
            <ScrollView style={{ flex: 1 }}>
                {
                    dataheader && dataheader.map((item) => {
                        if (id === item.id)
                            return (
                                <View key={item.id.toString()} style={{ flex: 1 }}>
                                    <View style={AppStyle.StylePopularPlaceDetails.container}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={AppStyle.StylePopularPlaceDetails.img1}
                                        />
                                        <TouchableOpacity
                                            onPress={() => navigation.goBack()}
                                            style={AppStyle.StylePopularPlaceDetails.ChevronRight}
                                        >
                                            <Image
                                                source={require('../../../img/ChevronRight.png')}
                                                style={AppStyle.StyleScheduleDetails.img2}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={AppStyle.StylePopularPlaceDetails.searchPlace}
                                        >
                                            <Image
                                                source={require('../../../img/searchPlace.png')}
                                                style={AppStyle.StylePopularPlaceDetails.img3}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={AppStyle.StylePopularPlaceDetails.content}>
                                        <View style={AppStyle.StylePopularPlaceDetails.viewLabel}>
                                            <Text style={AppStyle.StylePopularPlaceDetails.name}>{item.name}</Text>
                                            <View style={AppStyle.StylePopularPlaceDetails.content3}>
                                                <Image
                                                    source={require('../../../img/location.png')}
                                                    style={AppStyle.StyleSchedule.img5}
                                                />
                                                <Text style={{ color: '#3076FE' }}>{item.text} Việt Nam</Text>
                                            </View>
                                            <Text style={AppStyle.StylePopularPlaceDetails.label}>{item.label}</Text>
                                            <Text style={AppStyle.StylePopularPlaceDetails.Seemore}>Xem Thêm</Text>
                                            <TouchableOpacity style={AppStyle.StylePopularPlaceDetails.button}>
                                                <Text style={AppStyle.StylePopularPlaceDetails.textButton}>Tạo lịch trình</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Image
                                        source={require('../../../img/mapPlace.png')}
                                        style={AppStyle.StylePopularPlaceDetails.img2}
                                    />
                                    <TextHome text1={'Lịch trình OKGO đề xuất'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />
                                    <ProposedSchedule />
                                    <TextHome text1={'Lịch trình tạo gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />
                                    <ProposedSchedule />
                                    <TextHome text1={'Khách sạn & Resort'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />
                                    <Hotel />
                                    <TextHome text1={'Nhà Hàng'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />
                                    <Restaurant />
                                    <TextHome text1={'Khám Phá'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />
                                    <Experience />
                                </View>
                            )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}
export default PopularPlaceDetails;