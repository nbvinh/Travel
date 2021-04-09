import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import AppStyle from "../../theme/index";
import { verticalScale } from "react-native-size-matters";
const { height, width } = Dimensions.get('screen')
const SeeMoreSchedule = ({ navigation }) => {
    const dataheader = useSelector(store => store.Schedule.data)
    const dispatch = useDispatch()
    const onChoose = (item) => {
        navigation.navigate('ScheduleDetails',
            { id: item.id }
        )
        dispatch({type:'ADDSCHEDULEITEM',ScheduleItem:item.imgday})
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <Header text={'Lịch trình gần đây'} onBack={() => navigation.goBack()} />
            <View style={{ flex: 10, marginHorizontal: 10 }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <TouchableOpacity
                                    key={item.id.toString()}
                                    style={AppStyle.StyleSeeMoreSchedule.container}
                                    onPress={() =>onChoose(item)}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image
                                            source={{ uri: item.img1 }}
                                            style={AppStyle.StyleSeeMoreSchedule.img1}
                                        />
                                        <View>
                                            <Image
                                                source={{ uri: item.img2 }}
                                                style={AppStyle.StyleSeeMoreSchedule.img2}
                                            />
                                            <View style={AppStyle.StyleSeeMoreSchedule.viewIMG}>
                                                <Image
                                                    source={{ uri: item.img3 }}
                                                    style={AppStyle.StyleSeeMoreSchedule.img3}
                                                />
                                                <Image
                                                    source={{ uri: item.img4 }}
                                                    style={AppStyle.StyleSeeMoreSchedule.img3}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={AppStyle.StyleSeeMoreSchedule.viewIMG2}>
                                        <View style={{ flex: 1, marginLeft: 10 }}>
                                            <View style={AppStyle.StyleSeeMoreSchedule.viewText}>
                                                <Text style={AppStyle.StylePromotionDetails.bold}>{item.text1} </Text>
                                                <Text style={{ color: '#494949' }}>({item.text2})</Text>
                                            </View>
                                            <View style={AppStyle.StyleSeeMoreSchedule.viewText}>
                                                <Image
                                                    source={{ uri: item.avatar }}
                                                    style={AppStyle.StyleSeeMoreSchedule.img4}
                                                />
                                                <View>
                                                    <Text style={AppStyle.StylePromotionDetails.colorblack}>{item.name}</Text>
                                                    <Text style={{ color: '#494949' }}>{item.time}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ marginRight: 15 }}>
                                            <View style={AppStyle.StyleSeeMoreSchedule.content}>
                                                <Image
                                                    source={require('../../img/location.png')}
                                                    style={AppStyle.StyleSeeMoreSchedule.img5}
                                                />
                                                <Text style={{ color: '#3076FE' }}>Việt Nam</Text>
                                            </View>
                                            <View style={AppStyle.StyleSeeMoreSchedule.viewText1}>
                                                <Text style={AppStyle.StyleSeeMoreSchedule.text1}>{item.price}</Text>
                                            </View>
                                        </View>

                                    </View>
                                    <View style={AppStyle.StyleSeeMoreSchedule.footer}>
                                        <Image
                                            source={require('../../img/img23.png')}
                                            style={AppStyle.StyleSeeMoreSchedule.img6}
                                        />
                                        <Image
                                            source={require('../../img/heart.png')}
                                            style={AppStyle.StyleSeeMoreSchedule.img7}
                                        />
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default SeeMoreSchedule;