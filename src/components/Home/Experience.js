import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const { height, width } = Dimensions.get('screen')
const Experience = () => {
    const dataheader = useSelector(store => store.Experience.data)
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <View key={item.id.toString()} style={{ marginRight: 20,width: width / 1.70 }}>
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: '100%', height: height / 4.06, borderRadius: 5 }}
                            />
                            <Text style={{ color: 'black', fontSize: height / 45, fontWeight: '600', marginTop: 10,marginBottom:5 }}>{item.text}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={require('../../img/location.png')}
                                    style={{ width: 10, height: 13, marginRight: 5,marginTop:3 }}
                                />
                                <Text style={{color:'#3076FE',marginBottom:5,fontSize:height/60}}>{item.text1}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default Experience;