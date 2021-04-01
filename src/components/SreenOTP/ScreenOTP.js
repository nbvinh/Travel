import React, { useRef, useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput, Platform, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

let OTP = '9999'
const ScreenOTP = ({ navigation }) => {
    const [OTP1, setOTP1] = React.useState('');
    const [OTP2, setOTP2] = React.useState('');
    const [OTP3, setOTP3] = React.useState('');
    const [OTP4, setOTP4] = React.useState('');
    const [convert1, setConvert1] = React.useState(false);
    const [convert2, setConvert2] = React.useState(false);
    const [convert3, setConvert3] = React.useState(false);
    const [convert4, setConvert4] = React.useState(false);
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const onConFirm = () => {
        if (OTP === OTP1 + OTP2 + OTP3 + OTP4) {
            navigation.navigate('ScreenUpdateProfile')
        }
    }
    const [TimeDown, setTimeDown] = useState(59);
    useEffect(() => {
        const Time = setInterval(() => {
            setTimeDown(TimeDown - 1);
            if (TimeDown == 0) {
                setTimeDown(60);
            }
        }, 1000);
        return () => {
            clearInterval(Time);
        }
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}>Vui lòng nhập mã OTP vừa được gửi vào số điện thoại của bạn</Text>
                <View style={styles.textInput}>
                    <Text />
                    <TextInput
                        ref={inputRef1}
                        onFocus={() => {
                            setConvert1(true)
                            setConvert2(false)
                            setConvert3(false)
                            setConvert4(false)
                        }}
                        onChangeText={(value) => setOTP1(value)}
                        style={[styles.text1, { borderColor: convert1 ? '#FF5F24' : '#D8D8D8' }]}
                        keyboardType={'numeric'}
                        maxLength={1}
                        value={OTP1}
                        onChange={(e) => {
                            if (e.nativeEvent.text !== '') {
                                inputRef2.current.focus()
                            }
                        }}
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key !== 'Backspace') {
                                    inputRef2.current.focus();
                                }
                            }
                        }}
                        placeholder={"●"}
                        autoFocus={true}
                    />
                    <TextInput
                        ref={inputRef2}
                        placeholder={"●"}
                        onFocus={() => {
                            setConvert1(false)
                            setConvert2(true)
                            setConvert3(false)
                            setConvert4(false)
                        }}
                        onChangeText={(value) => {
                            setOTP2(value)
                            if (Platform.OS === 'android') {
                                if (value != '') {
                                    inputRef3.current.focus()
                                }
                            }
                        }}
                        style={[styles.text1, { borderColor: convert2 ? '#FF5F24' : '#D8D8D8' }]}
                        keyboardType={'numeric'}
                        maxLength={1}
                        value={OTP2}
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef1.current.focus();
                                }
                                else {
                                    inputRef3.current.focus();
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef1.current.focus();
                                }
                                setOTP1('')
                            }
                        }}
                    />
                    <TextInput
                        ref={inputRef3}
                        placeholder={"●"}
                        onFocus={() => {
                            setConvert1(false)
                            setConvert2(false)
                            setConvert3(true)
                            setConvert4(false)
                        }}
                        onChangeText={(value) => {
                            setOTP3(value)
                            if (Platform.OS === 'android') {
                                if (value != '') {
                                    inputRef4.current.focus()
                                }
                            }
                        }}
                        style={[styles.text1, { borderColor: convert3 ? '#FF5F24' : '#D8D8D8' }]}
                        keyboardType={'numeric'}
                        maxLength={1}
                        value={OTP3}
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef2.current.focus();
                                }
                                else {
                                    inputRef4.current.focus();
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef2.current.focus();
                                }
                                setOTP2('')
                            }
                        }}
                    />
                    <TextInput
                        ref={inputRef4}
                        placeholder={"●"}
                        onFocus={() => {
                            setConvert1(false)
                            setConvert2(false)
                            setConvert3(false)
                            setConvert4(true)
                        }}
                        onChangeText={(value) => setOTP4(value)}
                        style={[styles.text1, { borderColor: convert4 ? '#FF5F24' : '#D8D8D8' }]}
                        keyboardType={'numeric'}
                        maxLength={1}
                        value={OTP4}
                        onKeyPress={(e) => {
                            if (Platform.OS === 'ios') {
                                if (e.nativeEvent.key === 'Backspace') {
                                    inputRef3.current.focus();
                                }
                            }
                            if (Platform.OS === 'android') {
                                if (e.nativeEvent.key = 'Backspace') {
                                    inputRef3.current.focus();
                                }
                                setOTP3('')
                            }
                        }}
                    />
                    <Text />
                </View>
                <Text style={styles.text2}>Gửi lại ({TimeDown}s)</Text>
                <TouchableOpacity style={styles.OK} onPress={() => onConFirm()}>
                    <Text style={styles.text3}>Xác Nhận</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default ScreenOTP;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        position: 'absolute',
        top: '15%',
        marginHorizontal: 30
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600'
    },
    textInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40
    },
    text1: {
        width: 38,
        height: 60,
        borderBottomWidth: 5,
        // borderColor: '#D8D8D8',
        color: 'black',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: '600'
    },
    text2: {
        color: '#F26230',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 10
    },
    OK: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF5F24',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        borderRadius: 25,
    },
    text3: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    }
})