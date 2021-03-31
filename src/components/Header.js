import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity } from "react-native";

const Header = (props) => {
    const onBack=props.onBack
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={()=>onBack()}>
                <Image
                    source={require('../img/arrow-left.png')}
                    style={{ width: 16, height: 16, marginLeft: 20 }}
                />
            </TouchableOpacity>
        </View>
    )
}
export default Header;