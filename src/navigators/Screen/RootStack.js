
import React, { useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Stack/AuthStack";
import MainTab from "./BottomTab";
const Stack = createStackNavigator();
const RootStack = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator headerMode={"none"} screenOptions={() => ({ gestureEnabled: false })}>
                <Stack.Screen name="AuthStack" component={AuthStack} options={{ gestureEnabled: false }} />
                <Stack.Screen name="MainTab" component={MainTab} options={{ gestureEnabled: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;