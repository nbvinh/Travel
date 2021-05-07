import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CareAll, ChoosePerson, ChooseRating, Combo, CreateSchedules, FindAroundHere, HotelDetails, HotelScreen, PopularPlaceDetails, PromotionDetails, Rating, Restaurant, ScheduleDetails, ScheduleOverview, Search, SearchRestaurant, SeeMoreDecemberDestination, SeeMoreExperience, SeeMoreHotel, SeeMorePopularPlace, SeeMorePromotions, SeeMoreSchedule, SeeSuggestion, Setting, Suggestion } from '../../../components';
import Maps from '../../../components/Details/PopularPlace/Maps';
import Home from '../../../components/Home/Home';
import Walkingschedule from '../../../components/Walkingschedule';
const Stack = createStackNavigator();
const HomeStack = () => {
    const Root = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'screen'} screenOptions={() => ({ gestureEnabled: false })}>
            <Root.Screen name="Home" component={Home} options={{ header: () => null }}/>
            <Root.Screen name="SeeMorePromotions" component={SeeMorePromotions} options={{ header: () => null }}  />
            <Root.Screen name="PromotionDetails" component={PromotionDetails} options={{ header: () => null }} />
            <Root.Screen name="SeeMoreSchedule" component={SeeMoreSchedule} options={{ header: () => null }} />
            <Root.Screen name="SeeMorePopularPlace" component={SeeMorePopularPlace} options={{ header: () => null }}  />
            <Root.Screen name="SeeMoreExperience" component={SeeMoreExperience} options={{ header: () => null }} />
            <Root.Screen name="SeeMoreDecemberDestination" component={SeeMoreDecemberDestination} options={{ header: () => null }}  />
            <Root.Screen name="SeeMoreHotel" component={SeeMoreHotel} options={{ header: () => null }}  />
            <Root.Screen name="ScheduleDetails" component={ScheduleDetails} options={{ header: () => null }}  />
            <Root.Screen name="PopularPlaceDetails" component={PopularPlaceDetails} options={{ header: () => null }}  />
            <Root.Screen name="ScheduleOverview" component={ScheduleOverview} options={{ header: () => null }} />
            <Root.Screen name="Search" component={Search} options={{ header: () => null }} />
            <Root.Screen name="Suggestion" component={Suggestion} options={{ header: () => null }} />
            <Root.Screen name="CareAll" component={CareAll} options={{ header: () => null }} />
            <Root.Screen name="ChoosePerson" component={ChoosePerson} options={{ header: () => null }} />
            <Root.Screen name="SeeSuggestion" component={SeeSuggestion} options={{ header: () => null }} />
            <Root.Screen name="CreateSchedules" component={CreateSchedules} options={{ header: () => null }} />
            <Root.Screen name="FindAroundHere" component={FindAroundHere} options={{ header: () => null }} />
            <Root.Screen name="ChooseRating" component={ChooseRating} options={{ header: () => null }} />
            <Root.Screen name="Rating" component={Rating} options={{ header: () => null }} />
            <Root.Screen name="HotelScreen" component={HotelScreen} options={{ header: () => null }} />
            <Root.Screen name="Restaurant" component={Restaurant} options={{ header: () => null }} />
            <Root.Screen name="Combo" component={Combo} options={{ header: () => null }} />
            <Root.Screen name="SearchRestaurant" component={SearchRestaurant} options={{ header: () => null }} />
            <Root.Screen name="HotelDetails" component={HotelDetails} options={{ header: () => null }} />
            <Root.Screen name="Walkingschedule" component={Walkingschedule} options={{ header: () => null }} />
            <Root.Screen name="Maps" component={Maps} options={{ header: () => null }} />
        </Stack.Navigator>
    );
}
export default HomeStack;
