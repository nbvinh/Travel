import React, { useState } from "react";
import { View, TextInput, ScrollView } from "react-native";
import Schedule from "../Schedule";
import { useSelector, useDispatch } from "react-redux";
import { verticalScale } from "react-native-size-matters";
const Walking = ({ navigation }) => {
    const data = useSelector(store => store.Schedule.Walking)
    return (
        <ScrollView>
            {
                data && data.map((item) => {
                    return (
                        <Schedule item={item} key={item.id} typeNavigation={'walking'} type={'add'} navigation={navigation} />
                    )
                })
            }
        </ScrollView>
    )
}
export default Walking;