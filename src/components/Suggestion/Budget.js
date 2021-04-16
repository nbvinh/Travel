import React, { useState, useEffect, useRef } from "react";
import { View, Text, Modal, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, TextInput } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
const Budget = (props) => {
    const ChooseBudget = useSelector(store => store.Suggestion.ChooseBudget)
    const DataBudget = useSelector(store => store.Suggestion.DataBudget)
    const [price, setPrice] = useState('')
    const ref = useRef()
    const onOK = () => {
        dispatch({ type: "PRICE", price: price })
        dispatch({ type: 'CHOOSEBUDGET' })
        ref.current.clear()
    }
    const onActive = (item) => {
        dispatch({ type: "PRICE", price: item })
        dispatch({ type: 'CHOOSEBUDGET' })
    }
    const dispatch = useDispatch()
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={ChooseBudget}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.7)'} />
            <View style={styles.container3}>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'CHOOSEBUDGET' })} />
                <View style={styles.content3}>
                    <View style={styles.body3}>
                        <Text style={styles.budget}>Chọn ngân sách (/người)</Text>
                        {DataBudget && DataBudget.map((item) => {
                            return (
                                <Text onPress={() => onActive(item.price1)} key={item.id} style={styles.price}>{item.price1}</Text>
                            )
                        })}
                        <TextInput
                            ref={ref}
                            style={styles.addprice}
                            onChangeText={(val) => setPrice(val)}
                            keyboardType='numeric'
                            placeholder={'Tuỳ chọn khác'}
                            placeholderTextColor={'#333333'}
                        />
                    </View>
                    <View style={styles.footer3}>
                        <Text onPress={() => dispatch({ type: 'CHOOSEBUDGET' })} style={styles.cancel}>CANCEL</Text>
                        <Text onPress={() => onOK()} style={styles.OK}>OK</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'CHOOSEBUDGET' })} />
            </View>
        </Modal >
    )
}
export default Budget;