import React, { useEffect } from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import ScreenFirst from "../../components/ScreenFirst/ScreenFirst";
import ScreenSecond from "../../components/ScreenSecond/ScreenSecond";
import ScreenOTP from "../../components/SreenOTP/ScreenOTP";
import ScreenUpdateProfile from "../../components/ScreenUpdateProfile/ScreenUpdateProfile";
import BottomTab from "../../navigators/Screen/BottomTab";
import SeeMorePromotions from "../../components/SeeMore/SeeMorePromotions";
import PromotionDetails from "../../components/Details/PromotionDetails";
import SeeMoreSchedule from "../../components/SeeMore/SeeMoreSchedule";
import SeeMorePopularPlace from "../../components/SeeMore/SeeMorePopularPlace";
import SeeMoreExperience from "../../components/SeeMore/SeeMoreExperience";
import SeeMoreDecemberDestination from "../../components/SeeMore/SeeMoreDecemberDestination";
import SeeMoreHotel from "../../components/SeeMore/SeeMoreHotel";
import ScheduleDetails from "../../components/Details/ScheduleDetails/ScheduleDetails";
import PopularPlaceDetails from "../../components/Details/PopularPlace/PopularPlaceDetails";
import ScheduleOverview from "../../components/Details/ScheduleDetails/ScheduleOverview/ScheduleOverview";
import Setting from "../../components/Profile/Setting/Setting";
import PrivacyPolicy from "../../components/Profile/Setting/PrivacyPolicy";
import TermsOfUse from "../../components/Profile/Setting/TermsOfUse";
import PersonalPage from "../../components/Profile/PersonalPage/PersonalPage";
import Heart from "../../components/Profile/Heart/Heart";
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
            </Root.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;