import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CareAll, ChoosePerson, ChooseRating, Combo, CreateSchedules, FindAroundHere, HotelDetails, HotelScreen, PopularPlaceDetails, PromotionDetails, Rating, Restaurant, ScheduleDetails, ScheduleOverview, Search, SearchRestaurant, SeeMoreDecemberDestination, SeeMoreExperience, SeeMoreHotel, SeeMorePopularPlace, SeeMorePromotions, SeeMoreSchedule, SeeSuggestion, Setting, Suggestion } from '../../../components';
import ExperienceDetails from '../../../components/Details/ExpericenceDetails';
import Maps from '../../../components/Details/PopularPlace/Maps';
import Home from '../../../components/Home/Home';
import Walkingschedule from '../../../components/Walkingschedule';
const Stack = createStackNavigator();
const HomeStack = () => {
    const Root = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'screen'} screenOptions={() => ({ gestureEnabled: false })}>
            <Root.Screen name="Home" component={Home} options={{ header: () => null }} />
            <Root.Screen name="SeeMorePromotions" component={SeeMorePromotions} />
            <Root.Screen name="PromotionDetails" component={PromotionDetails} options={{ header: () => null }} />
            <Root.Screen name="SeeMoreSchedule" component={SeeMoreSchedule} />
            <Root.Screen name="SeeMorePopularPlace" component={SeeMorePopularPlace} />
            <Root.Screen name="SeeMoreExperience" component={SeeMoreExperience} />
            <Root.Screen name="SeeMoreDecemberDestination" component={SeeMoreDecemberDestination} />
            <Root.Screen name="SeeMoreHotel" component={SeeMoreHotel} />
            <Root.Screen name="ScheduleDetails" component={ScheduleDetails} options={{ header: () => null }} />
            <Root.Screen name="PopularPlaceDetails" component={PopularPlaceDetails} options={{ header: () => null }} />
            <Root.Screen name="ScheduleOverview" component={ScheduleOverview} options={{ header: () => null }} />
            <Root.Screen name="Search" component={Search} options={{ header: () => null }} />
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
            <Root.Screen name="SearchRestaurant" component={SearchRestaurant} options={{ header: () => null }} />
            <Root.Screen name="HotelDetails" component={HotelDetails} options={{ header: () => null }} />
            <Root.Screen name="Walkingschedule" component={Walkingschedule} />
            <Root.Screen name="Maps" component={Maps} />
            <Root.Screen name="ExperienceDetails" component={ExperienceDetails} options={{ header: () => null }}/>
        </Stack.Navigator>
    );
}
export default HomeStack;
