// import React, { useEffect } from "react";
// import { View, Text } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack'
// import { NavigationContainer } from "@react-navigation/native";
// import {
//     ScreenFirst, ScreenSecond, ScreenOTP, Suggestion, CareAll, FindAroundHere, CreateSchedules,
//     ChoosePerson, SeeMoreDecemberDestination, TermsOfUse, PersonalPage, Heart, FollowScreen, FollowingScreen,
//     EditProfile, Search, SeeSuggestion, PrivacyPolicy, Setting, ScheduleDetails, PopularPlaceDetails, ScheduleOverview,
//     SeeMoreHotel, SeeMoreExperience, SeeMorePopularPlace, SeeMoreSchedule, PromotionDetails,
//     SeeMorePromotions, BottomTab, ScreenUpdateProfile, ChooseRating, Rating, HotelScreen, Restaurant, Combo, SearchRestaurant, HotelDetails
// } from "../../components/index";
// import Walkingschedule from "../../components/Walkingschedule";
// import AuthLoading from "../../components/AuthLoading/AuthLoading";
// import Maps from "../../components/Details/PopularPlace/Maps";
// const Root = createStackNavigator();
// const RootStack = () => {
//     return (
//         <NavigationContainer >
//             {/* <Root.Navigator headerMode="none"> */}
//             <Root.Navigator>
//                 <Root.Screen name="ScreenFirst" component={ScreenFirst} options={{ header: () => null }} />
//                 <Root.Screen name="AuthLoading" component={AuthLoading} options={{ header: () => null }} />
//                 <Root.Screen name="BottomTab" component={BottomTab} options={{ header: () => null }} />
//                 <Root.Screen name="ScreenSecond" component={ScreenSecond} options={{ header: () => null }} />
//                 <Root.Screen name="ScreenOTP" component={ScreenOTP} options={{ header: () => null }} />
//                 <Root.Screen name="ScreenUpdateProfile" component={ScreenUpdateProfile} options={{ header: () => null }} />
//                 <Root.Screen name="SeeMorePromotions" component={SeeMorePromotions} options={{ header: () => null }} />
//                 <Root.Screen name="PromotionDetails" component={PromotionDetails} options={{ header: () => null }} />
//                 <Root.Screen name="SeeMoreSchedule" component={SeeMoreSchedule} options={{ header: () => null }} />
//                 <Root.Screen name="SeeMorePopularPlace" component={SeeMorePopularPlace} options={{ header: () => null }} />
//                 <Root.Screen name="SeeMoreExperience" component={SeeMoreExperience} options={{ header: () => null }} />
//                 <Root.Screen name="SeeMoreDecemberDestination" component={SeeMoreDecemberDestination} options={{ header: () => null }} />
//                 <Root.Screen name="SeeMoreHotel" component={SeeMoreHotel} options={{ header: () => null }} />
//                 <Root.Screen name="ScheduleDetails" component={ScheduleDetails} options={{ header: () => null }} />
//                 <Root.Screen name="PopularPlaceDetails" component={PopularPlaceDetails} options={{ header: () => null }} />
//                 <Root.Screen name="ScheduleOverview" component={ScheduleOverview} options={{ header: () => null }} />
//                 <Root.Screen name="Setting" component={Setting} options={{ header: () => null }} />
//                 <Root.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
//                 <Root.Screen name="TermsOfUse" component={TermsOfUse} />
//                 <Root.Screen name="PersonalPage" component={PersonalPage} />
//                 <Root.Screen name="Heart" component={Heart} />
//                 <Root.Screen name="FollowScreen" component={FollowScreen} />
//                 <Root.Screen name="FollowingScreen" component={FollowingScreen} />
//                 <Root.Screen name="EditProfile" component={EditProfile} />
//                 <Root.Screen name="Search" component={Search} options={{ header: () => null }} />
//                 <Root.Screen name="Suggestion" component={Suggestion} options={{ header: () => null }} />
//                 <Root.Screen name="CareAll" component={CareAll} options={{ header: () => null }} />
//                 <Root.Screen name="ChoosePerson" component={ChoosePerson} options={{ header: () => null }} />
//                 <Root.Screen name="SeeSuggestion" component={SeeSuggestion} options={{ header: () => null }} />
//                 <Root.Screen name="CreateSchedules" component={CreateSchedules} options={{ header: () => null }} />
//                 <Root.Screen name="FindAroundHere" component={FindAroundHere} options={{ header: () => null }} />
//                 <Root.Screen name="ChooseRating" component={ChooseRating} options={{ header: () => null }} />
//                 <Root.Screen name="Rating" component={Rating} options={{ header: () => null }} />
//                 <Root.Screen name="HotelScreen" component={HotelScreen} options={{ header: () => null }} />
//                 <Root.Screen name="Restaurant" component={Restaurant} options={{ header: () => null }} />
//                 <Root.Screen name="Combo" component={Combo} options={{ header: () => null }} />
//                 <Root.Screen name="SearchRestaurant" component={SearchRestaurant} options={{ header: () => null }} />
//                 <Root.Screen name="HotelDetails" component={HotelDetails} options={{ header: () => null }} />
//                 <Root.Screen name="Walkingschedule" component={Walkingschedule} options={{ header: () => null }} />
//                 <Root.Screen name="Maps" component={Maps} options={{ header: () => null }} />
//             </Root.Navigator>
//         </NavigationContainer>
//     )
// }
// export default RootStack;




import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import {
    ScreenFirst, ScreenSecond, ScreenOTP, Suggestion, CareAll, FindAroundHere, CreateSchedules,
    ChoosePerson, SeeMoreDecemberDestination, TermsOfUse, PersonalPage, Heart, FollowScreen, FollowingScreen,
    EditProfile, Search, SeeSuggestion, PrivacyPolicy, Setting, ScheduleDetails, PopularPlaceDetails, ScheduleOverview,
    SeeMoreHotel, SeeMoreExperience, SeeMorePopularPlace, SeeMoreSchedule, PromotionDetails,
    SeeMorePromotions, BottomTab, ScreenUpdateProfile, ChooseRating, Rating, HotelScreen, Restaurant, Combo, SearchRestaurant, HotelDetails
} from "../../components/index";
import Walkingschedule from "../../components/Walkingschedule";
import AuthLoading from "../../components/AuthLoading/AuthLoading";
import Maps from "../../components/Details/PopularPlace/Maps";
import HomeStack from "./Stack/HomeStack";
import ProfileStack from "./Stack/ProfileStack";
import MyScheduleStack from "./Stack/MyScheduleStack";
import NotificationStack from "./Stack/NotificationStack";
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