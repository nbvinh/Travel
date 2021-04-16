import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../Header";
import styles from "./styles";
const ChoosePerson = ({ navigation }) => {
    const DataPerson = useSelector(store => store.Suggestion.DataPerson)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Người tham gia'} onBack={() => navigation.goBack()} />
                <View style={[styles.container, { flex: 10 }]}>
                    {DataPerson && DataPerson.map((item) => {
                        return (
                            <View key={item.id} style={styles.bodyPerson}>
                                <Text style={styles.labelPerson}>{item.label}
                                    <Text style={styles.textPerson}> ({item.text})</Text>
                                </Text>
                                <View style={styles.viewQuantity}>
                                    <TouchableOpacity onPress={() => dispatch({ type: 'DOWN', id: item.id })}>
                                        <Image
                                            source={require('../../img/vinh51.png')}
                                            style={styles.img3}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.labelPerson}>{item.quantity}</Text>
                                    <TouchableOpacity onPress={() => dispatch({ type: 'UP', id: item.id })}>
                                        <Image
                                            source={require('../../img/vinh52.png')}
                                            style={styles.img3}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default ChoosePerson;