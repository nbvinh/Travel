import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { scale } from "react-native-size-matters";
const Introduce = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const item = useSelector(store => store.Hotel.item)
    return (
        <View>
            <View style={styles.Introduce}>
                <Image
                    source={item.introduce1}
                    style={styles.introduceimg}
                />
                <Image
                    source={item.introduce2}
                    style={styles.introduceimg}
                />
                <Image
                    source={item.introduce3}
                    style={styles.introduceimg}
                />
                <TouchableOpacity style={styles.plus}>
                    <Image
                        source={require('../../../img/plus.png')}
                        style={styles.imgHeader}
                    />
                </TouchableOpacity>
            </View>
            <Text style={[styles.addressDetails, { marginHorizontal: scale(16) }]}>Khách sạn {item.text}
                <Text style={{ fontWeight: '400' }}> tọa lạc ngay trung tâm hành chính của huyện đảo Lý Sơn, Mường Thanh Holiday Lý Sơn được thiết kế với tiêu chuẩn 4 sao với sự kết hợp của nền văn hóa hiện đại và không gian thiên nhiên hiền hòa biển xanh - cát trắng - nắng vàng. Chăc chắn khách sạn sẽ mang lại cho quý khách một kỳ nghỉ dưỡng tuyệt vời để trải nghiệm được hết những cảnh quan nơi đây.</Text>
            </Text>
            <Text style={styles.textIntroduce}>Với hệ thống 92 phòng tiêu chuẩn được thiết kế rộng rãi, tiện nghi và thanh lịch, chúng tôi hân hạnh đem lại cho du khách những khoảnh khắc nghỉ ngơi, tách khỏi cuộc sống bận rộn thường ngày. </Text>  
        </View>
    )
}
export default Introduce;