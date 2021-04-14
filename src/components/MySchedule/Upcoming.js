import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import Schedule from "../Schedule";
import { useSelector, useDispatch } from "react-redux";
import { verticalScale } from "react-native-size-matters";
const Upcoming = ({ navigation }) => {
    const data = useSelector(store => store.MySchedule.data)
    return (
        <View>
            {
                data && data.map((item) => {
                    return (
                        <Schedule item={item} key={item.id} typeNavigation={'add'} type={'add'} navigation={navigation} />
                    )
                })
            }
        </View>
    )
}
export default Upcoming;