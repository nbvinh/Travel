import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
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
                            <View style={{
                                marginTop: scale(15), flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{ fontSize: scale(12), fontWeight: '700', textAlign: 'center', marginLeft: scale(5) }}>{item.text1}
                                    <Text style={{ color: '#494949', fontSize: scale(12) }}>({item.text2})</Text>
                                </Text>
                                <View style={AppStyle.StyleSeeMoreSchedule.content}>
                                    <Image
                                        source={require('../../img/location.png')}
                                        style={AppStyle.StyleSeeMoreSchedule.img5}
                                    />
                                    <Text style={{ color: '#3076FE', fontSize: scale(10) }}>Việt Nam</Text>
                                </View>
                            </View>
                            <View style={[AppStyle.StyleSeeMoreSchedule.viewIMG2, { marginTop: scale(5) }]}>
                                <View style={AppStyle.StyleSeeMoreSchedule.viewText}>
                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={AppStyle.StyleSeeMoreSchedule.img4}
                                    />
                                    <View>
                                        <Text style={{ fontSize: scale(10), color: '#000000' }}>{item.name}</Text>
                                        <Text style={{ color: '#494949', fontSize: scale(8) }}>{item.time}</Text>
                                    </View>
                                </View>
                                <View style={AppStyle.StyleSeeMoreSchedule.viewText1}>
                                    <Text style={AppStyle.StyleSeeMoreSchedule.text1}>{item.price}</Text>
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