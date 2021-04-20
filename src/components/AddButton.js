import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableHighlight, Animated, Text, Image } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { scale } from "react-native-size-matters";
import Form from "./Form";
const AddButton = (props) => {
    let mode = new Animated.Value(0);
    let buttonSize = new Animated.Value(0);
    const navigation = props.navigation
    const dispatch = useDispatch()
    const test = useSelector(store => store.people.test)
    const handlePress = () => {
        dispatch({ type: 'MODE' })
        // Animated.sequence([
        //     Animated.timing(buttonSize, {
        //         toValue: 1,
        //         useNativeDriver: true,

        //     }),
        //     Animated.timing(mode, {
        //         toValue: mode._value === 0 ? 1 : 0,
        //         useNativeDriver: false,
        //     })
        // ]).start();
    };
    useEffect(() => {
        test ?
            Animated.timing(mode, {
                toValue: 1,
                useNativeDriver: false,
            }).start()
            :
            Animated.timing(mode, {
                toValue: 0,
                useNativeDriver: false,
            }).start()
    }, [test])
    const thermometerX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -scale(90)]
    });

    const thermometerY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -scale(50)]
    });
    const PenX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, scale(40)]
    });

    const PenY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -scale(120)]
    });

    const timeX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -scale(40)]
    });

    const timeY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -scale(120)]
    });

    const pulseX = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, scale(90)]
    });

    const pulseY = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [-0, -scale(50)]
    });

    const rotation = mode.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"]
    });

    const fontSize = mode.interpolate({
        inputRange: [0, 1],
        outputRange: [0, scale(10)]
    });

    return (
        <View style={{ flex: 1 }}>
            <Form mode={mode} />
            <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                <View style={styles.secondaryButton}>
                    <TouchableOpacity onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("CreateSchedules")
                    }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../img/plus.png')}
                            style={{ width: scale(20), height: scale(20) }}
                        />
                    </TouchableOpacity>
                </View>
                <Animated.Text style={[styles.text1, { fontSize }]}>Tạo Lịch Trình</Animated.Text>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                <View style={styles.secondaryButton}>
                    <TouchableOpacity onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("Suggestion")
                    }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../img/lights.png')}
                            style={{ width: scale(20), height: scale(20) }}
                        />
                    </TouchableOpacity>
                </View>
                <Animated.Text style={[styles.text2, { fontSize }]}>Xem Gợi Ý</Animated.Text>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: PenX, top: PenY }}>
                <View style={styles.secondaryButton}>
                    <TouchableOpacity onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("ChooseRating")
                    }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../img/Pen.png')}
                            style={{ width: scale(20), height: scale(20) }}
                        />
                    </TouchableOpacity>
                </View>
                <Animated.Text style={[styles.text2, { fontSize }]}>Đánh giá</Animated.Text>
            </Animated.View>
            <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                <View style={styles.secondaryButton}>
                    <TouchableOpacity onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("Search")
                    }}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../img/Search.png')}
                            style={{ width: scale(20), height: scale(20) }}
                        />
                    </TouchableOpacity>
                </View>
                <Animated.Text style={[styles.text1, { fontSize }]}>Tìm quanh đây</Animated.Text>
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
        width: scale(72),
        height: scale(72),
        borderRadius: scale(36),
        backgroundColor: "#7F58FF",
        position: "absolute",
        marginTop: -scale(60),
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
        width: scale(48),
        height: scale(48),
        borderRadius: scale(24),
        backgroundColor: "#FF5F24"
    },
    text1: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: scale(50),
        left: -scale(10)
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: scale(50)
    },
    Plus: {
        width: scale(50),
        height: scale(50),
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(30)
    }
});