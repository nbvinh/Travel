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
const { height, width } = Dimensions.get('screen')
const PersonalPage = ({ navigation }) => {
    const user = useSelector(store => store.people.user)
    const dataItem = useSelector(store => store.people.dataItem)
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
                                    source={require('../../../img/vinh2.png')}
                                    style={AppStyle.StylePersonalPage.img1}
                                />
                                {user && user.map((item) =>
                                    <Text key={item.id.toString()} style={AppStyle.StylePersonalPage.name}>{item.lastname} {item.fisrtname}</Text>
                                )}
                            </View>
                            <View style={AppStyle.StylePersonalPage.body}>
                                <View style={AppStyle.StylePersonalPage.follow}>
                                    <Text />
                                    <View>
                                        <Text style={AppStyle.StylePersonalPage.text1}>100</Text>
                                        <Text style={AppStyle.StylePersonalPage.text2}>Người theo dõi</Text>
                                    </View>
                                    <View >
                                        <Text style={AppStyle.StylePersonalPage.text1}>200</Text>
                                        <Text style={AppStyle.StylePersonalPage.text2}>Đang theo dõi</Text>
                                    </View>
                                    <Text />
                                </View>
                                <View style={AppStyle.StylePersonalPage.Edit}>
                                    <Text style={AppStyle.StylePersonalPage.text3}>Sửa thông tin cá nhân</Text>
                                </View>
                            </View>
                        </View>
                        <Review />
                        <TextHome text1={'Xem ảnh'} text2={'Xem thêm >'} />
                        <SeeIMG />
                        <TextHome text1={'Lịch trình của bạn'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
                        <View style={[AppStyle.StyleHome.marginLeft,{marginBottom:verticalScale(30)}]}>
                            <Schedule />
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PersonalPage;

