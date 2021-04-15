import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
const { height, width } = Dimensions.get('screen')
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
const ScheduleOverview = ({ navigation, route }) => {
    const filterMenu = useSelector(store => store.Suggestion.filterMenu)
    const StyleOverview = (statusname) => {
        if (statusname == filterMenu) return [styles.active, { backgroundColor: '#FF5F24' }]
        return [styles.active, { backgroundColor: '#EFEFEF' }]
    }
    const StyleTextOverview = (statusname) => {
        if (statusname == filterMenu) return [AppStyle.StyleScheduleOverview.textMenu, { color: 'white' }]
        return [AppStyle.StyleScheduleOverview.textMenu, { color: '#616161' }]
    }
    console.log('vinh', filterMenu)
    const dispatch = useDispatch()
    const onSchedule = () => {
        dispatch({ type: 'FILTERGOALONE' })
    }
    const onPlanes = () => {
        dispatch({ type: 'FILTERCOUPLE' })
    }
    const onHotel = () => {
        dispatch({ type: 'FILTERFAMILY' })
    }
    const onVisit = () => {
        dispatch({ type: 'FILTERTOUR' })
    }
    return (
        <ScrollView style={styles.scrollview} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
                onPress={() => onSchedule()}
                style={StyleOverview('GOALONE')}
            >
                <Text style={StyleTextOverview('GOALONE')}>Độc hành</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onPlanes()}
                style={StyleOverview('COUPLE')}
            >
                <Text style={StyleTextOverview('COUPLE')}>Cặp đôi</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onHotel()}
                style={StyleOverview('FAMILY')}
            >
                <Text style={StyleTextOverview('FAMILY')}>Gia đình</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onVisit()}
                style={StyleOverview('TOUR')}
            >
                <Text style={StyleTextOverview('TOUR')}>Tour</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default ScheduleOverview;
const styles = StyleSheet.create({
    active: {
        marginHorizontal: scale(6.2),
        height: scale(20),
        width: scale(70),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

    },
    scrollview:{
        marginHorizontal:scale(10),
        marginTop:scale(20)
    }
})