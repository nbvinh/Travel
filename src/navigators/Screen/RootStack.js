import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import ScreenFirst from "../../components/ScreenFirst/ScreenFirst";
import ScreenSecond from "../../components/ScreenSecond/ScreenSecond";
import ScreenOTP from "../../components/SreenOTP/ScreenOTP";
import ScreenUpdateProfile from "../../components/ScreenUpdateProfile/ScreenUpdateProfile";
import BottomTab from "../../navigators/Screen/BottomTab";
import SeeMorePromotions from "../../components/SeeMore/SeeMorePromotions";
const Root = createStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer >
            <Root.Navigator headerMode="none">
                <Root.Screen name="BottomTab" component={BottomTab} />
                <Root.Screen name="ScreenFirst" component={ScreenFirst} />
                <Root.Screen name="ScreenSecond" component={ScreenSecond} />
                <Root.Screen name="ScreenOTP" component={ScreenOTP} />
                <Root.Screen name="ScreenUpdateProfile" component={ScreenUpdateProfile} />
                <Root.Screen name="SeeMorePromotions" component={SeeMorePromotions} />
            </Root.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;