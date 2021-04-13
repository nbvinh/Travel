import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    SafeAreaView,
    Image,
    Animated,
    Dimensions,
    Easing,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
}
    from "react-native";
import { LoginButton, AccessToken } from "react-native-fbsdk-next";
import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get('screen')
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
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
        navigation.navigate('ScreenOTP')
        dispatch({ type: 'PHONE', phone: text })
    }
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground style={styles.container} source={require('../../img/backgroundcolor.png')}>
                    <Image
                        source={require('../../img/background.png')}
                        style={{ width: '100%', height: height }}
                    />
                    <View style={styles.header}>
                        <Image
                            source={require('../../img/okgoCIP-05.png')}
                            style={styles.img}
                        />
                        <Image
                            source={require('../../img/okgoCIP-06.png')}
                            style={styles.img1}
                        />
                    </View>
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
                                    value={text}
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
                            <View style={styles.loginFB}>
                                <LoginButton
                                />
                            </View>
                            <TouchableOpacity style={styles.loginGG}>
                                <Image
                                    source={{ uri: 'https://brasol.vn/public/ckeditor/uploads/tin-tuc/13-logo-google.png' }}
                                    style={styles.img4}
                                />
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.text2}>Đăng Nhập Với Google</Text>

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </ScrollView>

        </SafeAreaView>
    )
}
export default ScreenSecond;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        left: 0,
        right:0,
        top: '5%',
        zIndex: 1,
        alignItems:'center'
    },
    footer: {
        // flex: 1,
        position: 'absolute',
        zIndex: 1,
        top: '45%'
    },
    img: {
        width: scale(101),
        height: scale(129)
    },
    img1: {
        width: scale(137),
        height: scale(33.69),
        marginTop: moderateScale(10)
    },
    footercontent: {
        marginHorizontal: moderateScale(10)
    },
    textInput: {
        borderTopRightRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30),
        height: verticalScale(50),
        width: '60%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        fontSize: moderateScale(15)
    },
    viewtextinput: {
        flexDirection: 'row'
    },
    textinput1: {
        height: verticalScale(50),
        width: '40%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderTopLeftRadius: scale(30),
        borderBottomLeftRadius: scale(30),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img2: {
        width: scale(24),
        height: verticalScale(16)
    },
    img3: {
        width: scale(10),
        height: verticalScale(6)
    },
    text: {
        fontSize: scale(15),
        fontWeight: '500',
        color: 'white'
    },
    OK: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: '#FF5F24',
        marginTop: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        borderRadius: scale(25)
    },
    text1: {
        color: 'white',
        fontWeight: '700',
        fontSize: scale(20)
    },
    loginFB: {
        marginTop: scale(50),
        height: 40,
        width: '100%',
        backgroundColor: '#436EEE',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img4: {
        width: scale(40),
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: scale(8),
        borderBottomLeftRadius: scale(8),
    },
    loginGG: {
        backgroundColor: '#1864FD',
        marginTop: scale(20),
        width: '100%',
        height: 40,
        borderRadius: scale(8),
        flexDirection: 'row',
    },
    text2: {
        color: 'white',
        fontSize: scale(15),
        fontWeight: '500',
    }
})


// import React, { Component } from 'react';
// import { View } from 'react-native';
// import { LoginButton, AccessToken } from 'react-native-fbsdk-next';

// export default class Login extends Component {
//     render() {
//         return (
//             <View>
//                 <LoginButton
//                     // onLoginFinished={
//                     //     (error, result) => {
//                     //         if (error) {
//                     //             console.log("login has error: " + result.error);
//                     //         } else if (result.isCancelled) {
//                     //             console.log("login is cancelled.");
//                     //         } else {
//                     //             AccessToken.getCurrentAccessToken().then(
//                     //                 (data) => {
//                     //                     console.log(data.accessToken.toString())
//                     //                 }
//                     //             )
//                     //         }
//                     //     }
//                     // }
//                     // onLogoutFinished={() => console.log("logout.")} 
//                     />
//             </View>
//         );
//     }
// };