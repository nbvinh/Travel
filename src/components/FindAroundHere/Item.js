import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import { Hotel, TextHome, DecemberDestination, Schedule } from "../Home/index";
const Item = (props) => {
    const dispatch = useDispatch()
    const navigation = props.navigation
    const data = useSelector(store => store.Hotel.dataFind)
    const restaurant = useSelector(store => store.Hotel.restaurant)
    const DestinationFind = useSelector(store => store.DecemberDestination.DestinationFind)
    const item = props.item
    return (
        <View style={styles.container}>
            {item.id === 10 ?
                <View>
                    <TextHome text1={'Khách sạn gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreHotel')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Hotel data={data} type={"FindHotel"} />
                    </View>
                    <TextHome text1={'Nhà hàng gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreHotel')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Hotel data={restaurant} type={"FindDestination"} />
                    </View>
                    <TextHome text1={'Điểm đến gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />

                    <View style={AppStyle.StyleHome.marginLeft}>
                        <DecemberDestination data={DestinationFind} />
                    </View>
                    <TextHome text1={'Lịch trình gợi ý'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
                    <View style={[AppStyle.StyleHome.marginLeft, { marginBottom: scale(30) }]}>
                        <Schedule />
                    </View>
                </View>
                :
                <View>
                    <View style={styles.FindFailed}>
                        <Text style={styles.text1}>Chưa có kết quả nào phù hợp</Text>
                    </View>
                    <TextHome text1={'Điểm đến gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />

                    <View style={AppStyle.StyleHome.marginLeft}>
                        <DecemberDestination data={DestinationFind} />
                    </View>
                    <TextHome text1={'Lịch trình gợi ý'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
                    <View style={[AppStyle.StyleHome.marginLeft, { marginBottom: scale(30) }]}>
                        <Schedule />
                    </View>
                </View>
            }
        </View>
    )
}
export default Item;
const styles = StyleSheet.create({
    container: {
        flex: 10,
        marginTop: scale(15)
    },
    FindFailed: {
        height: scale(180),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: scale(12),
        color: '#000000',
        fontWeight: '400'
    }
})