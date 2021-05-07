import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, ScrollView, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Introduce from "./Introduce";
import TextHome from "../../TextHome";
import { Hotel } from "../../Home/index";
import { scale } from "react-native-size-matters";
const Body = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const item = useSelector(store => store.Hotel.item)
    const Star = useSelector(store => store.people.Star)
    const type = useSelector(store => store.Hotel.typeHotel)
    return (
        <View style={styles.body}>
            <View style={styles.middle}>
                <View style={styles.textView}>
                    <Text style={styles.addressDetails}>Địa chỉ :
                    <Text style={[styles.addressDetails, { fontWeight: '600' }]}> {item.address}</Text>
                    </Text>
                    <Text style={styles.addressDetails}>Giờ mở cửa :
                    <Text style={[styles.addressDetails, { fontWeight: '600' }]}> {item.timeOpen}</Text>
                    </Text>
                    <Text style={styles.addressDetails}>Giá :
                    <Text style={[styles.addressDetails, { fontWeight: '600' }]}> {item.priceDetails}</Text>
                    </Text>
                </View>
                <ScrollView horizontal={true} style={styles.rateView}>
                    {Star && Star.map((item) => {
                        return (
                            <Image
                                key={item.id}
                                source={require('../../../img/star.png')}
                                style={styles.rate}
                            />
                        )
                    })}
                </ScrollView>
            </View>
            <Image
                source={item.map}
                style={styles.map}
            />
            <Introduce />
            <TextHome text1={type === "Hotel" ? "Khách sạn lân cận" : "Nhà hàng lận cận"} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen:'SeeMoreHotel'})} />
            <View style={{ marginLeft: scale(16), marginBottom: scale(46) }}>
                <Hotel data={item.NearHotel} />
            </View>
        </View>
    )
}
export default Body;