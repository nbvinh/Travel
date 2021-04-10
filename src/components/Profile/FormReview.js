import React, { useState, useEffect } from "react";
import { View, Text, Modal, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions, FlatList } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";
const { width, height } = Dimensions.get('screen')

const FormReview = (props) => {
    const dispatch = useDispatch()
    const modalReview = useSelector(store => store.people.modalReview)
    const data = useSelector(store => store.people.Star)
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalReview}
        >
            <StatusBar backgroundColor={'rgba(0, 0, 0, 0.3)'} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'MODALREVIEW' })} />
                <View style={styles.content1}>
                    <View style={styles.content}>
                        <Text style={styles.text3}>Đánh giá của chúng tôi</Text>
                        <FlatList
                            style={{ marginVertical: scale(10) }}
                            horizontal={true}
                            data={data}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity onPress={() => {
                                        dispatch({ type: 'CHOOSE', id: item.id })
                                    }}>
                                        {
                                            item.check ?
                                                <Image
                                                    source={require('../../img/star.png')}
                                                    style={{ width: scale(20), height: scale(19.3), marginRight: scale(10) }}
                                                />
                                                :
                                                <Image
                                                    source={require('../../img/star1.png')}
                                                    style={{ width: scale(20), height: scale(19.3), marginRight: scale(10) }}
                                                />
                                        }
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item) => item.id.toString()}
                        />

                    </View>
                    <View style={styles.content2}>
                        <TouchableOpacity style={styles.tou2} onPress={() => dispatch({ type: 'MODALREVIEW' })}>
                            <Text style={styles.text2}>Đánh giá ngay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tou2} onPress={() => dispatch({ type: 'MODALREVIEW' })}>
                        <Text style={styles.text2}>Nhắc tôi sau</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.tou2} onPress={() => dispatch({ type: 'MODALREVIEW' })}>
                        <Text style={styles.text2}>Không nhắc lại</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.tou1} onPress={() => dispatch({ type: 'MODALREVIEW' })} />
            </View>
        </Modal>
    )
}
export default FormReview;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        alignItems: 'center',
        height: '45%'
    },
    content1: {
        backgroundColor: 'white',
        width: scale(270),
        height: scale(210),
        borderRadius: scale(5),
    },
    content2: {
        height: '55%',
    },
    tou2: {
        width: '100%',
        height: '33.33333%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: verticalScale(0.5),
    },
    text2: {
        fontWeight:'400',
        fontSize:scale(14)
    },
    text3: {
        fontSize: scale(14),
        fontWeight: '400',
        marginVertical: scale(10)
    },
    tou1: {
        height: scale(height) - scale(135),
        width: '100%',
    }
})