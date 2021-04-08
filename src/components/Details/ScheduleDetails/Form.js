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
        dispatch({ type: 'FILTEROK' })
    }
    const FilterName = useSelector(store => store.Schedule.FilterName)
    const StyleFilter = (filter) => {
        filter === FilterName ? { fontSize: scale(14), fontWeight: '400', color: '#FF2424' } : { fontSize: scale(14), fontWeight: '400', color: 'black' }
    }
    const getstyle = (statusname) => {
        if (statusname == FilterName) return [styles.text3, { color: '#FF2424' }]
        return [styles.text3, { color: 'black' }]
    }
    const Cancel =()=>{
        dispatch({ type: 'MODALSCHEDULE' })
        dispatch({type:'FILTERCANCEL'})
    }
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalSchedule}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.3)'} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'MODALSCHEDULE' })} />
                <View style={styles.content1}>
                    <View style={styles.content}>
                        <Text style={styles.text3}>Bạn có chắc muốn xóa địa điểm này không?</Text>
                    </View>
                    <View style={styles.content2}>
                        <TouchableOpacity style={styles.text1} onPress={() => Cancel() }>
                            <Text style={getstyle('CANCEL')}>Huỷ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.text2} onPress={() => onRemove()} >
                            <Text style={getstyle('OK')}>Xoá</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'MODALSCHEDULE' })}/>
            </View>
        </Modal>
    )
}
export default Form;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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