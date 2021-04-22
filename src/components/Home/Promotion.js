import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
const { height,width } = Dimensions.get('screen')
const Promotion = () => {
    const dataheader = useSelector(store => store.Promotion.data)
    return (
        <ScrollView horizontal={true}>
            {
                dataheader && dataheader.map((item) => {
                    return (
                        <Image 
                            key={item.id.toString()}
                            source={item.img}
                            style={{width:width/1.25,height:height/5.41,marginRight:scale(16),borderRadius:5}}
                        />
                    )
                })
            }
        </ScrollView>
    )
}
export default Promotion;