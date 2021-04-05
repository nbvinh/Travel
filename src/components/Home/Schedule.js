import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
const { height, width } = Dimensions.get('screen')
const Schedule = () => {
    const dataheader = useSelector(store => store.Schedule.data)
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <View key={item.id.toString()} style={AppStyle.StyleSchedule.container}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={{ uri: item.img1 }}
                                    style={AppStyle.StyleSchedule.img1}
                                />
                                <View>
                                    <Image
                                        source={{ uri: item.img2 }}
                                        style={AppStyle.StyleSchedule.img2}
                                    />
                                    <View style={AppStyle.StyleSchedule.content4}>
                                        <Image
                                            source={{ uri: item.img3 }}
                                            style={AppStyle.StyleSchedule.img3}
                                        />
                                        <Image
                                            source={{ uri: item.img4 }}
                                            style={AppStyle.StyleSchedule.img3}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={AppStyle.StyleSchedule.content}>
                                <View style={{ flex: 1 }}>
                                    <View style={AppStyle.StyleSchedule.content1}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.text1} </Text>
                                        <Text style={{ color: '#494949' }}>({item.text2})</Text>
                                    </View>
                                    <View style={AppStyle.StyleSchedule.content2}>
                                        <Image
                                            source={{ uri: item.avatar }}
                                            style={AppStyle.StyleSchedule.img4}
                                        />
                                        <View>
                                            <Text style={{ color: 'black' }}>{item.name}</Text>
                                            <Text style={{ color: '#494949' }}>{item.time}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginRight: 5 }}>
                                    <View style={AppStyle.StyleSchedule.content3}>
                                        <Image
                                            source={require('../../img/location.png')}
                                            style={AppStyle.StyleSchedule.img5}
                                        />
                                        <Text style={{ color: '#3076FE' }}>Việt Nam</Text>
                                    </View>
                                    <View style={AppStyle.StyleSchedule.footer}>
                                        <Text style={AppStyle.StyleSchedule.text2}>{item.price}</Text>
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