import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderEdit from "./HeaderEdit";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
import { scale, verticalScale } from "react-native-size-matters";
import Input from "../../Input";
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../../ImageHeader";
const EditProfile = ({ navigation }) => {
    const user = useSelector(store => store.people.user)
    const [fisrtname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [avatar, setAvatar] = useState()
    const [phone, setphone] = useState("")
    const dispatch = useDispatch()
    const data = { lastname: lastname, fisrtname: fisrtname, phone: phone, avatar: avatar }
    const onSave = async () => {
        dispatch({ type: 'PROFILE', data: data })
        navigation.goBack()
        await AsyncStorage.setItem('DATA', JSON.stringify(data))
    }
    const onPicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setAvatar(image.path)
        });
    }
    useEffect(() => {
        setFirstname(user.fisrtname)
        setLastname(user.lastname)
        setAvatar(user.avatar)
        setphone(user.phone)
    }, [navigation])
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Sửa thông tin cá nhân"}
                left={true}
                EditProfile={true}
                onSave={() => onSave()}
                right={true}
            />
        ),
    });
    return (
        <ScrollView style={AppStyle.StyleHome.scrollview}>
            <View style={styles.container} >
                <View style={styles.body}>
                    <Image
                        source={{ uri: avatar }}
                        style={styles.avatar}
                    />
                    <Text onPress={() => onPicture()} style={styles.edit}>Thay ảnh đại diện</Text>
                </View>
                <Input value={fisrtname} setValue={setFirstname} text={'Họ'} editable={true} selectTextOnFocus={true} />
                <Input value={lastname} setValue={setLastname} text={'Tên'} editable={true} selectTextOnFocus={true} />
                <Input value={"Vinh230620@gmail.com"} text={'Email'} editable={false} selectTextOnFocus={false} />
                <Input value={phone} setValue={setphone} text={'Số điện thoại'} editable={true} selectTextOnFocus={true} keyboardType={"numeric"} />
            </View>
        </ScrollView>
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
