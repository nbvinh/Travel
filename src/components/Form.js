import React, { useState, useEffect } from "react";
import { View, Text, Modal, StatusBar, StyleSheet, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('screen')
import { useNavigation } from '@react-navigation/native';
const Form = (props) => {
    const navigation = useNavigation();
    const test = useSelector(store => store.people.test)
    const mode = props.mode
    const dispatch = useDispatch()
    const handlePress = () => {
        dispatch({ type: 'MODE' })
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
    const onTest = () => {
        navigation.navigate('ScreenFirst')
        dispatch({ type: 'MODE' })
    }
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={test}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.7)'} />
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("CreateSchedules")
                    }}
                    style={{ position: 'absolute', width: scale(48), height: scale(48), left: scale(60.5), bottom: scale(72), zIndex: 1 }}>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("Search")
                    }}
                    style={{ position: 'absolute', width: scale(48), height: scale(48), right: scale(62), bottom: scale(72), zIndex: 1 }}>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("ChooseRating")
                    }}
                    style={{ position: 'absolute', width: scale(48), height: scale(48), right: scale(112), bottom: scale(142), zIndex: 1 }}>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        dispatch({ type: 'MODE' })
                        navigation.navigate("Suggestion")
                    }}
                    style={{ position: 'absolute', width: scale(48), height: scale(48), left: scale(110.5), bottom: scale(142), zIndex: 1 }}>
                </TouchableOpacity>
                <View style={{ position: 'absolute', bottom: 0, height: scale(45), left: 0, right: 0 }}>
                    <View style={{ position: 'absolute', left: (width / 5) * 2, right: (width / 5) * 2, zIndex: 1, bottom: scale(20), alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Animated.View style={{ position: "absolute", left: thermometerX, top: thermometerY }}>
                                <View style={styles.secondaryButton}>
                                    <Image
                                        source={require('../img/plus.png')}
                                        style={{ width: scale(20), height: scale(20) }}
                                    />
                                </View>
                                <Animated.Text style={[styles.text1, { fontSize }]}>Tạo Lịch Trình</Animated.Text>
                            </Animated.View>
                            <Animated.View style={{ position: "absolute", left: timeX, top: timeY }}>
                                <View style={styles.secondaryButton}>
                                    <Image
                                        source={require('../img/lights.png')}
                                        style={{ width: scale(20), height: scale(20) }}
                                    />
                                </View>
                                <Animated.Text style={[styles.text2, { fontSize }]}>Xem Gợi Ý</Animated.Text>
                            </Animated.View>
                            <Animated.View style={{ position: "absolute", left: PenX, top: PenY }}>
                                <View style={styles.secondaryButton}>
                                    <Image
                                        source={require('../img/Pen.png')}
                                        style={{ width: scale(20), height: scale(20) }}
                                    />
                                </View>
                                <Animated.Text style={[styles.text2, { fontSize }]}>Đánh giá</Animated.Text>
                            </Animated.View>
                            <Animated.View style={{ position: "absolute", left: pulseX, top: pulseY }}>
                                <View style={styles.secondaryButton}>
                                    <Image
                                        source={require('../img/Search.png')}
                                        style={{ width: scale(20), height: scale(20) }}
                                    />
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
                    </View>
                </View>
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
})