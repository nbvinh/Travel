import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../../theme/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { scale, verticalScale } from "react-native-size-matters";
const Hotel = (props) => {
    const item = props.item
    return (
        <View style={AppStyle.StyleScheduleOverview.containerSchedule}>
            <View key={item.id.toString()} style={AppStyle.StyleScheduleOverView2.body}>
                <Text style={AppStyle.StyleScheduleOverView2.text4}>Khách sạn Phương Đông</Text>
                <Text style={AppStyle.StyleScheduleOverView2.text5}>- 1 Phòng VIP - 2 người</Text>
                <Text style={AppStyle.StyleScheduleOverView2.text5}>- 4 ngày - 3 đêm</Text>
                <View style={AppStyle.StyleScheduleOverView2.content}>
                    <View>
                        <Text style={AppStyle.StyleScheduleOverView2.textsurface2}>Giá Phòng</Text>
                        <Text style={AppStyle.StyleScheduleOverView2.text7}>(1 phòng/ đêm)</Text>
                    </View>
                    <Text style={AppStyle.StyleScheduleOverView2.text6}>851,700
                                    <Text style={AppStyle.StyleScheduleOverView2.textsurface2}> VND</Text>
                    </Text>
                </View>
                <View style={AppStyle.StyleScheduleOverView2.content}>
                    <Text style={AppStyle.StyleScheduleOverView2.textsurface2}>Thuế và Phí dịch vụ</Text>
                    <Text style={AppStyle.StyleScheduleOverView2.text6}>360,000
                                    <Text style={AppStyle.StyleScheduleOverView2.textsurface2}> VND</Text>
                    </Text>
                </View>
                <TouchableOpacity style={AppStyle.StyleScheduleOverView2.search}>
                    <Image
                        source={{ uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/166651262_2946139718952881_1709129165697467887_n.png?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=C16uT9WPkq8AX8t9kyP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=7af37eed61b151e58863474aeb95cf58&oe=608CE35D' }}
                        style={AppStyle.StyleScheduleOverview.img3}
                    />
                    <Text style={AppStyle.StyleScheduleOverview.text7}>Tìm khách sạn khác</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Hotel;