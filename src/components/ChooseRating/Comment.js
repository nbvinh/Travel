import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity, Text, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { scale, verticalScale } from "react-native-size-matters";
import styles from "./styles";
const Comment = (props) => {
    const [title, setTitle] = useState('')
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    return (
        <View style={styles.body}>
            <View style={styles.comment}>
                <Text style={styles.title}>Tiêu đề</Text>
                <TextInput
                    onChangeText={(value) => setTitle(value)}
                    style={styles.textInput}
                    multiline={true}
                    maxLength={50}
                />
                <Text style={styles.title}>Nhận xét</Text>
                <TextInput
                    onChangeText={(value) => setComment(value)}
                    style={styles.textInput1}
                    multiline={true}
                    maxLength={160}
                />
            </View>
        </View>
    )
}
export default Comment;