import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Text, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
const Touch = () => {

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={styles.Plus}
            >
                <Image
                    source={require('../img/touchable.png')}
                    style={{ width: '100%', height: '100%' }}
                />
            </TouchableOpacity>
        </View>
    );
}
export default Touch;
const styles = StyleSheet.create({
    Plus: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    }
});