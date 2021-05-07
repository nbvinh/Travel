import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Notification from '../../../components/Notification/Notification';
const Stack = createStackNavigator();
const NotificationStack = () => {
    return (
        <Stack.Navigator headerMode={'screen'} screenOptions={() => ({ gestureEnabled: false })}>
             <Stack.Screen name="Notification" component={Notification} options={{ header: () => null }}/>
        </Stack.Navigator>
    );
}
export default NotificationStack;
