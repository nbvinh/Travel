import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScreenFirst, ScreenOTP, ScreenSecond, ScreenUpdateProfile } from '../../../components';
import AuthLoading from '../../../components/AuthLoading/AuthLoading';
const Stack = createStackNavigator();
const AuthStack = () => {
    const Root = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'screen'} screenOptions={() => ({ gestureEnabled: false })}>
            <Root.Screen name="ScreenFirst" component={ScreenFirst} options={{ header: () => null }} options={{ header: () => null }} />
            <Root.Screen name="AuthLoading" component={AuthLoading} options={{ header: () => null }} options={{ header: () => null }} />
            <Root.Screen name="ScreenSecond" component={ScreenSecond} options={{ header: () => null }} options={{ header: () => null }} />
            <Root.Screen name="ScreenOTP" component={ScreenOTP} options={{ header: () => null }} options={{ header: () => null }} />
            <Root.Screen name="ScreenUpdateProfile" component={ScreenUpdateProfile} options={{ header: () => null }} options={{ header: () => null }} />
        </Stack.Navigator>
    );
}
export default AuthStack;
