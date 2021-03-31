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
    Alert
}
    from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { onChange } from "react-native-reanimated";
import { LoginButton, AccessToken } from "react-native-fbsdk-next";
import { useDispatch } from "react-redux";
const { width, height } = Dimensions.get('screen')
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
        dispatch({type:'PHONE',phone : text})
    }
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ImageBackground style={styles.container} source={require('../../img/backgroundcolor.png')}>
                <Image
                    source={require('../../img/background.png')}
                    style={{ width: '100%', height: 813 }}
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
                                <TouchableOpacity style={styles.OK} onPress={() => {Alert.alert('Bạn Cần Nhập Đủ Số Điện Thoại')}}>
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
        left: '35%',
        top: '5%',
        zIndex: 1
    },
    footer: {
        // flex: 1,
        position: 'absolute',
        zIndex: 1,
        top: '45%'
    },
    img: {
        width: width / 3.7,
        height: width / 2.9
    },
    img1: {
        width: 137,
        height: 33.69,
        marginTop: 10
    },
    footercontent: {
        marginHorizontal: 10
    },
    textInput: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        height: 50,
        width: '60%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white'
    },
    viewtextinput: {
        flexDirection: 'row'
    },
    textinput1: {
        height: 50,
        width: '40%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img2: {
        width: 24,
        height: 15.89
    },
    img3: {
        width: 10,
        height: 6
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white'
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
        borderRadius: 25
    },
    text1: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },
    loginFB: {
        marginTop: 50,
        height: 40,
        width: '100%',
        backgroundColor: '#436EEE',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img4: {
        width: 40,
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    loginGG: {
        backgroundColor: '#1864FD',
        marginTop: 20,
        width: '100%',
        height: 40,
        borderRadius: 8,
        flexDirection: 'row',
    },
    text2: {
        color: 'white',
        fontSize: 15,
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