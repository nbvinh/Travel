import React, { useState, useEffect } from "react";
import { View, Text, Modal, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
const { width, height } = Dimensions.get('screen')
const Form = (props) => {
    const modalSchedule = useSelector(store => store.Schedule.modalSchedule)
    const imgId = useSelector(store => store.Schedule.imgId)
    const dataheader = useSelector(store => store.Schedule.data)
    const additem = useSelector(store => store.Schedule.additem)
    const dispatch = useDispatch()
    const onRemove = () => {
        dispatch({ type: 'REMOVE', ScheduleItem: additem })
        dispatch({ type: 'MODALSCHEDULE' })
        console.log(ScheduleItem)
    }
    useEffect(() => {
        console.log(ScheduleItem)
    }, [ScheduleItem])
    const ScheduleItem = useSelector(store => store.Schedule.ScheduleItem)
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalSchedule}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.7)'} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'MODALSCHEDULE' })} />
                <View style={styles.content1}>
                    <View style={styles.content}>
                        <Text style={styles.text3}>Bạn có chắc muốn xóa địa điểm này không?</Text>
                    </View>
                    <View style={styles.content2}>
                        <TouchableOpacity style={styles.text1} onPress={() => dispatch({ type: 'MODALSCHEDULE' })}>
                            <Text style={styles.text3}>Huỷ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.text2} onPress={() => onRemove()} >
                            <Text style={styles.text3}>Xoá</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.tou1} />
            </View>
        </Modal>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%'
    },
    content1: {
        backgroundColor: 'white',
        width: scale(300),
        height: scale(135),
        borderRadius: scale(5),
    },
    content2: {
        height: '30%',
        borderTopWidth: 0.3,
        flexDirection: 'row',

    },
    text1: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.3
    },
    text2: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text3: {
        fontSize: scale(14),
        fontWeight: '400'
    },
    tou1: {
        height: scale(height) - scale(135),
        width: '100%',
    }
})