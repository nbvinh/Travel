import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Button, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Header from './Header'
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../src/theme/index";
const Schedule = (props) => {
    const item = props.item
    const type = props.type
    const typeNavigation = props.typeNavigation
    const onChangeHeart = () => {
        console.log('itemheart', item.heart)
        dispatch({ type: type === 'add' ? 'ADDHEART' : 'REMOVE_HEART', heartARR: item })
    }
    const navigation = props.navigation
    const onNavigation = () => {
        typeNavigation === 'add' ?
            navigation.navigate('ScheduleDetails',
                { item: item }
            ) || dispatch({ type: 'ADDSCHEDULEITEM', ScheduleItem: item.imgday })
            :
            typeNavigation === 'finish' ?
                navigation.navigate('Rating') || dispatch({ type: 'RATING', id: item.id })
                : null
    }
    const dispatch = useDispatch()
    const test = useSelector(store => store.people.test)
    return (
        <TouchableOpacity
            onPress={() => !test ? onNavigation() : null}
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
            <View style={[AppStyle.StyleSeeMoreSchedule.viewIMG2, { marginTop: scale(15) }]}>
                <Text style={{ fontSize: scale(12), fontWeight: '700', textAlign: 'center', marginLeft: scale(5) }}>{item.text1}
                    <Text style={{ color: '#494949', fontSize: scale(12) }}>({item.text2})</Text>
                </Text>
                <View style={AppStyle.StyleSeeMoreSchedule.content}>
                    <Image
                        source={require('../../src/img/location.png')}
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
            <View style={AppStyle.StyleSeeMoreSchedule.footer}>
                {
                    typeNavigation === 'finish' ?
                        <TouchableOpacity>
                            <Image
                                source={item.rating ? require('../../src/img/vinhfinish2.png') : require('../../src/img/vinhfinish.png')}
                                style={AppStyle.StyleSeeMoreSchedule.img8}
                            />

                        </TouchableOpacity>
                        : null
                }
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


