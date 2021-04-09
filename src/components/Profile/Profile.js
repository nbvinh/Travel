import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import HeaderBottomTab from "../HeaderBottomTab";
import Item from "./Item";
const { height, width } = Dimensions.get('screen')
const Profile = ({ navigation }) => {
    const user = useSelector(store => store.people.user)
    const onScreen = (item) => {
        item.id === 4 ? navigation.navigate('Setting') : null
    }
    const dataItem = useSelector(store => store.people.dataItem)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <HeaderBottomTab text={'Thông tin cá nhân'} />
                <View style={AppStyle.StyleProfile.body}>
                    <ScrollView style={AppStyle.StyleHome.scrollview}>
                        <TouchableOpacity style={AppStyle.StyleProfile.avatar} onPress={()=>navigation.navigate('PersonalPage')}>
                            <Image
                                source={require('../../img/vinh2.png')}
                                style={AppStyle.StyleProfile.imgAvatar}
                            />
                            {user && user.map((item) => {
                                return (
                                    <Text key={item.id.toString()} style={AppStyle.StyleProfile.name}>{item.lastname} {item.fisrtname}</Text>
                                )
                            })}
                        </TouchableOpacity>
                        <View style={AppStyle.StyleProfile.content}>
                            {dataItem && dataItem.map((item) => <Item key={item.id.toString()} item={item} onScreen={() => onScreen(item)} />)}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile;

