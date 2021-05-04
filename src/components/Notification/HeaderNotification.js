import React, { useState } from "react";
import { View, TextInput, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')
const HeaderNotification = (props) => {
    const onNotification = props.onNotification
    const imgNotification = props.imgNotification
    const text = props.text
    return (
        <View style={styles.container}>
            <View style={{
                alignItems: 'center',
                flexDirection: 'row',
                flex:1,
                marginTop:scale(10)
            }}>
                <Text style={styles.cancel}></Text>
                <Text style={styles.content}>{text}</Text>
                <TouchableOpacity style={styles.save}>
                    <Image
                        source={imgNotification}
                        style={styles.img}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default HeaderNotification;
const styles = StyleSheet.create({
    container: {
        flex: 1.3,
        height: verticalScale(60),

        backgroundColor: 'white',
    },
    content: {
        textAlign: 'center',
        flex: 1.3,
        fontSize: width / 23.4375,
        fontWeight: '700',
    },
    cancel: {
        color: '#828282',
        fontWeight: '400',
        fontSize: scale(12),
    },
    save: {
        width: scale(16),
        height: scale(13),
        marginRight: scale(10),
    },
    img: {
        width: '100%',
        height: '100%'
    }

})