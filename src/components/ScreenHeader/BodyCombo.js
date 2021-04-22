import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme";
import styles from "./styles";
import { TextHome, Hotel, Schedule } from "../Home/index";
import { useNavigation } from '@react-navigation/native';
const BodyCombo = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <TextHome text1={'Combo giá rẻ'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Schedule />
            </View>
            <TextHome text1={'Combo Huế'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Schedule />
            </View>
            <TextHome text1={'Combo Hà Giang'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Schedule />
            </View>
        </View>
    )
}
export default BodyCombo;