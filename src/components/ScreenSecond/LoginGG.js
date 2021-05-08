
import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-community/google-signin";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';



const LoginGG = () => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '822477820370-o2m2hn6tnpi0kavg1d1pun12amu2hcq8.apps.googleusercontent.com',
            offlineAccess: false,
        });
    }, [])
    const [userInfo, setUserInfo] = useState({})
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            setUserInfo({ user });
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
        <View>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn} />
            {/* <TouchableOpacity onPress={() => signIn()}>
                <Text>djsasghjdghds</Text>
            </TouchableOpacity> */}
            {console.log('test', userInfo)}
        </View>
    )
}
export default LoginGG;