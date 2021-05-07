import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../../Header";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../theme/index";
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";
import Day4 from "./Day4";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { scale, verticalScale } from "react-native-size-matters";
const ScheduleDetails = ({ navigation, route }) => {
    const item = route.params.item;
    const dispatch = useDispatch()
    const Tab = createMaterialTopTabNavigator()
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
                                source={require('../../../img/ChevronRight.png')}
                                style={AppStyle.StyleScheduleDetails.img2}
                            />
                        </TouchableOpacity>
                        <Text style={AppStyle.StyleScheduleDetails.text1}>{item.text1}</Text>
                        <Text style={AppStyle.StyleScheduleDetails.text2}>{item.day1} - {item.day2}</Text>
                    </View>
                    <View style={AppStyle.StyleScheduleDetails.TopTab}>
                        <Tab.Navigator
                            tabBarOptions={{
                                // activeTintColor: '#822FFB',
                                labelStyle: { fontSize: verticalScale(12), fontWeight: 'bold' },
                                indicatorStyle: { backgroundColor: 'black', marginLeft: scale(5) },
                                style: { backgroundColor: '#E5E5E5' },

                            }}>
                            <Tab.Screen name="Day1" component={Day1} options={{ tabBarLabel: 'Ngày 1 ' + item.day1 }} />
                            <Tab.Screen name="Day2" component={Day2} options={{ tabBarLabel: 'Ngày 2 ' + item.day2 }} />
                            <Tab.Screen name="Day3" component={Day3} options={{ tabBarLabel: 'Ngày 3 ' + item.day3 }} />
                            <Tab.Screen name="Day4" component={Day4} options={{ tabBarLabel: 'Ngày 4 ' + item.day4 }} />
                        </Tab.Navigator>
                    </View>

                </View>
            </ScrollView>
            <View key={item.id.toString()} style={AppStyle.StyleScheduleDetails.footer}>
                <Text style={AppStyle.StyleScheduleDetails.textPrice}>{item.price}</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("HomeStack", { screen: 'ScheduleOverview', params: { item: item } })}
                    style={AppStyle.StyleScheduleDetails.BookNow}
                >
                    <Text style={AppStyle.StyleScheduleDetails.textBookNow}>Đặt Ngay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}
export default ScheduleDetails;