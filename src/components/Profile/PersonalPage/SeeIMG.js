import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import TextHome from "../../TextHome";
import AppStyle from "../../../theme/index";
const { height, width } = Dimensions.get('screen')
const SeeIMG = ({ navigation }) => {
    return (
        <View style={{ marginHorizontal: verticalScale(20) }}>
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
        </View>
    )
}
export default SeeIMG;


