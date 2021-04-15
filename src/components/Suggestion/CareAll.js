import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import HeaderCare from "./HeaderCare";
import Care2 from "./Care2";
const CareAll = ({ navigation }) => {
    const data = useSelector(store => store.Suggestion.data)
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
            <View style={AppStyle.StyleHome.scrollview}>
                <HeaderCare text={'Có thể bạn quan tâm'} onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={(item) => <Care2 item={item} />}
                    />

                </View>
            </View>
        </SafeAreaView>
    )
}
export default CareAll;
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
})
