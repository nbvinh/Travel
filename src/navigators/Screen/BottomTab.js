import Touch from "../../components/Touch";
import AddButton from "../../components/AddButton";
import Search from "../../components/Search/Search";
import MySchedule from "../../components/MySchedule/MySchedule";
import Notification from "../../components/Notification/Notification";
import Profile from "../../components/Profile/Profile";
import Home from "../../components/Home/Home";
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
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
                const label = route.name;
                const title = options.title
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
                        dispatch({ type: 'MODE1' })
                        navigation.navigate(route.name);
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
                            source={{ uri: isFocused ? title : label }}
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
            <Tab.Screen name="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/166512902_823611061832198_3630534522690177023_n.png?_nc_cat=100&ccb=1-3&_nc_sid=58c789&_nc_ohc=SVcfdRV49RIAX8DVT9r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a68421e2577c2c8a61129383a4a4a609&oe=608C64AC" component={Home}
                options={{ title: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/166651262_2946139718952881_1709129165697467887_n.png?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=C16uT9WPkq8AX8t9kyP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=7af37eed61b151e58863474aeb95cf58&oe=608CE35D' }}
            />
            <Tab.Screen name="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/165881518_1071745669986573_1066626200322223892_n.png?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=EnhppZ05qU4AX-obPXt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=3618181b2d0ffe4ad1a41b8afe1676f1&oe=608ED148" component={MySchedule}
                options={{ title: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/165945940_3997123257012959_9077640271211792558_n.png?_nc_cat=107&ccb=1-3&_nc_sid=58c789&_nc_ohc=SAtp8BcKuLsAX8CZH0g&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=70cb122fb5ebe32c5ced80b77050c58d&oe=608F8001' }}
            />
            <Tab.Screen name=" " component={Search} />
            < Tab.Screen name="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/167017015_557250808555013_9137485308532030877_n.png?_nc_cat=105&ccb=1-3&_nc_sid=58c789&_nc_ohc=seCKFm4tRN8AX9UmpUo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=fd6e4face03a3b08f47107ad10b56a1c&oe=608F0D91" component={Notification}
                options={{ title: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/167588358_1649352638598433_1992561845971364195_n.png?_nc_cat=102&ccb=1-3&_nc_sid=58c789&_nc_ohc=fVbZ_XTxwJIAX-_y5aX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=9861b0390c48d178bc6c76ba80ca9bca&oe=608C15DC' }}
            />
            < Tab.Screen name="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/166069118_137558148309589_9176252055582788907_n.png?_nc_cat=106&ccb=1-3&_nc_sid=58c789&_nc_ohc=yRvHRzVkuTAAX8eq6I_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a41c61c69f17bbc373d79eb901190e44&oe=608D0288" component={Profile}
                options={{ title: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/167628664_1183335815442745_3737342627869015062_n.png?_nc_cat=106&ccb=1-3&_nc_sid=58c789&_nc_ohc=WAfgEnRe_IsAX9uneOi&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=13ed2ef752cffa0cc2e7df64167fd33e&oe=608CF951' }}
            />
        </Tab.Navigator>
    );
}
