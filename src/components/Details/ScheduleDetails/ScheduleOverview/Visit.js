import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../../theme/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { scale, verticalScale } from "react-native-size-matters";
const Visit = (props) => {
    const item = props.item
    const ScheduleItem = useSelector(store => store.Schedule.ScheduleItem)
    return (
        <View style={AppStyle.StyleScheduleOverview.containerSchedule}>
            <View key={item.id.toString()} style={AppStyle.StyleScheduleOverView2.body}>
                {ScheduleItem && ScheduleItem.map((item) => {
                    return (
                        <View key={item.imgId.toString()} style={AppStyle.StyleScheduleOverView2.Visit}>
                            <Text style={AppStyle.StyleScheduleOverView2.name}>{item.name}</Text>
                            <Text style={AppStyle.StyleScheduleOverView2.day1}>{item.day1}</Text>
                            <View style={AppStyle.StyleScheduleOverView2.price}>
                                <Text style={AppStyle.StyleScheduleOverView2.textprice}>{item.price}</Text>
                                <Text style={AppStyle.StyleScheduleOverView2.textDetail}>Chi tiết</Text>
                            </View>
                        </View>

                    )
                })}
                <TouchableOpacity style={AppStyle.StyleScheduleOverView2.search1}>
                    <Image
                        source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/166651262_2946139718952881_1709129165697467887_n.png?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=C16uT9WPkq8AX8t9kyP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=7af37eed61b151e58863474aeb95cf58&oe=608CE35D' }}
                        style={AppStyle.StyleScheduleOverview.img3}
                    />
                    <Text style={AppStyle.StyleScheduleOverview.text7}>Tìm điểm khác</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Visit;