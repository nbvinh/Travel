import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../../Header";
const { height, width } = Dimensions.get('screen')
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";

const Day3 = () => {
    const dataheader = useSelector(store => store.Schedule.data)
    const id = useSelector(store => store.Schedule.id)
    return (
        <View style={AppStyle.StyleScheduleDetails.daycontainer}>
            <View style={AppStyle.StyleScheduleDetails.daycontent1}></View>
            {dataheader && dataheader.map((item) => {
                if (id === item.id)
                    return (
                        <View key={item.id} style={AppStyle.StyleScheduleDetails.daycontent2}>
                            {item.imgday && item.imgday.map((item) => {
                                return (
                                    <View key={item.imgId}>
                                        <Text style={AppStyle.StyleScheduleDetails.daytext1}>{item.time1}</Text>
                                        <View style={AppStyle.StyleScheduleDetails.imgcontainer}>
                                            <Image
                                                source={item.img}
                                                style={AppStyle.StyleScheduleDetails.img}
                                            />
                                            <Text style={AppStyle.StyleScheduleDetails.text3}>{item.name}</Text>
                                            <View style={AppStyle.StyleScheduleDetails.time}>
                                                <Text style={AppStyle.StyleScheduleDetails.text4}>{item.time}</Text>
                                                <Text style={AppStyle.StyleScheduleDetails.text4}>Chọn địa điểm khác</Text>
                                            </View>
                                            <TouchableOpacity style={AppStyle.StyleScheduleDetails.X}>
                                                <Image
                                                    source={require('../../../img/X.png')}
                                                    style={AppStyle.StyleScheduleDetails.img3}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={AppStyle.StyleScheduleDetails.viewDay}>
                                            <View style={AppStyle.StyleScheduleDetails.viewDay1}>
                                                <Image
                                                    source={require('../../../img/Car.png')}
                                                    style={AppStyle.StyleScheduleDetails.img4}
                                                />
                                                <Text style={AppStyle.StyleScheduleDetails.text5}>{item.distance}</Text>
                                            </View>
                                            <View style={AppStyle.StyleScheduleDetails.viewDay1}>
                                                <Image
                                                    source={require('../../../img/hourglass.png')}
                                                    style={AppStyle.StyleScheduleDetails.img5}
                                                />
                                                <Text style={AppStyle.StyleScheduleDetails.text6}>{item.distance}</Text>
                                            </View>
                                            <Image
                                                source={require('../../../img/notebook.png')}
                                                style={AppStyle.StyleScheduleDetails.img6}
                                            />
                                        </View>
                                    </View>
                                )
                            })}
                            <View style={AppStyle.StyleScheduleDetails.viewDay3}>
                                <Image 
                                    source={require('../../../img/Plus(2).png')}
                                    style={AppStyle.StyleScheduleDetails.img7}
                                />
                                <Text style={AppStyle.StyleScheduleDetails.text7}>Thêm điểm đi</Text>
                            </View>
                        </View>
                    )
            })}
        </View>
    )
}
export default Day3