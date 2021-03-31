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
    TouchableOpacity
}
    from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { onChange } from "react-native-reanimated";
import { LoginButton, AccessToken } from "react-native-fbsdk-next";
const { width, height } = Dimensions.get('screen')
const ScreenSecond = () => {
    const [text, setText] = useState('')
    const onChange = (value) => {
        setText(value)
    }
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
                                value={text}
                                maxLength={10}
                                keyboardType='numeric'
                                placeholder="Nhập Số Điện Thoại"
                                placeholderTextColor='white'
                            />
                        </View>
                        <TouchableOpacity style={styles.OK}>
                            <Text style={styles.text1}>OK</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20, height: 40, width: '100%', backgroundColor: '#436EEE', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                            <LoginButton
                            />
                        </View>
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
        position:'absolute',
        left:'35%',
        top:'10%',
        zIndex: 1
    },
    footer: {
        // flex: 1,
        position:'absolute',
        zIndex:1,
        top:'50%'
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