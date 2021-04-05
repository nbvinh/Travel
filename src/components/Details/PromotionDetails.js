import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../Header";
const { height, width } = Dimensions.get('screen')
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
const PromotionDetails = ({ navigation, route }) => {
    const dataheader = useSelector(store => store.Promotion.data)
    const id = route.params.id;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='#E5E5E5' barStyle={"dark-content"} />
            <ScrollView style={{ flex: 1 }}>
                {
                    dataheader && dataheader.map((item) => {
                        if (id === item.id)
                            return (
                                <View key={item.id.toString()} style={{ flex: 1 }}>
                                    <View style={AppStyle.StylePromotionDetails.container}>
                                        <Image
                                            source={item.img}
                                            style={AppStyle.StylePromotionDetails.img}
                                        />
                                    </View>
                                    <View style={AppStyle.StylePromotionDetails.content}>
                                        <Text style={AppStyle.StylePromotionDetails.text1}>Điều kiện áp dụng:</Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>- Áp dụng cho tất cả các khách sạn trong nước và quốc tế của
                                            <Text style={AppStyle.StylePromotionDetails.bold}> OKGO
                                                <Text style={{ fontWeight: 'normal' }}> với đơn hàng từ
                                                    <Text style={AppStyle.StylePromotionDetails.color}> {item.orderprice}Đ
                                                        <Text style={AppStyle.StylePromotionDetails.colorblack}> trở lên</Text>
                                                    </Text>
                                                </Text>
                                            </Text>
                                        </Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>- Thời gian chương trình : từ
                                            <Text style={AppStyle.StylePromotionDetails.color}> : {item.timeIN}
                                                <Text style={AppStyle.StylePromotionDetails.colorblack}> đến
                                            <Text style={AppStyle.StylePromotionDetails.color}> : {item.timeOut}/2019.</Text>
                                                </Text>
                                            </Text>
                                        </Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>- Áp dụng cho khách hàng đặt phòng trực tiếp trên web hoặc ứng dụng
                                            <Text style={AppStyle.StylePromotionDetails.bold}> OKGO.
                                                <Text style={{ fontWeight: "normal" }}>Quý khách có thể tải ứng dụng trên
                                                    <Text style={AppStyle.StylePromotionDetails.color}> ANDROID
                                                        <Text style={AppStyle.StylePromotionDetails.colorblack}> hoặc
                                                            <Text style={AppStyle.StylePromotionDetails.color}> IOS.</Text>
                                                        </Text>
                                                    </Text>
                                                </Text>
                                            </Text>
                                        </Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>- Mã khuyến mại không được phép quy đổi thành tiền mặt.</Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>- Không giới hạn số lần đặt phòng.</Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>- Không áp dụng đồng thời với các chương trình khuyến mại khác của
                                            <Text style={AppStyle.StylePromotionDetails.bold}> OKGO</Text>
                                        .</Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>
                                            <Text style={AppStyle.StylePromotionDetails.bold}> OKGO</Text>
                                            - có quyền thay đổi điều khoản & điều kiện chương trình mà không cần thông báo trước.
                                        .</Text>
                                        <Text style={AppStyle.StylePromotionDetails.text1}>Các bước để nhận ưu đãi trên OKGO:</Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>1.Tìm
                                            <Text style={AppStyle.StylePromotionDetails.color}> "KHÁCH SẠN" </Text>
                                        trên web hoặc ứng dụng
                                            <Text style={AppStyle.StylePromotionDetails.bold}> OKGO</Text>
                                        </Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>2. Chọn khách sạn, phòng phù hợp và điền đầy đủ thông tin hành khách. </Text>
                                        <Text style={AppStyle.StylePromotionDetails.text2}>3. Nhập mã
                                            <Text style={AppStyle.StylePromotionDetails.color}> MEGA </Text>
                                        vào ô
                                            <Text style={AppStyle.StylePromotionDetails.bold}> "NHẬP MÃ KHUYẾN MẠI" </Text>
                                        ở bước
                                            <Text style={AppStyle.StylePromotionDetails.bold}> "THANH TOÁN" </Text>
                                        . </Text>
                                    </View>
                                    <TouchableOpacity style={AppStyle.StylePromotionDetails.footer}>
                                        <Text style={AppStyle.StylePromotionDetails.text3}>Đặt Ngay</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}
export default PromotionDetails;