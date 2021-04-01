import React from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddButton from "../../components/AddButton";
import Search from "../../components/Search/Search";
import Cart from "../../components/Cart/Cart";
import Notification from "../../components/Notification/Notification";
import User from "../../components/User/User";
import Home from "../../components/Home/Home";
const Tab = createBottomTabNavigator()
const BottomTab = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false }}>
            <Tab.Screen
                options={{
                    tabBarIcon: () =>
                        <Image
                            source={require('../../img/Vector.png')}
                            style={{ width: 18, height: 18 }}
                        />
                }}
                name="Search"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () =>
                        <Image
                            source={require('../../img/Vertor1.png')}
                            style={{ width: 19, height: 18 }}
                        />
                }}
                name="Cart"
                component={Cart}
            />
            <Tab.Screen
                options={{ 
                    // tabBarButton :()=> null,
                    // tabBarVisible: false,
                    tabBarIcon: () => <AddButton /> }}
                name="Home" component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: () =>
                        <Image
                            source={require('../../img/Vector2.png')}
                            style={{ width: 16, height: 19 }}
                        />
                }}
                name="Notification"
                component={Notification}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: () =>
                        <Image
                            source={require('../../img/Vector3.png')}
                            style={{ width: 19, height: 18 }}
                        />
                }}
                name="User"
                component={User}
            />
        </Tab.Navigator>
    )
}
export default BottomTab;