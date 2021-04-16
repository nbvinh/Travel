import React, { useState, useEffect } from "react";
import { View, Text, Modal, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
const { width, height } = Dimensions.get('screen')
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
const Time = (props) => {
    const ChooseTime = useSelector(store => store.Suggestion.ChooseTime);
    const dispatch = useDispatch();
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null)
    const onDatechange = (date, type) => {
        if (type === 'END_DATE') {
            setSelectedEndDate(date)
        } else {
            setSelectedStartDate(date)
            setSelectedEndDate(null)
        }
    }
    const minDate = new Date(); // Today
    const maxDate = new Date(2070, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const start = moment(startDate).format('D/M/YYYY')
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    const end = moment(endDate).format('D/M/YYYY')
    const onOK = () => {
        dispatch({ type: 'CHOOSETIME' })
        end !== 'Invalid date' && start !== 'Invalid date' ?
            dispatch({ type: 'START', start: start }) &&
            dispatch({ type: 'END', end: end })
            : null
    }
    const customDayHeaderStylesCallback = ({ dayOfWeek, month, year }) => {
        switch (dayOfWeek) { // can also evaluate month, year
            case 1:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 2:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 3:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 4:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 5:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 7:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 6: // Thursday
                return {
                    textStyle: {
                        color: '#F8530D',
                    }
                };
        }
    }
    const customDatesStylesCallback = date => {
        switch (date.isoWeekday()) {

            case 6:
                return {
                    textStyle: {
                        color: '#F8530D'
                    }
                }
            case 5: // Thursday
                return {
                    textStyle: {
                        color: '#F8530D',
                    }
                };
        }
    }
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={ChooseTime}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.7)'} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'CHOOSETIME' })} />
                <View style={styles.content1}>
                    <Text style={styles.text1} />
                    <CalendarPicker
                        todayBackgroundColor="#E5E5E5"
                        selectedDayTextColor="#FFFFFF"
                        selectedRangeStartStyle={{ backgroundColor: '#F8530D', width: scale(26), height: scale(26), borderRadius: scale(18) }}
                        selectedRangeEndStyle={{ backgroundColor: '#F8530D', width: scale(26), height: scale(26), borderRadius: scale(18), justifyContent: 'center', alignItems: 'center' }}
                        selectedRangeStyle={{ backgroundColor: '#FFB498' }}
                        previousTitle='<'
                        nextTitle='>'
                        allowRangeSelection={true}
                        todayTextStyle={{
                            color: 'white',
                        }}
                        dayLabelsWrapper={{
                            borderWidth: 0,
                            borderColor: 'white'
                        }}
                        customDayHeaderStyles={customDayHeaderStylesCallback}
                        customDatesStyles={customDatesStylesCallback}
                        months={[
                            'Tháng 1',
                            'Tháng 2',
                            'Tháng 3',
                            'Tháng 4',
                            'Tháng 5',
                            'Tháng 6',
                            'Tháng 7',
                            'Tháng 8',
                            'Tháng 9',
                            'Tháng 10',
                            'Tháng 11',
                            'Tháng 12',
                        ]}
                        weekdays={
                            [
                                'Th 2',
                                'Th 3',
                                'Th 4',
                                'Th 5',
                                'Th 6',
                                'Th 7',
                                'CN'
                            ]}
                        nextTitleStyle={{ color: 'black', fontSize: scale(18) }}
                        previousTitleStyle={{ color: 'black', fontSize: scale(18) }}
                        textStyle={{ fontSize: scale(14), color: 'black' }}
                        onDateChange={onDatechange}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                    <Text style={styles.text2} onPress={() => onOK()}>OK</Text>
                </View>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'CHOOSETIME' })} />
            </View>
        </Modal>
    )
}
export default Time;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content1: {
        backgroundColor: 'white',
        width: scale(343),
        height: scale(400),
        borderRadius: scale(10),
    },
    text1: {
        marginTop: scale(10)
    },
    text2: {
        position: 'absolute',
        bottom: scale(40),
        right: scale(40),
        fontSize: scale(14),
        fontWeight: '700',
        color: '#FF5F24'

    },
    tou1: {
        height: scale(height) - scale(468),
        width: '100%',
    }
})