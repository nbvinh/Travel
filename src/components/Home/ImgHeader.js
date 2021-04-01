import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput,ScrollView, FlatList } from "react-native";
import { useSelector,useDispatch } from "react-redux";
const { height } = Dimensions.get('screen')
const ImgHeader =()=>{
    const dataheader = useSelector(store => store.dataheader.data)
    return(
        <ScrollView horizontal ={true}>
            {
                dataheader && dataheader.map((item)=>{
                    return(
                        <View key={item.id.toString()} style={{marginTop:height/40,marginRight:30}}>
                            <Image 
                                source={item.img}
                                style={{width:35,height:35}}
                            />
                            <Text style={{color:'white',fontSize:height/68,textAlign:'center'}}>{item.text}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default ImgHeader;