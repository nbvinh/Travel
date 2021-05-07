import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, StatusBar, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Care2 from "./Care2";
import { scale } from "react-native-size-matters";
import ButtonCF from "./ButtonCF";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../ImageHeader";
const CareAll = ({ navigation }) => {
    const data = useSelector(store => store.Suggestion.data)
    const dispatch = useDispatch()
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Có thể bạn quan tâm"}
                left={true}
                right={true}
            />
        ),
    });
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <FlatList
                horizontal={false}
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => <Care2 item={item} />}
                ListFooterComponent={<ButtonCF type={"Xong"} />}
            />

        </View>
    )
}
export default CareAll;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: scale(10)
    },
})
