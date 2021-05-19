import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

GoogleSignin.configure({
    // webClientId:
    //     '559981280614-1vhfc1a4c0176dlrbh20m9vo52revj43.apps.googleusercontent.com',
});

const LoginGG = ({ props }) => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [userInfo, setUserInfo] = useState({})
    const [tongle, setTongle] = useState(false)
    const data = { lastname: userInfo.givenName, fisrtname: userInfo.familyName, id: userInfo.id, phone: null, avatar: userInfo.photo }
    useEffect(() => {
        dispatch({ type: 'PROFILE', data: data })
        AsyncStorage.setItem('DATA', JSON.stringify(data))
    }, [tongle])
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            const token = await GoogleSignin.getTokens()
            setUserInfo(user.user)
            await AsyncStorage.setItem('Token', JSON.stringify(token))
            setTongle(true)
            navigation.replace("MainTab", { screen: "BottomTab" })
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
    return (
        <TouchableOpacity style={styles.loginGG} onPress={() => signIn()}>
            <Image
                source={{ uri: 'https://brasol.vn/public/ckeditor/uploads/tin-tuc/13-logo-google.png' }}
                style={styles.img4}
            />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.text2}>Đăng Nhập Với Google</Text>
            </View>
        </TouchableOpacity>
    );
};
export default LoginGG;