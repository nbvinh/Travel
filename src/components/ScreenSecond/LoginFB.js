
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
    AccessToken,
    GraphRequest,
    GraphRequestManager,
    LoginManager,
} from 'react-native-fbsdk';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginFB = () => {
    const [tongle, setTongle] = useState(false)
    useEffect(() => {
        dispatch({ type: 'PROFILE', data: data })
        AsyncStorage.setItem('DATA', JSON.stringify(data))
    }, [tongle])
    const navigation = useNavigation()
    const userInfo = useSelector(store => store.people.userInfo)
    const dispatch = useDispatch()
    const data = { lastname: userInfo.last_name, fisrtname: userInfo.first_name, id: Math.random(), phone: null, avatar: "https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" }
    const getInfoFromToken = token => {
        const PROFILE_REQUEST_PARAMS = {
            fields: {
                string: 'id,name,first_name,last_name,picture',
            },
        };
        const profileRequest = new GraphRequest(
            '/me',
            { token, parameters: PROFILE_REQUEST_PARAMS },
            async (error, user) => {
                if (error) {
                    console.log('login info has error: ' + error);
                } else {
                    await AsyncStorage.setItem('Token', JSON.stringify(token))
                    dispatch({ type: 'USERFACEBOOK', userInfo: user })
                    setTongle(true)
                    navigation.navigate("BottomTab")
                }
            },
        );
        new GraphRequestManager().addRequest(profileRequest).start();
    };

    const loginWithFacebook = () => {
        LoginManager.logInWithPermissions(['public_profile']).then(
            login => {
                if (login.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    AccessToken.getCurrentAccessToken().then(data => {
                        const accessToken = data.accessToken.toString();
                        getInfoFromToken(accessToken);
                    });
                }
            },
            error => {
                console.log('Login fail with error: ' + error);
            },
        );
    };
    const isLogin = userInfo.name;
    return (
        <TouchableOpacity
            onPress={() => loginWithFacebook()}
            style={styles.loginFB}>
            <Image
                source={require('../../img/facebook.png')}
                style={styles.imgFb}
            />
            <Text style={styles.textfb}> {isLogin ? isLogin : "Đăng nhập với Facebook"}</Text>
        </TouchableOpacity>
    );
}
export default LoginFB;