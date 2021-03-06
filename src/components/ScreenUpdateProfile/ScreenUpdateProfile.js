import React, { useEffect, useState } from "react";
import { View, TextInput, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import { verticalScale, moderateScale, scale } from "react-native-size-matters";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const { width, height } = Dimensions.get('screen')
const ScreenUpdateProfile = ({ navigation }) => {
    const onBack = () => {
        navigation.goBack()
    }
    const text = useSelector(store => store.people.text)
    const text1 = useSelector(store => store.people.text1)
    const [lastname, setLastname] = useState(false)
    const [fisrtname, setFisrtname] = useState(false)
    const [finish, setFinish] = useState(false)
    const [finish1, setFinish1] = useState(false)
    const phone = useSelector(store => store.people.phone)
    const dispatch = useDispatch()
    const onChangelastname = (value) => {
        dispatch({ type: 'TEXT', text: value })
        if (value !== '') {
            setFinish(true)
            console.log(finish)
        }
        else {
            setFinish(false)
        }
    }
    const onChangefisrtname = (value) => {
        dispatch({ type: 'TEXT1', text1: value })
        if (value !== '') {
            setFinish1(true)
        }
        else {
            setFinish1(false)
        }
    }
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                left={true}
            />
        ),
    });
    const data = { lastname: text, fisrtname: text1, id: Math.random(), phone: phone, avatar: 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png', token: Math.random() }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text1}>C???p Nh???t Th??ng Tin</Text>
                <TextInput
                    onChangeText={(value) => onChangelastname(value)}
                    value={text}
                    style={[styles.text2, { borderColor: lastname ? '#F17A4F' : '#E0E0E0', }]}
                    autoFocus={true}
                    placeholder={'H???'}
                    placeholderTextColor={'#BDBDBD'}
                    onFocus={() => {
                        setLastname(true)
                        setFisrtname(false)
                    }}
                />
                <TextInput
                    onChangeText={(value) => onChangefisrtname(value)}
                    value={text1}
                    style={[styles.text2, { marginVertical: scale(20), borderColor: fisrtname ? '#F17A4F' : '#E0E0E0' }]}
                    placeholder={'T??n'}
                    placeholderTextColor={'#BDBDBD'}
                    onFocus={() => {
                        setLastname(false)
                        setFisrtname(true)
                    }}
                />
                <TextInput
                    style={[styles.text2, { borderColor: '#E0E0E0' }]}
                    placeholder={phone}
                    placeholderTextColor={'#BDBDBD'}
                    editable={false}
                    selectTextOnFocus={false}
                />
                {
                    finish || finish1 ?
                        <TouchableOpacity style={styles.finish} onPress={async () => {
                            await AsyncStorage.setItem('Token', JSON.stringify(data.token))
                            await AsyncStorage.setItem('DATA', JSON.stringify(data))
                            dispatch({ type: 'PROFILE', data: data })
                            navigation.replace("MainTab", { screen: "BottomTab" })
                        }}>
                            <Text style={styles.textfinish}>Ho??n Th??nh</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.finishfall}>
                            <Text style={styles.textfinish}>Ho??n Th??nh</Text>

                        </TouchableOpacity>
                }
                <View style={styles.rules}>
                    <Text style={styles.text3}>B???ng c??ch tham gia OKGO, b???n ???? ?????ng ?? v???i
                        <Text onPress={() => { dispatch({ type: 'MODALPROFILE' }) }} style={{ textDecorationLine: 'underline' }}> Ch??nh s??ch b???o m???t v?? ??i???u kho???n s??? d???ng </Text>
                        c???a ch??ng t??i
                    </Text>
                </View>
            </View>
            <Form />
        </View>
    )
}
export default ScreenUpdateProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        flex: 10,
        marginHorizontal: scale(20)
    },
    text1: {
        fontSize: scale(25),
        fontWeight: 'bold',
        marginBottom: scale(20)
    },
    text2: {
        width: '100%',
        height: scale(40),
        borderBottomWidth: 2,
        color: 'black',
        fontSize: scale(16),
        fontWeight: '400',
        justifyContent: 'center'
    },
    finish: {
        // position: 'absolute',
        // bottom:'40%',
        marginTop: verticalScale(70),
        height: verticalScale(45),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5F24',
        borderRadius: scale(30)
    },
    textfinish: {
        fontWeight: '700',
        color: 'white',
        fontSize: scale(18)
    },
    rules: {
        // position: 'absolute',
        // // top: '64%'
        // bottom:'20%',
        marginTop: scale(20)
    },
    text3: {
        textAlign: 'center',
        color: '#565656',
        fontSize: scale(15)
    },
    finishfall: {
        // position: 'absolute',
        // bottom:'40%',
        marginTop: moderateScale(70),
        height: verticalScale(45),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBD7CA',
        borderRadius: scale(30)
    }
})