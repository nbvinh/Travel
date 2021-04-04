import React, { useState, useEffect } from "react";
import { Text, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import Header from "../Header";
const { height, width } = Dimensions.get('screen')
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
const SeeMorePromotions = ({navigation}) => {
    const dataheader = useSelector(store => store.Promotion.data)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='#E5E5E5' barStyle={"dark-content"} />
            <Header text={'Khuyến Mại'} onBack={()=>navigation.goBack()} />
            <View style={{ flex: 10, marginHorizontal: 10 }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <TouchableOpacity key={item.id.toString()} style={styles.container}>
                                    <Image
                                        source={item.img}
                                        style={styles.img}
                                    />
                                    <Text style={styles.text1}>{item.text1}</Text>
                                    <View style={styles.time}>
                                        <Text style={styles.text2}>Thời gian áp dụng :
                                            <Text style={styles.text3}>{item.time}</Text>
                                        </Text>
                                        {
                                            item.condition ?
                                                <Text style={styles.text4}>Đã hết Hạn</Text>
                                                :
                                                null
                                        }
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default SeeMorePromotions;
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5
    },
    img: {
        width: '100%',
        height: height / 5.41,
        marginRight: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    text1: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
        marginHorizontal: 15,
        marginTop: 10
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    text2: {
        color: '#575757',
        fontSize: 13,
        fontWeight: '400',
        marginVertical:5
    },
    text3: {
        color: 'black',
        fontSize: 13.5,
    },
    text4:{
        color:'#FF2424',
        fontSize:11
    }
})