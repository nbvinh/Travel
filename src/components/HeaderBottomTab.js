import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity,Dimensions } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')
const HeaderBottomTab = (props) => {
    const onBack=props.onBack
    const text=props.text
    return (
        <View style={{ flex:1,height:verticalScale(50), alignItems: 'center',justifyContent:'center',flexDirection:'row',backgroundColor:'white' }}>
            <Text style={{fontSize:width/23.4375,fontWeight:'700'}}>{text}</Text>
        </View>
    )
}
export default HeaderBottomTab;