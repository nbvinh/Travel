import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import {
    ScreenFirst, ScreenSecond, ScreenOTP, Suggestion, CareAll, FindAroundHere, CreateSchedules,
    ChoosePerson, SeeMoreDecemberDestination, TermsOfUse, PersonalPage, Heart, FollowScreen, FollowingScreen,
    EditProfile, Search, SeeSuggestion, PrivacyPolicy, Setting, ScheduleDetails, PopularPlaceDetails, ScheduleOverview,
    SeeMoreHotel, SeeMoreExperience, SeeMorePopularPlace, SeeMoreSchedule, PromotionDetails,
    SeeMorePromotions, BottomTab, ScreenUpdateProfile, ChooseRating, Rating, HotelScreen, Restaurant, Combo
} from "../../components/index";
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
                <Root.Screen name="PromotionDetails" component={PromotionDetails} />
                <Root.Screen name="SeeMoreSchedule" component={SeeMoreSchedule} />
                <Root.Screen name="SeeMorePopularPlace" component={SeeMorePopularPlace} />
                <Root.Screen name="SeeMoreExperience" component={SeeMoreExperience} />
                <Root.Screen name="SeeMoreDecemberDestination" component={SeeMoreDecemberDestination} />
                <Root.Screen name="SeeMoreHotel" component={SeeMoreHotel} />
                <Root.Screen name="ScheduleDetails" component={ScheduleDetails} />
                <Root.Screen name="PopularPlaceDetails" component={PopularPlaceDetails} />
                <Root.Screen name="ScheduleOverview" component={ScheduleOverview} />
                <Root.Screen name="Setting" component={Setting} />
                <Root.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
                <Root.Screen name="TermsOfUse" component={TermsOfUse} />
                <Root.Screen name="PersonalPage" component={PersonalPage} />
                <Root.Screen name="Heart" component={Heart} />
                <Root.Screen name="FollowScreen" component={FollowScreen} />
                <Root.Screen name="FollowingScreen" component={FollowingScreen} />
                <Root.Screen name="EditProfile" component={EditProfile} />
                <Root.Screen name="Search" component={Search} />
                <Root.Screen name="Suggestion" component={Suggestion} />
                <Root.Screen name="CareAll" component={CareAll} />
                <Root.Screen name="ChoosePerson" component={ChoosePerson} />
                <Root.Screen name="SeeSuggestion" component={SeeSuggestion} />
                <Root.Screen name="CreateSchedules" component={CreateSchedules} />
                <Root.Screen name="FindAroundHere" component={FindAroundHere} />
                <Root.Screen name="ChooseRating" component={ChooseRating} />
                <Root.Screen name="Rating" component={Rating} />
                <Root.Screen name="HotelScreen" component={HotelScreen} />
                <Root.Screen name="Restaurant" component={Restaurant} />
                <Root.Screen name="Combo" component={Combo} />
            </Root.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;