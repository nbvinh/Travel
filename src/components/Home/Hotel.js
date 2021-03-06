import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
const { height, width } = Dimensions.get('screen')
const Hotel = (props) => {
    const dataheader = props.data
    const type = props.type
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <View key={item.id.toString()} style={[AppStyle.StyleHotel.container, { marginBottom: type === "home" ? scale(30) : null }]}>
                            <Image
                                source={{ uri: item.img }}
                                style={AppStyle.StyleHotel.img1}
                            />
                            <View style={AppStyle.StyleHotel.content}>
                                <Text style={AppStyle.StyleHotel.text1}>{item.text2}</Text>
                                <View style={AppStyle.StyleHotel.content2}>
                                    <Image
                                        source={require('../../img/star.png')}
                                        style={AppStyle.StyleHotel.star}
                                    />
                                    <Image
                                        source={require('../../img/star.png')}
                                        style={AppStyle.StyleHotel.star}
                                    />
                                    <Image
                                        source={require('../../img/star.png')}
                                        style={AppStyle.StyleHotel.star}
                                    />
                                    <Image
                                        source={require('../../img/star.png')}
                                        style={AppStyle.StyleHotel.star}
                                    />
                                    <Image
                                        source={require('../../img/star.png')}
                                        style={AppStyle.StyleHotel.star}
                                    />
                                </View>
                            </View>
                            <Text style={AppStyle.StyleHotel.text2}>{item.text}</Text>
                            <View style={{ flexDirection: 'row', marginBottom: scale(3) }}>
                                <Image
                                    source={require('../../img/location.png')}
                                    style={AppStyle.StyleHotel.img2}
                                />
                                <Text style={AppStyle.StyleHotel.text3}>{item.text1}</Text>
                            </View>
                            <Text style={AppStyle.StyleHotel.text4}>{item.price}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default Hotel;