import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Header from "../../Header";
import TextHome from "../../TextHome";
import Review from "./Review";
import SeeIMG from "./SeeIMG";
import Schedule from "../../Home/Schedule";
import { verticalScale } from "react-native-size-matters";
import Follow from "../../Follow";
const { height, width } = Dimensions.get('screen')
const PersonalPage = ({ navigation }) => {
    const item = useSelector(store => store.people.user)
    const data = useSelector(store => store.Schedule.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Thông tin cá nhân'} onBack={() => navigation.goBack()} />
                <View style={AppStyle.StyleProfile.body}>
                    <ScrollView style={AppStyle.StyleHome.scrollview}>
                        <View style={AppStyle.StylePersonalPage.container}>
                            <View style={AppStyle.StylePersonalPage.avatar}>
                                <Image
                                    source={{ uri: item.avatar }}
                                    style={AppStyle.StylePersonalPage.img1}
                                />
                                <Text style={AppStyle.StylePersonalPage.name}>{item.lastname} {item.fisrtname}</Text>
                            </View>
                            <View style={AppStyle.StylePersonalPage.body}>
                                <View style={AppStyle.StylePersonalPage.follow}>
                                    <Text />
                                    <Follow quantity={100} text={'Người theo dõi'} type={'follow'} navigation={navigation} />
                                    <Follow quantity={200} text={'Đang theo dõi'} type={'following'} navigation={navigation} />
                                    <Text />
                                </View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('EditProfile')}
                                    style={AppStyle.StylePersonalPage.Edit}
                                >
                                    <Text style={AppStyle.StylePersonalPage.text3}>Sửa thông tin cá nhân</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Review />
                        <TextHome text1={'Xem ảnh'} text2={'Xem thêm >'} />
                        <SeeIMG />
                        <TextHome text1={'Lịch trình của bạn'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
                        <View style={[AppStyle.StyleHome.marginLeft, { marginBottom: verticalScale(30) }]}>
                            <Schedule data={data} />
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PersonalPage;

