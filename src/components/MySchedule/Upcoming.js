import React, { useState } from "react";
import { View, TextInput, Text, ScrollView } from "react-native";
import Schedule from "../Schedule";
import { useSelector, useDispatch } from "react-redux";
import { verticalScale } from "react-native-size-matters";
const Upcoming = ({ navigation }) => {
    const data = useSelector(store => store.MySchedule.data)
    return (
        <ScrollView>
            {
                data && data.map((item) => {
                    return (
                        <Schedule item={item} key={item.id} typeNavigation={'add'} type={'add'} navigation={navigation} />
                    )
                })
            }
        </ScrollView>
    )
}
export default Upcoming;