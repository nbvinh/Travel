import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  MySchedule  from "../../../components/MySchedule/MySchedule";
const Stack = createStackNavigator();
const MyScheduleStack = () => {
    const Root = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'screen'} screenOptions={() => ({ gestureEnabled: false })}>
             <Root.Screen name="MySchedule" component={MySchedule} />
        </Stack.Navigator>
    );
}
export default MyScheduleStack;
