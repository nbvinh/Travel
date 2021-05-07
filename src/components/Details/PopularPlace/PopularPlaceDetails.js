import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../theme/index";
import { scale, verticalScale } from "react-native-size-matters";
import { Schedule, TextHome, Hotel } from "../../Home/index";
import Experience from "./Experience";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
const PopularPlaceDetails = ({ navigation, route }) => {
    const item = useSelector(store => store.PopularPlace.item)
    const dispatch = useDispatch()
    const [tongle, setTongle] = useState(false)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
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
                                <Text style={{ color: '#3076FE', fontSize: scale(10) }}>{item.text} Việt Nam</Text>
                            </View>
                            <Text numberOfLines={tongle ? null : 3} style={AppStyle.StylePopularPlaceDetails.label}>{item.label}</Text>
                            <Text onPress={() => setTongle(!tongle)} style={AppStyle.StylePopularPlaceDetails.Seemore}>Xem Thêm</Text>
                            <TouchableOpacity style={AppStyle.StylePopularPlaceDetails.button}>
                                <Text style={AppStyle.StylePopularPlaceDetails.textButton}>Tạo lịch trình</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={AppStyle.StylePopularPlaceDetails.img2} onPress={() => navigation.navigate("HomeStack", { screen: "Maps", params: { item: item } })}>
                        <MapView
                            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                            style={AppStyle.StylePopularPlaceDetails.img2}
                            region={{
                                latitude: item.mapaddress.latitude,
                                longitude: item.mapaddress.longitude,
                                latitudeDelta: 0.09,
                                longitudeDelta: 0.09,
                            }}
                        >
                        </MapView>
                    </TouchableOpacity>
                    <TextHome text1={'Lịch trình OKGO đề xuất'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMoreDecemberDestination' })} />
                    <View style={{ marginLeft: scale(16) }}>
                        <Schedule data={item.ScheduleOK} />
                    </View>
                    <TextHome text1={'Lịch trình tạo gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMoreDecemberDestination' })} />
                    <View style={{ marginLeft: scale(16) }}>
                        <Schedule data={item.ScheduleOK} />
                    </View>
                    <TextHome text1={'Khách sạn & Resort'} text2={'Xem Thêm >'} onSeeMore={() => {
                        navigation.navigate("HomeStack", { screen: 'SeeMoreHotel', params: { dataHotel: item.HotelLySon } })
                        dispatch({ type: 'TYPE', typeHotel: "Hotel" })
                    }} />
                    <View style={{ marginLeft: scale(16) }}>
                        <Hotel data={item.HotelLySon} />
                    </View>
                    <TextHome text1={'Nhà Hàng'} text2={'Xem Thêm >'} onSeeMore={() => {
                        dispatch({ type: 'TYPE', typeHotel: "Restaurant" })
                        navigation.navigate("HomeStack", { screen: 'SeeMoreHotel', params: { dataHotel: item.Restaurant } })
                    }} />
                    <View style={{ marginLeft: scale(16) }}>
                        <Hotel data={item.Restaurant} />
                    </View>
                    <TextHome text1={'Khám Phá'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMoreDecemberDestination' })} />
                    <Experience />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default PopularPlaceDetails;