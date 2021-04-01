import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import ImgHeader from "./ImgHeader";
import Promotion from "./Promotion";
import TextHome from "../TextHome";
import Schedule from "./Schedule";
const { height, width } = Dimensions.get('screen')
const Home = () => {
    const [search, setSearch] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../img/khampha.png')} style={{ flex: 5 }}>
                <View style={styles.textHeader}>
                    <Text style={styles.text1}>Khám phá</Text>
                    <Text style={styles.text2}>Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm các tour lịch và các hoạt động vui chơi giải trí</Text>
                </View>
                <View style={{ marginLeft: 20, }}>
                    <ImgHeader />
                </View>
                <View style={styles.search}>
                    <Image
                        source={require('../../img/Vector.png')}
                        style={styles.img}
                    />
                    <TextInput
                        placeholder={'Bạn muốn đi đâu?'}
                        maxLength={20}
                        onChangeText={(value) => setSearch(value)}
                    />
                </View>
            </ImageBackground>

            <View style={{ flex: 10 }}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.onpress}>
                        <TouchableOpacity style={styles.touchable}>
                            <Text style={styles.text3}>Xem gợi ý</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchable}>
                            <Text style={styles.text3}>Tạo lịch trình</Text>
                        </TouchableOpacity>
                    </View>
                    <TextHome text1={'Khuyến Mại'} text2={'Xem Thêm >'} />
                    <View style={{ marginLeft: 20 }}>
                        <Promotion />
                    </View>
                    <TextHome text1={'Lịch trình gần đây'} text2={'Xem Thêm >'} />
                    <View style={{ marginLeft: 20 }}>
                        <Schedule />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    search: {
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        height: 40,
        position: 'absolute',
        bottom: -20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 16,
        height: 14,
        marginLeft: 20,
        marginRight: 10
    },
    textHeader: {
        marginHorizontal: 20,
        marginTop: 10
    },
    text1: {
        fontSize: height / 45,
        fontWeight: 'bold',
        color: 'white'
    },
    text2: {
        color: 'white',
        fontSize: height / 51,
        marginTop: 5
    },
    onpress: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    touchable: {
        width: width / 2.4,
        height: 25,
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text3: {
        color: 'white',
    },
    scrollview: {
        flex: 1,

    },
    textPromotion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    text4: {
        fontWeight: 'bold',
        fontSize: height / 45
    },
    text5: {
        fontSize: height / 45,
        color: '#9E9E9E',
        fontWeight: '600'
    },
})
