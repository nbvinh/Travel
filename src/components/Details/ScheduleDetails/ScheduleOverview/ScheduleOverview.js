import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../../theme/index";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { scale, verticalScale } from "react-native-size-matters";
import Schedule from "./Schedule";
import Planes from "./Planes";
import Hotel from "./Hotel";
import Visit from "./Visit";
const ScheduleOverview = ({ navigation, route }) => {
    const item = route.params.item;
    const filterMenu = useSelector(store => store.Schedule.filterMenu)
    const StyleOverview = (statusname) => {
        if (statusname == filterMenu) return [AppStyle.StyleScheduleOverview.MenuTop, { backgroundColor: '#FF5F24' }]
        return [AppStyle.StyleScheduleOverview.MenuTop, { backgroundColor: '#ECF1FF' }]
    }
    const StyleTextOverview = (statusname) => {
        if (statusname == filterMenu) return [AppStyle.StyleScheduleOverview.textMenu, { color: 'white' }]
        return [AppStyle.StyleScheduleOverview.textMenu, { color: 'black' }]
    }
    const dispatch = useDispatch()
    const onSchedule = () => {
        dispatch({ type: 'FILTERSCHEDULE' })
    }
    const onPlanes = () => {
        dispatch({ type: 'FILTERPLANES' })
    }
    const onHotel = () => {
        dispatch({ type: 'FILTERHOTEL' })
    }
    const onVisit = () => {
        dispatch({ type: 'FILTERVISIT' })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <ScrollView style={{ flex: 1 }}>
                <View key={item.id.toString()} style={{ flex: 1 }}>
                    <View style={AppStyle.StyleScheduleDetails.container}>
                        <Image
                            source={{ uri: item.img1 }}
                            style={AppStyle.StyleScheduleDetails.img1}
                        />
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={AppStyle.StyleScheduleDetails.ChevronRight}
                        >
                            <Image
                                source={require('../../../../img/ChevronRight.png')}
                                style={AppStyle.StyleScheduleDetails.img2}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={AppStyle.StyleScheduleOverview.container}>
                        <View style={AppStyle.StyleScheduleOverview.viewAvatar}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={AppStyle.StyleScheduleOverview.avatar}
                            />
                        </View>
                        <Text style={AppStyle.StyleScheduleOverview.text1}>{item.text1}</Text>
                        <Text style={AppStyle.StyleScheduleOverview.text2}>{item.day1} - {item.day4}</Text>
                    </View>
                    <ScrollView horizontal={true}>
                        <TouchableOpacity
                            onPress={() => onSchedule()}
                            style={StyleOverview('SCHEDULE')}
                        >
                            <Text style={StyleTextOverview('SCHEDULE')}>Lịch trình</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onPlanes()}
                            style={StyleOverview('PLANES')}
                        >
                            <Text style={StyleTextOverview('PLANES')}>Máy bay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onHotel()}
                            style={StyleOverview('HOTEL')}
                        >
                            <Text style={StyleTextOverview('HOTEL')}>Khách sạn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onVisit()}
                            style={StyleOverview('VISIT')}
                        >
                            <Text style={StyleTextOverview('VISIT')}>Thăm quan</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    {
                        filterMenu === 'PLANES' ? <Planes item={item} /> : filterMenu === 'SCHEDULE' ? <Schedule item={item} navigation={navigation} /> : filterMenu === 'HOTEL' ? <Hotel item={item} /> : <Visit item={item} />
                    }

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
export default ScheduleOverview;