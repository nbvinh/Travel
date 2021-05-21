import { useHeaderHeight } from "@react-navigation/stack";
import moment from "moment";
import 'moment/min/locales'
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import ImageHeader from "../ImageHeader";
import dulieu from "./Dulieu";
import styles from "./styles";
const Walkingschedule = ({ navigation }) => {
    const dispatch = useDispatch()
    moment.locale('vi');
    const mo = moment().format('LT');
    const day = moment().format("DDMMYYYY");
    const date = Number(day)
    let subArr = null;
    let arrData = dulieu
    let maxArr = 0
    for (i = 0; i < arrData.length; i++) {
        subArr = date - arrData[i].convert
        if (subArr < 0) break;
        maxArr = arrData[i].convert
    }
    const _renderItem1 = (item, i, max, convertt) => {
        const str = item.gio.replace(":", ".");
        const cvitemgio = Number(str) + item.ngay
        const strmo = mo.replace(":", ".");
        const cvdate = Number(strmo) + Number(day)
        console.log(maxArr)
        return (
            <View style={{ flex: 1 }}>
                <Text style={[styles.time, maxArr === convertt ? max === cvitemgio ? { color: '#E83F00' } : cvitemgio <= cvdate ? { color: '#A0A0A0' } : { color: '#FFB498' } : cvdate - cvitemgio < 0 ? { color: '#FFB498' } : { color: '#A0A0A0' }]}>{item.gio}</Text>
                <Text style={[styles.label, maxArr === convertt ? max === cvitemgio ? { color: '#E83F00' } : cvitemgio <= cvdate ? { color: '#A0A0A0' } : { color: '#FFB498' } : cvdate - cvitemgio < 0 ? { color: '#FFB498' } : { color: '#A0A0A0' }]}>{item.batdau}</Text>
                {
                    item.chiphi != "" ?
                        <Text style={[styles.chiphi, maxArr === convertt ? max === cvitemgio ? { color: '#E83F00' } : cvitemgio <= cvdate ? { color: '#A0A0A0' } : { color: '#FFB498' } : cvdate - cvitemgio < 0 ? { color: '#FFB498' } : { color: '#A0A0A0' }]}>{item.chiphi}</Text>
                        : null
                }
                {
                    item.dichuyen ?
                        <Text style={[styles.chiphi, maxArr === convertt ? max === cvitemgio ? { color: '#E83F00' } : cvitemgio <= cvdate ? { color: '#A0A0A0' } : { color: '#FFB498' } : cvdate - cvitemgio < 0 ? { color: '#FFB498' } : { color: '#A0A0A0' }]}>{item.dichuyen}</Text>
                        : null
                }
                <View style={[styles.viewStar, cvitemgio <= cvdate ? { opacity: 1 } : { opacity: 0.5 }]}>
                    <Text style={styles.star}>{item.sao}</Text>
                    {
                        item.sao ?
                            <Image
                                style={styles.imgstar}
                                source={require('../../img/star.png')}
                            />
                            : null
                    }
                </View>
                <View style={styles.STT}>
                    <Text style={styles.textstt}>{item.dayid + 1}</Text>
                </View>
                <View style={styles.straightLine} />
            </View>
        )
    }
    const _renderItem = ({ item, index }) => {
        let sub = null;
        const strmo = mo.replace(":", ".");
        let a = date + Number(strmo)
        let arr = item.thongtin
        let max = 0
        for (i = 0; i < arr.length; i++) {
            let cvitemgio = Number(arr[i].gio.replace(":", ".")) + arr[i].ngay
            sub = a - cvitemgio
            if (sub < 0) break;
            max = cvitemgio
        }
        let convertt = item.convert
        return (
            <View style={styles.container}>
                <Text style={[styles.day, item.convert > date ? { color: '#FFB498' } : { color: '#A0A0A0' }]}>Ngày {index + 1}: {item.ngay}</Text>
                <FlatList
                    data={item.thongtin}
                    keyExtractor={(e, index) => index}
                    renderItem={({ item, i }) => _renderItem1(item, i, max, convertt)}
                />
            </View>
        )
    }
    const footer = () => {
        return (
            <View>
                <TouchableOpacity style={[styles.footer, maxArr < date ? { opacity: 1 } : { opacity: 0.5 }]}>
                    <Text style={styles.congratulation}>Chúc mừng bạn đã hoàn thành chuyến đi</Text>
                </TouchableOpacity>
                <View style={styles.end}>
                    <Text style={styles.spent}>Đã chi :
                        <Text style={styles.price}> 7,860,00 đ/2 người</Text>
                    </Text>
                    <View style={styles.RewardPoints}>
                        <Text style={styles.point}>Điểm thưởng: 116
                            <Image
                                style={styles.imgstar}
                                source={require('../../img/star.png')}
                            />
                        </Text>
                        <TouchableOpacity style={styles.evaluate}>
                            <Text style={styles.textevaluate}>Đánh giá chuyến đi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Lịch trình đang đi"}
                left={true}
            />
        ),
    });
    return (
        <View style={[AppStyle.StyleProfile.body, { backgroundColor: '#E5E5E5' }]}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <FlatList
                data={dulieu}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={_renderItem}
                ListFooterComponent={footer}
            />
        </View>
    )
}
export default Walkingschedule;

