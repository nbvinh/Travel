import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, StatusBar, FlatList } from "react-native";
import { scale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
import AppStyle from "../../theme/index";
import Header from "../Header";
import dulieu from "./Dulieu";
import styles from "./styles";
const Walkingschedule = ({ navigation }) => {
    const dispatch = useDispatch()
    const _renderItem1 = ({ item, index }) => {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.time}>{item.gio}</Text>
                <Text style={styles.label}>{item.batdau}</Text>
                {
                    item.chiphi != "" ?
                        <Text style={styles.chiphi}>{item.chiphi}</Text>
                        : null
                }
                <View style={styles.viewStar}>
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
                    <Text style={styles.textstt}>{index + 1}</Text>
                </View>
                <View style={styles.straightLine} />
            </View>
        )
    }
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.day}>Ngày {index + 1}: {item.ngay}</Text>
                <FlatList
                    data={item.thongtin}
                    keyExtractor={(e, index) => index}
                    renderItem={_renderItem1}
                />
            </View>
        )
    }
    const footer = () => {
        return (
            <View>
                <TouchableOpacity style={styles.footer}>
                    <Text style={styles.congratulation}>Chúc mừng bạn đã hoàn thanh chuyến đi</Text>
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
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <Header text={'Lịch trình đang đi'} onBack={() => navigation.goBack()} />
            <View style={AppStyle.StyleProfile.body}>
                <FlatList
                    data={dulieu}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    renderItem={_renderItem}
                    ListFooterComponent={footer}
                />
            </View>
        </SafeAreaView>
    )
}
export default Walkingschedule;

