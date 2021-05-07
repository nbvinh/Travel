import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppStyle from "../theme/index";
const Follow = (props) => {
    const quantity = props.quantity
    const text = props.text
    const type = props.type
    const navigation = props.navigation
    const onChangeFollow = () => {
        type === 'follow' ? navigation.navigate("ProfileStack", { screen:'FollowScreen'}) : navigation.navigate("ProfileStack", { screen:'FollowingScreen'})
    }
    return (
        <TouchableOpacity onPress={() => onChangeFollow()}>
            <Text style={AppStyle.StylePersonalPage.text1}>{quantity}</Text>
            <Text style={AppStyle.StylePersonalPage.text2}>{text}</Text>
        </TouchableOpacity>
    )
}
export default Follow;