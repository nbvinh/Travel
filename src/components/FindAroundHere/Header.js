import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')
const HeaderCare = (props) => {
    const text = props.text
    const onBack = props.onBack
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onBack()}>
                <Image
                    style={styles.cancel}
                    source={require('../../img/vinh49.png')}
                />
            </TouchableOpacity>
            <Text style={styles.content}>{text}</Text>
            <Image
                style={styles.save}
                source={require('../../img/vinh54.png')}
            />
        </View>
    )
}
export default HeaderCare;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: verticalScale(50),
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop:scale(10)
    },
    content: {
        textAlign: 'center',
        flex: 1,
        fontSize: width / 23.4375,
        fontWeight: '700'
    },
    cancel: {
        width: scale(6.61),
        height: scale(12),
        marginLeft: scale(10)
    },
    save: {
        width: scale(12),
        height: scale(12),
        marginRight: scale(10)
    }

})