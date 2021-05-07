import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { EditProfile, FollowingScreen, FollowScreen, Heart, PersonalPage, PrivacyPolicy, Setting, TermsOfUse } from '../../../components';
import Profile from '../../../components/Profile/Profile';
const Stack = createStackNavigator();
const ProfileStack = () => {
    const Root = createStackNavigator();
    return (
        <Stack.Navigator headerMode={'screen'} screenOptions={() => ({ gestureEnabled: false })}>
            <Root.Screen name="Profile" component={Profile} />
            <Root.Screen name="Heart" component={Heart} />
            <Root.Screen name="PersonalPage" component={PersonalPage} />
            <Root.Screen name="EditProfile" component={EditProfile} />
            <Root.Screen name="FollowScreen" component={FollowScreen} />
            <Root.Screen name="FollowingScreen" component={FollowingScreen} />
            <Root.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
            <Root.Screen name="TermsOfUse" component={TermsOfUse} />
            <Root.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
    );
}
export default ProfileStack;
