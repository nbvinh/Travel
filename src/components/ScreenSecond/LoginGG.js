import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import styles from './styles';


GoogleSignin.configure({
    webClientId:
        '559981280614-1vhfc1a4c0176dlrbh20m9vo52revj43.apps.googleusercontent.com',
});

const LoginGG = (props) => {
    // const handleSignWithGoogle = async () => {
    //     try {
    //         if (auth().currentUser) {
    //             auth().signOut();
    //             GoogleSignin.signOut();
    //         }
    //         const { idToken } = await GoogleSignin.signIn();
    //         // Create a Google credential with the token
    //         const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //         // Sign-in the user with the credential
    //         await auth().signInWithCredential(googleCredential);
    //         const user = auth().currentUser;
    //         console.log(user)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('signin')
            // this.setState({ userInfo });
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