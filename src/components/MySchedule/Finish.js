import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import Schedule from "../Schedule";
import { useSelector, useDispatch } from "react-redux";
import { verticalScale } from "react-native-size-matters";
const Finish = ({ navigation }) => {
    const data = useSelector(store => store.MySchedule.finish)
    return (
        <View style={{ backgroundColor: '#E5E5E5' }}>
            {
                data && data.map((item) => {
                    return (
                        <Schedule item={item} key={item.id} typeNavigation={'finish'} type={'add'} navigation={navigation} />
                    )
                })
            }
        </View>
    )
}
export default Finish;