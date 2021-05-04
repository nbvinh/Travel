import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../Header";
const { height, width } = Dimensions.get('screen')
const day1 = [
    { id: 1, label: 'Xuất phát từ Hà Nội', time: "6:30", labelDetail: "Vé máy bay: 6.380.00 đ/ 2 người/ khứ hồi" },
    { id: 2, label: 'Check in và lên máy bay tại sân bay Nội Bài', time: "6:30", labelDetail: "Di chuyển bằng xe khách đến Phan Thiết: 300.000 đ/ 2 người" },
    { id: 3, label: 'Check out tại sân bay Tân Sơn Nhất', time: "6:30", labelDetail: "Di chuyển bằng xe khách đến Phan Thiết: 300.000 đ/ 2 người" },
    { id: 4, label: 'Có mặt tại Phan Thiết', time: "6:30", labelDetail: "Check in khách sạn và nghỉ ngơi" },
    { id: 5, label: 'Tham quan trường Dục Thanh', time: "6:30", labelDetail: "Vé thăm quan miễn phí" },
    { id: 6, label: 'Tham quan Dinh Vạn Thủy Tú', time: "6:30", labelDetail: "Vé thăm quan: 80.000 đ/ 2 người" },
    { id: 7, label: 'Lẩu cá Ngọc Lan', time: "6:30", labelDetail: "Giá: 420.000 đ/ 2 người" },
    { id: 8, label: 'Về khách sạn nghỉ ngơi', time: "6:30", labelDetail: "" },
]
const day2 = [
    { id: 1, label: 'Ăn sáng buffet tại nhà hàng của khách sạn', time: "6:30", labelDetail: "" },
    { id: 2, label: 'Tham quan Làng chài Mũi Né', time: "6:30", labelDetail: "" },
    { id: 3, label: 'Tham quan Tháp Chàm Poshanư ', time: "6:30", labelDetail: "20.000 đ/ 2 người" },
    { id: 4, label: 'Tham quan Chùa núi Tà Cú', time: "6:30", labelDetail: "Vé cáp treo: 180.000/ 2 người" },
    { id: 5, label: 'Tham quan Bảo Tàng 3D Làng Chài Xưa', time: "6:30", labelDetail: "Vé thăm quan: 200.000 đ/ 2 người" },
    { id: 6, label: 'Ăn trưa và nghỉ chân tại nhà hàng Lacheln', time: "6:30", labelDetail: "Giá: 455.000 đ/ 2 người" },
    { id: 7, label: 'Tham quan Lâu đài rượu vang RD', time: "6:30", labelDetail: "Vé thăm quan: 200.000 đ/ 2 người" },
    { id: 8, label: 'Tắm biển Mũi Né', time: "6:30", labelDetail: "Vui chơi: 280.000 đ/ 2 người" },
    { id: 9, label: 'Thưởng thức ẩm thực đường phố', time: "6:30", labelDetail: "Giá: 235.000 đ/ 2 người" },
    { id: 10, label: 'Ghé Joe’s Café Muine nghe nhạc sống', time: "6:30", labelDetail: "Giá: 150.000 đ/ 2 người" },
    { id: 11, label: 'Về khách sạn nghỉ ngơi', time: "6:30", labelDetail: "" },
]
const day3 = [
    { id: 1, label: 'Ăn sáng buffet tại nhà hàng của khách sạn', time: "6:30", labelDetail: "" },
    { id: 2, label: 'Đồi cát Mũi né', time: "6:30", labelDetail: "" },
    { id: 3, label: 'Tiểu sa mạc Sahara Bàu Trắng', time: "6:30", labelDetail: "" },
    { id: 4, label: 'Ghé thăm chợ hải sản Mũi Né', time: "6:30", labelDetail: "Mua hải sản tươi: 1.800.000 đ/ 2 người" },
    { id: 5, label: 'Về khách sạn nghỉ ngơi và ăn trưa tại nhà hàng', time: "6:30", labelDetail: "Giá: 100.000 đ/ 2 người" },
    { id: 6, label: 'Check out khách sạn và di chuyển đến TP HCM', time: "6:30", labelDetail: "Giá phòng: 1.380.000 đ/ 2 người/ 2 đêm", labelDetail2: "Di chuyển bằng xe khách đến sân bay: 300.000 đ/ 2 người" },
    { id: 7, label: 'Check in sân bay Tân Sơn Nhất', time: "6:30", labelDetail: "" },
    { id: 8, label: 'Check out sân bay Nội Bài ', time: "6:30", labelDetail: "" },
]
const Walkingschedule = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Lịch trình đang đi'} onBack={() => navigation.goBack()} />
                <View style={[AppStyle.StyleProfile.body, { marginHorizontal: scale(16) }]}>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Walkingschedule;

