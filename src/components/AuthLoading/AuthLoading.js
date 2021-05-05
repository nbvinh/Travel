import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image, Animated, Dimensions, Easing } from "react-native";
const { width, height } = Dimensions.get('screen')
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
const AuthLoading = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        checkApp()
    }, [])
    async function checkApp() {
        let Token = await AsyncStorage.getItem('Token');
        if (Token === null) {
            navigation.navigate('ScreenSecond')
        }
        else {
            const jsonValue = await AsyncStorage.getItem('DATA')
            const data = jsonValue != null ? JSON.parse(jsonValue) : null;
            dispatch({ type: 'PROFILE', data: data })
            navigation.navigate('BottomTab')
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        </View>
    )
}
export default AuthLoading;