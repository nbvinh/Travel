import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme";
import styles from "./styles";
import { TextHome, Hotel } from "../Home/index";
import { useNavigation } from '@react-navigation/native';
const Body = (props) => {
    const data = useSelector(store => store.dataheader.hotel)
    const navigation = useNavigation()
    const hotel = useSelector(store => store.Hotel.dataFind)
    const Homestay = useSelector(store => store.dataheader.Homestay)
    const couple = useSelector(store => store.dataheader.couple)
    const RestaurantData = useSelector(store => store.dataheader.RestaurantData)
    const RestaurantFamily = useSelector(store => store.dataheader.RestaurantFamily)
    const Cafe = useSelector(store => store.dataheader.Cafe)
    const type = props.type
    const offer1 = type === "Hotel" ? hotel : RestaurantData
    const offer3 = type === 'Hotel' ? couple : Cafe
    const offer2 = type === "Hotel" ? Homestay : RestaurantFamily
    return (
        <View>
            <TextHome text1={'Gợi ý tại điểm đến'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMorePopularPlace' })} />
            <ScrollView horizontal={true} style={styles.body}>
                {
                    data && data.map((item) => {
                        return (
                            <View key={item.id.toString()} style={{ marginRight: scale(16) }}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={AppStyle.StyleSchedule.img6}
                                />
                                <Text style={AppStyle.StyleSchedule.text3}>{item.text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <TextHome text1={"Đề Xuất cho bạn"} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMoreHotel' })} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Hotel data={offer1} type={"FindHotel"} />
            </View>
            <TextHome text1={type === "Hotel" ? 'Homestay' : "Nhà hàng cho gia đình"} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMoreHotel' })} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Hotel data={offer2} type={"FindHotel"} />
            </View>
            <TextHome text1={type === "Hotel" ? 'Đề Xuất cho cặp đôi' : "Cafe cho cặp đôi"} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen: 'SeeMoreHotel' })} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Hotel data={couple} type={"home"} />
            </View>
        </View>
    )
}
export default Body;