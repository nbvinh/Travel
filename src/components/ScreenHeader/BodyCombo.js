import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import AppStyle from "../../theme";
import styles from "./styles";
import { TextHome, Hotel, Schedule } from "../Home/index";
import { useNavigation } from '@react-navigation/native';
const BodyCombo = (props) => {
    const navigation = useNavigation()
    const data = useSelector(store => store.dataheader.hotel)
    const dataSchedule = useSelector(store => store.Schedule.data)
    const dataHue = useSelector(store => store.dataheader.dataSchedule)
    const dataHaGiang = useSelector(store => store.dataheader.dataHaGiang)
    return (
        <View>
            <TextHome text1={'Gợi ý tại điểm đến'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen:'SeeMorePopularPlace'})} />
            <ScrollView horizontal={true} style={styles.body}>
                {
                    data && data.map((item) => {
                        return (
                            <View key={item.id.toString()} style={{ marginRight: scale(16) }}>
                                <Image
                                    source={{ uri: item.img }}
                                    style={AppStyle.StyleSchedule.img6}
                                />
                                <Text style={AppStyle.StyleSchedule.text3}>{item.text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
            <TextHome text1={'Combo giá rẻ'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen:'SeeMoreSchedule'})} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Schedule data={dataSchedule} />
            </View>
            <TextHome text1={'Combo Huế'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen:'SeeMoreSchedule'})} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Schedule data={dataHue} />
            </View>
            <TextHome text1={'Combo Hà Giang'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate("HomeStack", { screen:'SeeMoreSchedule'})} />
            <View style={AppStyle.StyleHome.marginLeft}>
                <Schedule data={dataHaGiang}/>
            </View>
        </View>
    )
}
export default BodyCombo;