import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, Text, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { scale, verticalScale } from "react-native-size-matters";
import styles from "./styles";
import ImagePicker from "react-native-image-crop-picker";
const Footer = (props) => {
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const [img, setImg] = useState('')
    const dispatch = useDispatch()
    const onPicture = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImg(image.path)
        });
    }
    console.log(img)
    return (
        <View style={styles.footer}>
            <Text style={styles.addImage}>Thêm ảnh</Text>
            <TouchableOpacity onPress={() => onPicture()}>
                <Image
                    source={
                        img === '' ?
                            require('../../img/vinh55.png')
                            :
                            { uri: img }
                    }
                    style={styles.img}
                />
            </TouchableOpacity>
        </View>
    )
}
export default Footer;