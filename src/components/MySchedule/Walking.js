import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import Schedule from "../Schedule";
import { useSelector, useDispatch } from "react-redux";
import { verticalScale } from "react-native-size-matters";
const Walking = ({ navigation }) => {
    const data = useSelector(store => store.Schedule.Walking)
    return (
        <View>
            {
                data && data.map((item) => {
                    return (
                        <Schedule item={item} key={item.id} typeNavigation={'walking'} type={'add'} navigation={navigation} />
                    )
                })
            }
        </View>
    )
}
export default Walking;