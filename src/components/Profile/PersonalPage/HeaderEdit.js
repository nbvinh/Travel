import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')
const HeaderEdit = (props) => {
    const onBack = props.onBack
    const text = props.text
    return (
        <View style={styles.container}>
            <Text style={styles.cancel} onPress={()=>onBack()}>Huỷ</Text>
            <Text style={styles.content}>{text}</Text>
            <Text style={styles.save}>Lưu</Text>
        </View>
    )
}
export default HeaderEdit;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: verticalScale(50),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    content: {
        textAlign: 'center',
        flex: 1,
        fontSize: width / 23.4375,
        fontWeight: '700'
    },
    cancel:{
        color:'#828282',
        fontWeight:'400',
        fontSize:scale(12),
        marginLeft:scale(10)
    },
    save:{
        color:'#FF5F24',
        fontWeight:'600',
        fontSize:scale(12),
        marginRight:scale(10)
    }

})