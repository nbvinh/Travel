import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, StatusBar, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import styles from "./styles";
import Comment from "./Comment";
import Footer from "./Footer";
import ImageHeader from "../ImageHeader";
import { useHeaderHeight } from "@react-navigation/stack";
import { scale } from "react-native-size-matters";
const Rating = ({ navigation }) => {
    const dispatch = useDispatch()
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [defaultRating, setDefaultRating] = useState(5);
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Đánh giá"}
                left={true}
                right={true}
                Rating={true}
            />
        ),
    });
    return (
        <ScrollView style={[AppStyle.StyleHome.scrollview, { backgroundColor: '#E5E5E5' }]}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={styles.star}>
                <FlatList
                    horizontal={true}
                    data={maxRating}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                activeOpacity={0.7}
                                onPress={() => setDefaultRating(item)}>
                                <Image
                                    source={item <= defaultRating ? require('../../img/star2.png') : require('../../img/star1.png')}
                                    style={{ width: scale(20), height: scale(19.3), marginRight: scale(10) }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={({ item, index }) => index}
                />
            </View>
            <Comment />
            <Footer />
        </ScrollView>
    )
}
export default Rating;