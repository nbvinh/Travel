import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const { height, width } = Dimensions.get('screen')
const Hotel = () => {
    const dataheader = useSelector(store => store.Hotel.data)
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <View key={item.id.toString()} style={{ marginRight: 20, width: width / 2.34,marginBottom:30 }}>
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: '100%', height: height / 5.4, borderRadius: 5 }}
                            />
                            <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                                <Text style={{marginVertical:5,color:'#A1A1A1',fontSize:height/64}}>{item.text2}</Text>
                                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                                    <Image 
                                        source={require('../../img/star.png')}
                                        style={{width:10,height:9.56,marginRight:3}}
                                    />
                                    <Image 
                                        source={require('../../img/star.png')}
                                        style={{width:10,height:9.56,marginRight:3}}
                                    />
                                    <Image 
                                        source={require('../../img/star.png')}
                                        style={{width:10,height:9.56,marginRight:3}}
                                    />
                                    <Image 
                                        source={require('../../img/star.png')}
                                        style={{width:10,height:9.56,marginRight:3}}
                                    />
                                    <Image 
                                        source={require('../../img/star.png')}
                                        style={{width:10,height:9.56}}
                                    />
                                </View>
                            </View>
                            <Text style={{ color: 'black', fontSize: height / 45, fontWeight: '700',marginBottom:5 }}>{item.text}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../../img/location.png')}
                                    style={{ width: 10, height: 13, marginRight: 5,marginTop:3 }}
                                />
                                <Text style={{color:'#3076FE',marginBottom:5}}>{item.text1}</Text>
                            </View>
                            <Text style={{color:'red',fontSize:height/50,fontWeight:'600'}}>{item.price} đ/ đêm</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default Hotel;