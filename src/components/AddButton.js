import React, { useState } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Text, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
const AddButton = () => {
    let mode = new Animated.Value(0);
    let buttonSize = new Animated.Value(0);
    const check = useSelector(store => store.people.check)
    const dispatch = useDispatch()
    const handlePress = () => {

        Animated.parallel([
            Animated.timing(buttonSize, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(mode, {
                toValue: mode._value === 0 ? 1 : 0,
                useNativeDriver: false
            })
        ]).start();
    };
    const thermometerX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -90]
    });

    const thermometerY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -50]
    });
    const PenX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, 40]
    });

    const PenY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -100]
    });

    const timeX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -40]
    });

    const timeY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -100]
    });

    const pulseX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, 90]
    });

    const pulseY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -50]
    });

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const fontSize = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10]
    });

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                <View style={styles.secondaryButton}>
                    <Image
                        source={require('../img/plus.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
                <Animated.Text style={[styles.text1, { fontSize }]}>Tạo Lịch Trình</Animated.Text>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                <View style={styles.secondaryButton}>
                    <Image
                        source={require('../img/lights.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
                <Animated.Text style={[styles.text2, { fontSize }]}>Xem Gợi Ý</Animated.Text>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: PenX, top: PenY }}>
                <View style={styles.secondaryButton}>
                    <Image
                        source={require('../img/Pen.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
                <Animated.Text style={[styles.text2, { fontSize }]}>Đánh giá</Animated.Text>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                <View style={styles.secondaryButton}>
                    <Image
                        source={require('../img/Search.png')}
                        style={{ width: 20, height: 20 }}
                    />
                </View>
                <Animated.Text style={[styles.text1,{fontSize}]}>Tìm quanh đây</Animated.Text>
            </Animated.View>
            <TouchableOpacity style={styles.Plus}
                onPress={() => handlePress()}
            >
                <Animated.View style={{ transform: [{ rotate: rotation }] }}>
                    <FontAwesome5 name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
}
export default AddButton;
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF"
    },
    secondaryButton: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#FF5F24"
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 50,
        left: -10
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: 50
    },
    Plus: {
        width: 50,
        height: 50,
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    }
});