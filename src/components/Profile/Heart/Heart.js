import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Header from '../../Header'
import { useSelector } from "react-redux";
import AppStyle from "../../../theme/index";
const { height, width } = Dimensions.get('screen')
const Heart = ({ navigation }) => {
    const heart = useSelector(store => store.Schedule.heartARR)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <Header text={'Thông tin cá nhân'} />
                <View style={{ flex: 10, marginHorizontal: verticalScale(20), marginVertical: scale(20) }}>
                    {heart && heart.map((item) => {
                        return (
                            <View key={item.id} style={AppStyle.StylePersonalPage.SeeIMG}>
                                {console.log('item',item)}
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
                                        <TouchableOpacity style={AppStyle.StylePersonalPage.plus}>
                                            <Image
                                                source={require('../../../img/vinh8.png')}
                                                style={AppStyle.StylePersonalPage.img4}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                    <View style={AppStyle.StylePersonalPage.SeeIMG}>
                        <Image
                            source={{ uri: 'https://mytourcdn.com/upload_images/Image/Mai%20Loc/Ch%C3%B9m%20%E1%BA%A3nh%20b%C3%A3i%20bi%E1%BB%83n%20vi%E1%BB%87t%20nam%20%C4%91%E1%BA%B9p%20ng%E1%BB%A1%20ng%C3%A0ng/Ph%C3%BA%20qu%E1%BB%91c.jpg' }}
                            style={AppStyle.StylePersonalPage.img7}
                        />
                        <View style={AppStyle.StylePersonalPage.SeeIMG1}>
                            <Image
                                source={{ uri: 'https://anhdep123.com/wp-content/uploads/2020/05/h%C3%ACnh-bi%E1%BB%83n-%C4%91%E1%BA%B9p.jpg' }}
                                style={AppStyle.StylePersonalPage.img8}
                            />
                            <View style={AppStyle.StylePersonalPage.viewIMG}>
                                <Image
                                    source={{ uri: 'https://dzdigi.com/wp-content/uploads/2020/10/tai-hinh-anh-bien-dep-nhat-tren-the-gioi-lam-hinh-nen-2.jpg' }}
                                    style={AppStyle.StylePersonalPage.img3}
                                />
                                <Image
                                    source={{ uri: 'https://hoidulich.net/wp-content/uploads/2019/11/47582947_138363830499946_5911848426221422144_n-882x800.jpg' }}
                                    style={AppStyle.StylePersonalPage.img3}
                                />
                                <TouchableOpacity style={AppStyle.StylePersonalPage.plus}>
                                    <Image
                                        source={require('../../../img/vinh8.png')}
                                        style={AppStyle.StylePersonalPage.img4}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {/* <View style={AppStyle.StyleSeeMoreSchedule.viewIMG2}>
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
                                    source={require('../../../img')}
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
                                source={require('../../../img/img23.png')}
                                style={AppStyle.StyleSeeMoreSchedule.img6}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            dispatch({ type: 'ADDHEART', heart: item })
                        }}>
                            <Image
                                source={require('../../../img/heart.png')}
                                style={AppStyle.StyleSeeMoreSchedule.img7}
                            />
                        </TouchableOpacity>
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Heart;


