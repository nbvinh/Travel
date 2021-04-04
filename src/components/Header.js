import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";

const Header = (props) => {
    const onBack=props.onBack
    const text=props.text
    return (
        <View style={{ flex: 1, alignItems: 'center',flexDirection:'row' }}>
            <TouchableOpacity onPress={()=>onBack()}>
                <Image
                    source={require('../img/arrow-left.png')}
                    style={{ width: 16, height: 16, marginLeft: 20 }}
                />
            </TouchableOpacity>
            <Text style={{textAlign:'center',flex:1,marginRight:36,fontSize:16,fontWeight:'700'}}>{text}</Text>
        </View>
    )
}
export default Header;