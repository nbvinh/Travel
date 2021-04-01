import React, { useEffect, useState } from "react";
import { View, TextInput, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";

const { width, height } = Dimensions.get('screen')
const ScreenUpdateProfile = ({ navigation }) => {
    const onBack = () => {
        navigation.goBack()
    }
    const [text, setText] = useState('')
    const [text1, setText1] = useState('')
    const [lastname, setLastname] = useState(false)
    const [fisrtname, setFisrtname] = useState(false)
    const [finish, setFinish] = useState(false)
    const [finish1, setFinish1] = useState(false)
    const phone = useSelector(store => store.people.phone)
    const dispatch = useDispatch()
    const onChangelastname = (value) => {
        setText(value)
        if (value !== '') {
            setFinish(true)
            console.log(finish)
        }
        else {
            setFinish(false)
        }
    }
    const onChangefisrtname = (value) => {
        setText1(value)
        if (value !== '') {
            setFinish1(true)
        }
        else {
            setFinish1(false)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header onBack={onBack} />
            <View style={styles.content}>
                <Text style={styles.text1}>Cập Nhật Thông Tin</Text>
                <TextInput
                    onChangeText={(value) => onChangelastname(value)}
                    value={text}
                    style={[styles.text2, { borderColor: lastname ? '#F17A4F' : '#E0E0E0', }]}
                    autoFocus={true}
                    placeholder={'Họ'}
                    placeholderTextColor={'#BDBDBD'}
                    onFocus={() => {
                        setLastname(true)
                        setFisrtname(false)
                    }}
                />
                <TextInput
                    onChangeText={(value) => onChangefisrtname(value)}
                    value={text1}
                    style={[styles.text2, { marginVertical: 20, borderColor: fisrtname ? '#F17A4F' : '#E0E0E0' }]}
                    placeholder={'Tên'}
                    placeholderTextColor={'#BDBDBD'}
                    onFocus={() => {
                        setLastname(false)
                        setFisrtname(true)
                    }}
                />
                <TextInput
                    style={[styles.text2, { borderColor: '#E0E0E0' }]}
                    placeholder={'0' + phone}
                    placeholderTextColor={'#BDBDBD'}
                    editable={false}
                    selectTextOnFocus={false}
                />
                {
                    finish || finish1 ?
                        <TouchableOpacity style={styles.finish} onPress={()=>navigation.navigate('BottomTab')}>
                            <Text style={styles.textfinish}>Hoàn Thành</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.finishfall}>
                            <Text style={styles.textfinish}>Hoàn Thành</Text>

                        </TouchableOpacity>
                }
                <View style={styles.rules}>
                    <Text style={styles.text3}>Bằng cách tham gia OKGO, bạn đã đồng ý với
                        <Text onPress={() => { dispatch({ type: 'MODALPROFILE' }) }} style={{ textDecorationLine: 'underline' }}> Chính sách bảo mật và Điều khoản sử dụng</Text>
                        <Text> của chúng tôi</Text>
                    </Text>
                </View>
            </View>
            <Form />
        </SafeAreaView>
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
        marginHorizontal: 20
    },
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text2: {
        width: '100%',
        height: 40,
        borderBottomWidth: 2,
        color: 'black',
        fontSize: 18,
        fontWeight: '400',
        justifyContent: 'center'
    },
    finish: {
        // position: 'absolute',
        // bottom:'40%',
        marginTop:70,
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5F24',
        borderRadius: 30
    },
    textfinish: {
        fontWeight: '700',
        color: 'white',
        fontSize: 18
    },
    rules: {
        // position: 'absolute',
        // // top: '64%'
        // bottom:'20%',
        marginTop:20
    },
    text3: {
        textAlign: 'center',
        color: '#565656'
    },
    finishfall: {
        // position: 'absolute',
        // bottom:'40%',
        marginTop:70,
        height: 45,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBD7CA',
        borderRadius: 30
    }
})