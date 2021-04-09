import React, { useEffect, useState } from "react";
import { View,TouchableOpacity, Text, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
const { height, width } = Dimensions.get('screen')
const SeeMoreDecemberDestination = ({ navigation }) => {
    const dataheader = useSelector(store => store.DecemberDestination.data)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <Header text={'Địa điểm phổ biến'} onBack={() => navigation.goBack()} />
            <View style={{ flex: 10, marginHorizontal: 10 }}>
                <ScrollView style={{ flex: 1 }}>
                    {
                        dataheader && dataheader.map((item) => {
                            return (
                                <TouchableOpacity key={item.id.toString()} style={{ marginBottom: width / 18.75 }}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{ width: '100%', height: height / 4.511, borderRadius: 5 }}
                                    />
                                    <View style={{ position: 'absolute', bottom: 8, left: 20, flexDirection: 'row' }}>
                                        <Image 
                                            source={require('../../img/img24.png')}
                                            style={{width:width/36.7,height:width/26.97,marginRight:5}}
                                        />
                                        <Text style={{ color: 'white', fontSize: height / 62.46, fontWeight: '600' }}>{item.text}</Text>
                                    </View>
                                    <Text style={{position:'absolute',left:'43%',top:'48%',color:'white',fontSize:width/23.4375}}>{item.text1}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default SeeMoreDecemberDestination;
const styles = StyleSheet.create({
})