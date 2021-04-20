import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { scale, verticalScale } from "react-native-size-matters";
const Star = (props) => {
    const item = props.item
    const dispatch = useDispatch()
    return (
        <TouchableOpacity style={styles.star} onPress={() => {
            dispatch({ type: 'CHOOSE', id: item.id })
        }}>
            {
                item.check ?
                    <Image
                        source={require('../../img/star2.png')}
                        style={{ width: scale(20), height: scale(19.3), marginRight: scale(10) }}
                    />
                    :
                    <Image
                        source={require('../../img/star1.png')}
                        style={{ width: scale(20), height: scale(19.3), marginRight: scale(10) }}
                    />
            }
        </TouchableOpacity>
    )
}
export default Star;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    star: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})