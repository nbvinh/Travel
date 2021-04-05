
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AppStyle from "../../theme/index";
const { height, width } = Dimensions.get('screen')
const DecemberDestination = () => {
    const dataheader = useSelector(store => store.DecemberDestination.data)
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <View key={item.id.toString()} style={{ marginRight: 20 }}>
                            <Image
                                source={{ uri: item.img }}
                                style={AppStyle.StyleSchedule.img6}
                            />
                            <Text style={AppStyle.StyleSchedule.text3}>{item.text},{item.text1}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default DecemberDestination;