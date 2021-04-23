import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, TextInput, Image, StyleSheet } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
const { width, height } = Dimensions.get('screen')
const InputItem = (props) => {
    const search = useSelector(store => store.Search.search)
    const navigation = props.navigation
    const dispatch = useDispatch()
    const filterItems = (query) => {
        return data.filter((el) =>
            el.provincial.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    }
    const data = useSelector(store => store.Search.data)
    const onSearch = (value) => {
        dispatch({ type: 'NEWARR', newarr: filterItems(value) })
        dispatch({ type: 'SEARCH', search: value })
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../../img/Vector.png')}
                style={styles.img}
            />
            <TextInput
                placeholder={'Tìm nhà hàng?'}
                maxLength={20}
                onChangeText={(value) => onSearch(value)}
                value={search}
                style={styles.textInput}
            />
            <Text onPress={() => navigation.goBack()} style={styles.cancel}>Hủy</Text>
        </View>
    )
}
export default InputItem;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: scale(40),
        width: width,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: scale(20)
    },
    textInput: {
        height: scale(40),
        fontSize: scale(12),
        width: width - scale(20) - scale(20) - scale(25),
        marginLeft: scale(4)
    },
    img: {
        width: scale(16),
        height: scale(14),
        marginLeft: scale(10)
    },
    cancel: {
        fontSize: scale(12),
        color: '#828282',
        marginRight: scale(10),
        width: scale(25),
        textAlign: 'center'
    }
})