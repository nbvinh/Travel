import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, TextInput, Image, StyleSheet } from "react-native";
import { verticalScale, scale } from "react-native-size-matters";
const { width, height } = Dimensions.get('screen')
const InputItem = (props) => {
    const [search, setSearch] = useState('')
    const navigation = props.navigation
    const onSearch =(value) =>{
        
    }
    return (
        <View style={styles.container}>
            <Image
                source={require('../../img/Vector.png')}
                style={styles.img}
            />
            <TextInput
                placeholder={'Bạn muốn đi đâu?'}
                maxLength={20}
                onChangeText={(value) => onSearch(value)}
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