import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import HeaderIMG from "./HeaderIMG";
import LoginFB from "./LoginFB";
import LoginGG from "./LoginGG";
const ScreenSecond = ({ navigation }) => {
    const [text, setText] = useState('')
    const [OK, setOK] = useState(false)
    const onChange = (value) => {
        setText(value)
        if (value.length === 9) {
            setOK(true)
        }
    }
    const onOK = () => {
        navigation.navigate("AuthStack", { screen: 'ScreenOTP' })
        dispatch({ type: 'PHONE', phone: "0" + text })
    }
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"dark-content"} />
            <ImageBackground style={styles.container} source={require('../../img/backgroundcolor.png')}>
                <HeaderIMG />
                <View style={styles.footer}>
                    <View style={styles.footercontent}>
                        <View style={styles.viewtextinput}>
                            <View style={styles.textinput1}>
                                <Text />
                                <Image
                                    source={require('../../img/flag.png')}
                                    style={styles.img2}
                                />
                                <Image
                                    source={require('../../img/Shape.png')}
                                    style={styles.img3}
                                />
                                <Text style={styles.text}>+84</Text>
                                <Text style={styles.text}>|</Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(value) => onChange(value)}
                                maxLength={9}
                                keyboardType='numeric'
                                placeholder="Nhập Số Điện Thoại"
                                placeholderTextColor='white'
                            />
                        </View>
                        {
                            OK ?
                                <TouchableOpacity style={styles.OK} onPress={() => onOK()}>
                                    <Text style={styles.text1}>OK</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={styles.OK} onPress={() => { Alert.alert('Bạn Cần Nhập Đủ Số Điện Thoại') }}>
                                    <Text style={styles.text1}>OK</Text>
                                </TouchableOpacity>
                        }
                        <LoginFB />
                        {/* <TouchableOpacity style={styles.loginGG}>
                            <Image
                                source={{ uri: 'https://brasol.vn/public/ckeditor/uploads/tin-tuc/13-logo-google.png' }}
                                style={styles.img4}
                            />
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.text2}>Đăng Nhập Với Google</Text>
                            </View>
                        </TouchableOpacity> */}
                        <LoginGG />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default ScreenSecond;

