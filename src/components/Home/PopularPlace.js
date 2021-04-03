import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput,ScrollView, FlatList } from "react-native";
import { useSelector,useDispatch } from "react-redux";
const { height,width } = Dimensions.get('screen')
const PopularPlace =()=>{
    const dataheader = useSelector(store => store.PopularPlace.data)
    return(
        <ScrollView horizontal ={true}>
            {
                dataheader && dataheader.map((item)=>{
                    return(
                        <View key={item.id.toString()} style={{marginRight:20}}>
                            <Image 
                                source={{uri: item.img}}
                                style={{width:width/2.5,height:height/4.06,borderRadius:5}}
                            />
                            <Text style={{color:'white',fontSize:height/62.46,position:'absolute',bottom:8,left:20,fontWeight:'bold'}}>{item.text}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default PopularPlace;