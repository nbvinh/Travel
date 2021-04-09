import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import Header from "../../Header";
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
                            <View style={AppStyle.StylePersonalPage.follow}>
                                <View style={{flex:1}}>
                                    <Text style={AppStyle.StylePersonalPage.text1}>100</Text>
                                    <Text style={AppStyle.StylePersonalPage.text2}>Người theo dõi</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={AppStyle.StylePersonalPage.text1}>200</Text>
                                    <Text style={AppStyle.StylePersonalPage.text2}>Đang theo dõi</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default PersonalPage;

