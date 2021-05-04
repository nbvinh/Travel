import Touch from "../../components/Touch";
import AddButton from "../../components/AddButton";
import Search from "../../components/Search/Search";
import MySchedule from "../../components/MySchedule/MySchedule";
import Notification from "../../components/Notification/Notification";
import Profile from "../../components/Profile/Profile";
import Home from "../../components/Home/Home";
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from "react-redux";
import { scale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')

function MyTabBar({ state, descriptors, navigation }) {
    const dispatch = useDispatch()
    return (
        <View style={{ flexDirection: 'row', height: scale(45), backgroundColor: 'white' }}>
            <View style={{ position: 'absolute', left: (width / 5) * 2, right: (width / 5) * 2, zIndex: 1, bottom: scale(20), alignItems: 'center' }}>
                <AddButton navigation={navigation} />
            </View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (index === 2) {
                        null
                    }
                    else {
                        // dispatch({ type: 'MODE1' })
                        navigation.navigate(route.name);
                        if (index === 0) {
                            dispatch({ type: 'STATUSBARTRUE' })
                        }
                        else {
                            dispatch({ type: 'STATUSBAR' })
                        }
                    }

                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <Image
                            source={
                                isFocused ?
                                    index === 0 ?
                                        require("../../img/icon7.png") : index === 1 ?
                                            require("../../img/icon8.png") : index === 3 ?
                                                require("../../img/icon5.png") : index === 4 ?
                                                    require("../../img/icon6.png") :
                                                    null :
                                    index === 0 ?
                                        require("../../img/icon1.png") : index === 1 ?
                                            require("../../img/icon4.png") : index === 3 ?
                                                require("../../img/icon3.png") : index === 4 ?
                                                    require("../../img/icon2.png") :
                                                    null

                            }
                            style={{
                                width: index === 3 ? scale(16) : index === 0 ? scale(18) : index === 1 ? scale(19.24) : scale(19),
                                height: index === 3 ? scale(19.07) : index === 0 ? scale(18) : index === 1 ? scale(17.46) : scale(19)
                            }}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="MySchedule" component={MySchedule} />
            <Tab.Screen name=" " component={Search} />
            < Tab.Screen name="Notification" component={Notification} />
            < Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
