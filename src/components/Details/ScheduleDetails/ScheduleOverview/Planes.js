import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../../theme/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { scale, verticalScale } from "react-native-size-matters";
const Planes = ({ navigation, route }) => {
    const data = useSelector(store => store.Schedule.data)
    const id = useSelector(store => store.Schedule.id)
    const filterMenu = useSelector(store => store.Schedule.filterMenu)
    return (
        <View style={AppStyle.StyleScheduleOverview.containerSchedule}>
            {data && data.map((item) => {
                if (id === item.id)
                    return (
                        <View key={item.id.toString()} style={AppStyle.StyleScheduleOverview.content}>
                            <Text style={AppStyle.StyleScheduleOverview.text3}>Hà Nội - {item.text1}</Text>
                            <View style={AppStyle.StyleScheduleOverview.content1}>
                                <Text style={AppStyle.StyleScheduleOverview.text3}>HAN</Text>
                                <Image
                                    source={require('../../../../img/Path505.png')}
                                    style={AppStyle.StyleScheduleOverview.img1}
                                />
                                <Text style={AppStyle.StyleScheduleOverview.text3}>UIH</Text>
                            </View>
                            <Text style={AppStyle.StyleScheduleOverview.text4}>Thứ 5, 5 tháng 12, 2021</Text>
                            <Image
                                source={require('../../../../img/vietjet-air.png')}
                                style={AppStyle.StyleScheduleOverview.img2}
                            />
                            <Text style={AppStyle.StyleScheduleOverview.text5}>Chuyến bay: VJ345</Text>
                            <View style={AppStyle.StyleScheduleOverview.content1}>
                                <Text style={AppStyle.StyleScheduleOverview.text6}>HAN</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>1h35m</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>UIH</Text>
                            </View>
                            <View style={AppStyle.StyleScheduleOverview.content1}>
                                <Text style={AppStyle.StyleScheduleOverview.text6}>13:00</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline1} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>Hạng Thương Gia</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline1} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>14:35</Text>
                            </View>
                            <View style={AppStyle.StyleScheduleOverview.straightline2} />
                            <Text style={AppStyle.StyleScheduleOverview.text3}>{item.text1} - Hà Nội</Text>
                            <View style={AppStyle.StyleScheduleOverview.content1}>
                                <Text style={AppStyle.StyleScheduleOverview.text3}>UIH</Text>
                                <Image
                                    source={require('../../../../img/Path505.png')}
                                    style={AppStyle.StyleScheduleOverview.img1}
                                />
                                <Text style={AppStyle.StyleScheduleOverview.text3}>HAN</Text>
                            </View>
                            <Text style={AppStyle.StyleScheduleOverview.text4}>Thứ 3, 10 tháng 12, 2021</Text>
                            <Image
                                source={require('../../../../img/vietjet-air.png')}
                                style={AppStyle.StyleScheduleOverview.img2}
                            />
                            <Text style={AppStyle.StyleScheduleOverview.text5}>Chuyến bay: VJ345</Text>
                            <View style={AppStyle.StyleScheduleOverview.content1}>
                                <Text style={AppStyle.StyleScheduleOverview.text6}>HAN</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>1h35m</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>UIH</Text>
                            </View>
                            <View style={[AppStyle.StyleScheduleOverview.content1, { marginBottom: scale(30) }]}>
                                <Text style={AppStyle.StyleScheduleOverview.text6}>10:00</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline1} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>Hạng Thương Gia</Text>
                                <View style={AppStyle.StyleScheduleOverview.straightline1} />
                                <Text style={AppStyle.StyleScheduleOverview.text6}>11:35</Text>
                            </View>
                            <TouchableOpacity style={AppStyle.StyleScheduleOverview.search}>
                                <Image
                                    source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/166651262_2946139718952881_1709129165697467887_n.png?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=C16uT9WPkq8AX8t9kyP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=7af37eed61b151e58863474aeb95cf58&oe=608CE35D' }}
                                    style={AppStyle.StyleScheduleOverview.img3}
                                />
                                <Text style={AppStyle.StyleScheduleOverview.text7}>Tìm chuyến bay khác</Text>
                            </TouchableOpacity>
                            <View style={AppStyle.StyleScheduleDetails.footer}>
                                <Text style={AppStyle.StyleScheduleDetails.textPrice}>{item.pricePlanes}</Text>
                                <TouchableOpacity style={AppStyle.StyleScheduleDetails.BookNow}>
                                    <Text style={AppStyle.StyleScheduleDetails.textBookNow}>Đặt Ngay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
            })}
        </View>
    )
}
export default Planes;