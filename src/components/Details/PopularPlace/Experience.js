import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../../theme/index";
const { height, width } = Dimensions.get('screen')
const Experience = () => {
    const item = useSelector(store => store.PopularPlace.item)
    return (
        <View style={AppStyle.StylePopularPlaceDetails.ProposedSchedule}>
            <ScrollView horizontal={true}>
                {
                    item.Experience && item.Experience.map((item) => {
                        return (
                            <View key={item.id.toString()} style={AppStyle.StyleExpenrience.container}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={AppStyle.StyleExpenrience.img1}
                                />
                                <Text style={AppStyle.StyleExpenrience.text1}>{item.text}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={require('../../../img/location.png')}
                                        style={AppStyle.StyleExpenrience.img2}
                                    />
                                    <Text style={AppStyle.StyleExpenrience.text2}>{item.text1}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
export default Experience;