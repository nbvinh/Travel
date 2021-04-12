import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Header from './Header'
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../src/theme/index";
const Schedule = (props) => {
    const item = props.item
    const type = props.type
    const onChangeHeart = () => {
        console.log('itemheart',item.heart)
        dispatch({ type: type === 'add' ? 'ADDHEART' : 'REMOVE_HEART', heartARR: item })
    }
    const navigation = props.navigation
    const onNavigation = () => {
        type === 'add' ?
            navigation.navigate('ScheduleDetails',
                { id: item.id }
            ) || dispatch({ type: 'ADDSCHEDULEITEM', ScheduleItem: item.imgday })
            : null
    }
    const dispatch = useDispatch()
    return (
        <TouchableOpacity
            onPress={() => onNavigation()}
            style={{ backgroundColor: 'white', marginBottom: scale(10), borderRadius: scale(5) }}
        >
            <View style={AppStyle.StylePersonalPage.SeeIMG}>
                <Image
                    source={{ uri: item.img1 }}
                    style={AppStyle.StylePersonalPage.img7}
                />
                <View style={AppStyle.StylePersonalPage.SeeIMG1}>
                    <Image
                        source={{ uri: item.img2 }}
                        style={AppStyle.StylePersonalPage.img8}
                    />
                    <View style={AppStyle.StylePersonalPage.viewIMG}>
                        <Image
                            source={{ uri: item.img3 }}
                            style={AppStyle.StylePersonalPage.img3}
                        />
                        <Image
                            source={{ uri: item.img4 }}
                            style={AppStyle.StylePersonalPage.img3}
                        />
                    </View>
                </View>
            </View>
            <View style={AppStyle.StyleSeeMoreSchedule.viewIMG2}>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <View style={AppStyle.StyleSeeMoreSchedule.viewText}>
                        <Text style={AppStyle.StylePromotionDetails.bold}>{item.text1} </Text>
                        <Text style={{ color: '#494949' }}>({item.text2})</Text>
                    </View>
                    <View style={AppStyle.StyleSeeMoreSchedule.viewText}>
                        <Image
                            source={{ uri: item.avatar }}
                            style={AppStyle.StyleSeeMoreSchedule.img4}
                        />
                        <View>
                            <Text style={AppStyle.StylePromotionDetails.colorblack}>{item.name}</Text>
                            <Text style={{ color: '#494949' }}>{item.time}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginRight: 15 }}>
                    <View style={AppStyle.StyleSeeMoreSchedule.content}>
                        <Image
                            source={require('../../src/img/location.png')}
                            style={AppStyle.StyleSeeMoreSchedule.img5}
                        />
                        <Text style={{ color: '#3076FE' }}>Việt Nam</Text>
                    </View>
                    <View style={AppStyle.StyleSeeMoreSchedule.viewText1}>
                        <Text style={AppStyle.StyleSeeMoreSchedule.text1}>{item.price}</Text>
                    </View>
                </View>

            </View>
            <View style={AppStyle.StyleSeeMoreSchedule.footer}>
                <TouchableOpacity>
                    <Image
                        source={require('../../src/img/img23.png')}
                        style={AppStyle.StyleSeeMoreSchedule.img6}
                    />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => onChangeHeart()}>
                    <Image
                        source={
                            item.heart ?
                                require('../../src/img/heartred.png')
                                :
                                require('../../src/img/heart.png')
                        }
                        style={AppStyle.StyleSeeMoreSchedule.img7}
                    />
                </TouchableOpacity>
            </View>

        </TouchableOpacity>


    )
}
export default Schedule;


