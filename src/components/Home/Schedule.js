import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
const { height, width } = Dimensions.get('screen')
const Schedule = () => {
    const dataheader = useSelector(store => store.Schedule.data)
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <View key={item.id.toString()} style={{ marginRight: 20, backgroundColor: 'white', borderRadius: 5 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: item.img1 }}
                                    style={{ width: width / 3.1, height: height / 5.075, marginRight: 5, borderTopLeftRadius: 5 }}
                                />
                                <View>
                                    <Image
                                        source={{ uri: item.img2 }}
                                        style={{ width: width / 2.15, height: height / 5.075 / 2 - 2.5 }}
                                    />
                                    <View style={{ flexDirection: 'row', width: width / 2.15, height: height / 5.075 / 2 - 2.5, marginTop: 4, justifyContent: 'space-between' }}>
                                        <Image
                                            source={{ uri: item.img3 }}
                                            style={{ width: '49%', height: '100%' }}
                                        />
                                        <Image
                                            source={{ uri: item.img4 }}
                                            style={{ width: '49%', height: '100%' }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between',width:(width / 3.1 + width / 2.15 +10) }}>
                                <View style={{flex:1}}>
                                    <View style={{ flexDirection: 'row',marginBottom:10,marginLeft:5 }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.text1} </Text>
                                        <Text style={{ color: '#494949' }}>({item.text2})</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginBottom:10,marginLeft:5}}>
                                        <Image 
                                            source={{uri:item.avatar}}
                                            style={{width:25,height:25,borderRadius:15,marginRight:10,marginTop:5}}
                                        />
                                        <View>
                                            <Text style={{color:'black'}}>{item.name}</Text>
                                            <Text style={{ color: '#494949' }}>{item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{marginRight:5}}>
                                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                                        <Image 
                                            source={require('../../img/location.png')}
                                            style={{width:10,height:13,marginRight:5,marginTop:3}}
                                        />
                                        <Text style={{color:'#3076FE'}}>Việt Nam</Text>
                                    </View>
                                    <View style={{borderRadius:5,width:'100%',backgroundColor:'#FF5F24',marginVertical:10}}>
                                        <Text style={{marginHorizontal:5,marginVertical:5,color:'white'}}>{item.price}</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default Schedule;