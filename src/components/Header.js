import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity,Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')
const Header = (props) => {
    const onBack=props.onBack
    const text=props.text
    return (
        <View style={{ flex: 1, alignItems: 'center',flexDirection:'row' }}>
            <TouchableOpacity onPress={()=>onBack()}>
                <Image
                    source={require('../img/arrow-left.png')}
                    style={{ width: width/23.4375, height: height/50.75, marginLeft: width/18.75 }}
                />
            </TouchableOpacity>
            <Text style={{textAlign:'center',flex:1,marginRight:width/10.41666,fontSize:width/23.4375,fontWeight:'700'}}>{text}</Text>
        </View>
    )
}
export default Header;