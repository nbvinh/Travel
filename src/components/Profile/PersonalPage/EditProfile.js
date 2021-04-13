import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderEdit from "./HeaderEdit";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import { scale, verticalScale } from "react-native-size-matters";
import Follower from "../../Follower";
import Input from "../../Input";
import ImagePicker from 'react-native-image-crop-picker';
const EditProfile = ({ navigation }) => {
    const user = useSelector(store => store.people.user)
    const fisrtname = useSelector(store => store.people.fisrtname)
    const lastname = useSelector(store => store.people.lastname)
    const picture = useSelector(store => store.people.picture)
    const phone = useSelector(store => store.people.phone)
    const dispatch = useDispatch()
    const data = [
        { lastname: lastname, fisrtname: fisrtname, id: Math.random(), phone: phone, avatar: picture },
    ]
    const onSave = () => {
        dispatch({ type: 'PROFILE', data: data })
        navigation.goBack()
    }
    const onPicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            dispatch({ type: 'PICTURE', picture: image.path })
        });
    }
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <HeaderEdit text={'Sửa thông tin cá nhân'} onBack={() => navigation.goBack()} onSave={() => onSave()} />
                {user && user.map((item) => {
                    return (
                        <View key={item.id.toString()} style={styles.container} >
                            <View style={styles.body}>
                                <Image
                                    source={{ uri: item.avatar }}
                                    style={styles.avatar}
                                />
                                <Text onPress={() => onPicture()} style={styles.edit}>Thay ảnh đại diện</Text>
                            </View>
                            <Input value={item.fisrtname} text={'Họ'} editable={true} selectTextOnFocus={true} />
                            <Input value={item.lastname} text={'Tên'} editable={true} selectTextOnFocus={true} />
                            <Input value={"Vinh230620@gmail.com"} text={'Email'} editable={false} selectTextOnFocus={false} />
                            <Input value={item.phone} text={'Số điện thoại'} editable={false} selectTextOnFocus={false} />
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}
export default EditProfile;
const styles = StyleSheet.create({
    container: {
        marginTop: scale(20),
        marginHorizontal: scale(15)
    },
    body: {
        alignItems: 'center',
        borderBottomWidth: scale(0.4)
    },
    avatar: {
        height: scale(70),
        width: scale(70),
        borderRadius: scale(35),
        marginBottom: scale(10)
    },
    edit: {
        marginBottom: scale(20),
        fontSize: scale(14),
        color: '#FF5F24',
        fontWeight: '400'
    }
})
