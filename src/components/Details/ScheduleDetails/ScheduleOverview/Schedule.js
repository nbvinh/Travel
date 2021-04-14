import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../../theme/index";
import { scale, verticalScale } from "react-native-size-matters";
import TextHome from "../../../TextHome";
const Schedule = (props) => {
    const item = props.item
    const dispatch = useDispatch()
    const navigation = props.navigation
    const onConfirm = () => {
        Alert.alert('Thông Báo', 'Bạn Có Chắc Đặt Chuyến đi không ? ', [
            {
                text: "Có",
                onPress: () => {
                    dispatch({ type: 'ADDWALKING', Walking: item })
                    navigation.navigate('BottomTab')
                }
            },
            {
                text: "Không",
                onPress: () => console.log("Cancel Pressed"),
            },
        ],
            { cancelable: false });
    }
    const ScheduleItem = useSelector(store => store.Schedule.ScheduleItem)
    return (
        <View style={AppStyle.StyleScheduleOverview.containerSchedule}>
            <View key={item.id.toString()} >
                <TextHome text1={'Kế hoạch'} text2={'Tất cả >'} onSeeMore={() => console.log('Truong Anh Vinh')} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false} style={AppStyle.StyleScheduleOverView2.container}>
                    {ScheduleItem && ScheduleItem.map((item) => {
                        return (
                            <View key={item.imgId} >
                                <View style={AppStyle.StyleScheduleOverView2.img1}>
                                    <Image
                                        source={item.img}
                                        style={AppStyle.StyleScheduleOverView2.img1}
                                    />
                                    <Text style={AppStyle.StyleScheduleOverView2.text1}>Ngày {item.imgId + 1}</Text>
                                </View>
                                <Text style={AppStyle.StyleScheduleOverView2.text2}>{item.day1}</Text>
                                <Text style={AppStyle.StyleScheduleOverView2.text3}>{item.Destination} điểm đến, {item.amountKM} km</Text>
                            </View>
                        )
                    })}
                </ScrollView>
                <View style={[AppStyle.StyleScheduleOverView2.container, { marginBottom: scale(60) }]}>
                    <Text style={AppStyle.StyleScheduleOverView2.text4}>Chuyến đi gồm</Text>
                    <View style={AppStyle.StyleScheduleOverView2.surface1}>
                        <Image
                            source={require('../../../../img/hotel23.png')}
                            style={AppStyle.StyleScheduleOverView2.img2}
                        />
                        <View style={AppStyle.StyleScheduleOverView2.surface2}>
                            <Text style={AppStyle.StyleScheduleOverView2.textsurface2}>Khách sạn</Text>
                            <Text style={AppStyle.StyleScheduleOverView2.textsurface1}>1 khách sạn, 5 ngày 4 đêm</Text>
                        </View>
                    </View>
                    <View style={AppStyle.StyleScheduleOverView2.surface1}>
                        <Image
                            source={require('../../../../img/surface1.png')}
                            style={AppStyle.StyleScheduleOverView2.img2}
                        />
                        <View style={AppStyle.StyleScheduleOverView2.surface2}>
                            <Text style={AppStyle.StyleScheduleOverView2.textsurface2}>Máy bay</Text>
                            <Text style={AppStyle.StyleScheduleOverView2.textsurface1}>2 vé thu hồi</Text>
                        </View>
                    </View>
                    <Text style={AppStyle.StyleScheduleOverView2.text4}>Thành viên</Text>
                    <Image
                        source={{ uri: item.avatar }}
                        style={AppStyle.StyleScheduleOverView2.img3}
                    />
                    <Text style={AppStyle.StyleScheduleOverView2.text4}>Vé thăm quan</Text>
                    <View style={AppStyle.StyleScheduleOverView2.surface1}>
                        <Image
                            source={require('../../../../img/vinh1.png')}
                            style={AppStyle.StyleScheduleOverView2.img4}
                        />
                        <View style={AppStyle.StyleScheduleOverView2.surface2}>
                            <Text style={AppStyle.StyleScheduleOverView2.textsurface2}>Vé vào</Text>
                            <Text style={AppStyle.StyleScheduleOverView2.textsurface1}>12 vé, 6 địa điểm</Text>
                        </View>
                    </View>
                </View>
                <View style={AppStyle.StyleScheduleDetails.footer}>
                    <Text style={AppStyle.StyleScheduleDetails.textPrice}>{item.price}</Text>
                    <TouchableOpacity
                        onPress={() => onConfirm()}
                        style={AppStyle.StyleScheduleDetails.BookNow}
                    >
                        <Text style={AppStyle.StyleScheduleDetails.textBookNow}>Đặt Ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Schedule;