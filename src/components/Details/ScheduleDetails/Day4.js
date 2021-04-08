import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../../Header";
const { height, width } = Dimensions.get('screen')
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Form from "./Form";
const Day4 = () => {
    const dataheader = useSelector(store => store.Schedule.data)
    const id = useSelector(store => store.Schedule.id)
    const dispatch = useDispatch()
    const onX = (item) => {
        dispatch({ type: 'MODALSCHEDULE' })
        dispatch({ type: 'ADDITEM', additem: item })
    }
    const ScheduleItem = useSelector(store => store.Schedule.ScheduleItem)
    return (
        <View style={AppStyle.StyleScheduleDetails.daycontainer}>
            <View style={AppStyle.StyleScheduleDetails.daycontent1}></View>
            <View style={AppStyle.StyleScheduleDetails.daycontent2}>
                {ScheduleItem && ScheduleItem.map((item) => {
                    return (
                        <View key={item.imgId}>
                            <Text style={AppStyle.StyleScheduleDetails.daytext1}>{item.time1}</Text>
                            <View style={AppStyle.StyleScheduleDetails.imgcontainer}>
                                {
                                    item.imgId < 3 ?
                                        <View style={AppStyle.StyleScheduleDetails.straightLine} />
                                        : null
                                }
                                <View style={AppStyle.StyleScheduleDetails.viewSTT}>
                                    <Text style={AppStyle.StyleScheduleDetails.STT}>{item.imgId + 1}</Text>
                                </View>
                                <Image
                                    source={item.img}
                                    style={AppStyle.StyleScheduleDetails.img}
                                />
                                <Text style={AppStyle.StyleScheduleDetails.text3}>{item.name}</Text>
                                <View style={AppStyle.StyleScheduleDetails.time}>
                                    <Text style={AppStyle.StyleScheduleDetails.text4}>{item.time}</Text>
                                    <Text style={AppStyle.StyleScheduleDetails.text4}>Chọn địa điểm khác</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => onX(item)}
                                    style={AppStyle.StyleScheduleDetails.X}
                                >
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
            <Form />
        </View>
    )
}
export default Day4