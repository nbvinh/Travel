import { useHeaderHeight } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import ImageHeader from "../ImageHeader";
import FormReview from "./FormReview";
import Item from "./Item";
const Profile = ({ navigation }) => {
    const user = useSelector(store => store.people.user)
    const dispatch = useDispatch()
    const onScreen = (item) => {
        item.id === 4 ?
            navigation.navigate("ProfileStack", { screen: 'Setting' })
            :
            item.id === 3 ?
                dispatch({ type: 'MODALREVIEW' })
                :
                item.id === 2 ?
                    navigation.navigate("ProfileStack", { screen: 'Heart' })
                    :
                    item.id === 1 ?
                        navigation.navigate("HomeStack", { screen: 'SeeMorePromotions' })
                        :
                        navigation.navigate("HomeStack", { screen: 'Walkingschedule' })
    }
    const dataItem = useSelector(store => store.people.dataItem)
    const headerHeight = useHeaderHeight();
    console.log(headerHeight)
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Thông tin cá nhân"}
            />
        ),
    });
    return (
        <ScrollView style={[AppStyle.StyleHome.scrollview, { backgroundColor: '#E5E5E5' }]}>
            <TouchableOpacity style={AppStyle.StyleProfile.avatar} onPress={() => navigation.navigate("ProfileStack", { screen: 'PersonalPage' })}>
                <Image
                    source={{ uri: user.avatar }}
                    style={AppStyle.StyleProfile.imgAvatar}
                />
                <Text style={AppStyle.StyleProfile.name}>{user.lastname} {user.fisrtname}</Text>
            </TouchableOpacity>
            <View style={AppStyle.StyleProfile.content}>
                {dataItem && dataItem.map((item) => <Item key={item.id.toString()} item={item} onScreen={() => onScreen(item)} />)}
            </View>
            <FormReview />
        </ScrollView>
    )
}
export default Profile;

