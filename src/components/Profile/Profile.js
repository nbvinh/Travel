import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import HeaderBottomTab from "../HeaderBottomTab";
import FormReview from "./FormReview";
import Heart from "./Heart/Heart";
import Item from "./Item";
const { height, width } = Dimensions.get('screen')
const Profile = ({ navigation }) => {
    const user = useSelector(store => store.people.user)
    const dispatch = useDispatch()
    const onScreen = (item) => {
        item.id === 4 ?
            navigation.navigate('Setting')
            :
            item.id === 3 ?
                dispatch({ type: 'MODALREVIEW' })
                :
                item.id === 2 ?
                    navigation.navigate('Heart')
                    :
                    item.id === 1 ?
                        navigation.navigate('SeeMorePromotions')
                        :
                        null
    }
    const dataItem = useSelector(store => store.people.dataItem)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <HeaderBottomTab text={'Thông tin cá nhân'} />
                <View style={AppStyle.StyleProfile.body}>
                    <ScrollView style={AppStyle.StyleHome.scrollview}>
                        {user && user.map((item) => {
                            return (
                                <TouchableOpacity key={item.id.toString()} style={AppStyle.StyleProfile.avatar} onPress={() => navigation.navigate('PersonalPage')}>
                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={AppStyle.StyleProfile.imgAvatar}
                                    />
                                    <Text style={AppStyle.StyleProfile.name}>{item.lastname} {item.fisrtname}</Text>
                                </TouchableOpacity>
                            )
                        })}
                        <View style={AppStyle.StyleProfile.content}>
                            {dataItem && dataItem.map((item) => <Item key={item.id.toString()} item={item} onScreen={() => onScreen(item)} />)}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <FormReview />
        </SafeAreaView>
    )
}
export default Profile;

