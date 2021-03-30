import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import ScreenFirst from "../../components/ScreenFirst/ScreenFirst";
import ScreenSecond from "../../components/ScreenSecond/ScreenSecond";

const Root = createStackNavigator();
const RootStack = () =>{
    return(
        <NavigationContainer >
            <Root.Navigator headerMode="none">
                <Root.Screen name="ScreenFirst" component={ScreenFirst} />
                <Root.Screen name="ScreenSecond" component={ScreenSecond} />
            </Root.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;