import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
const HeaderHotelDetails = (props) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const item = useSelector(store => store.Hotel.item)
    return (
        <View style={styles.header}>
            <Image
                source={{ uri: item.img }}
                style={styles.imgHeader}
            />
            <Text style={styles.nameHotel}>{item.text}</Text>
            <View style={styles.addressView}>
                <Image
                    source={require('../../../img/location1.png')}
                    style={styles.location}
                />
                <Text style={styles.address}>{item.text1}</Text>
            </View>
            <TouchableOpacity style={styles.leftBack} onPress={() => navigation.goBack()}>
                <Image
                    source={require('../../../img/ChevronRight.png')}
                    style={styles.ChevronRight}
                />
            </TouchableOpacity>
        </View>
    )
}
export default HeaderHotelDetails;