import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image, Animated, Dimensions, Easing } from "react-native";
const { width, height } = Dimensions.get('screen')
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const ScreenFirst = ({ navigation }) => {
    let Okgo1 = new Animated.Value(-height / 3)
    let Okgo2 = new Animated.Value(0)
    let Clouds1 = new Animated.Value(-width / 3)
    let Clouds2 = new Animated.Value(width)
    let interpolate = new Animated.Value(-1)
    useEffect(() => {
        animated1()
        animated2()
        animated3()
        setTimeout(() => {
            navigation.navigate('ScreenSecond')
        }, 3000)
    }, [])
    const animated3 = () => {
        const anim0 = Animated.timing(interpolate,
            {
                toValue: -1,
                duration: 1000,
                useNativeDriver: false
            }
        )
        const anim1 = Animated.timing(interpolate,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }
        )
        const anim2 = Animated.timing(interpolate,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            }
        )
        const final = Animated.sequence([anim0, anim1, anim2])
        Animated.loop(final).start()
    }
    const animated2 = () => {
        const anim1 = Animated.timing(Okgo1,
            {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false
            }
        )
        const anim2 = Animated.timing(Okgo2, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
        })
        Animated.sequence([anim1, anim2]).start()
    }
    const animated1 = () => {
        const anim1 = Animated.timing(Clouds1,
            {
                toValue: 0,
                duration: 3000,
                useNativeDriver: false
            }
        )
        const anim2 = Animated.timing(Clouds2, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: false
        })
        Animated.parallel([anim1, anim2]).start()
    }
    const marginTop = Okgo1
    const opacity = Okgo2
    const marginLeft = Clouds1
    const marginRight = Clouds2
    const rotate = interpolate.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: ['-360deg', '0deg', '360deg']
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <Animated.Image
                        source={require('../../img/may.png')}
                        style={[styles.img1, { marginLeft }]}
                    />
                    <Animated.View style={[styles.imgfather, { marginTop }]}>
                        <Image
                            source={require('../../img/okgoCIP-05.png')}
                            style={styles.img2}
                        />
                        <Animated.Image
                            source={require('../../img/okgoCIP-06.png')}
                            style={[styles.img3, { opacity }]}
                        />
                    </Animated.View>
                    <Animated.Image
                        source={require('../../img/may2.png')}
                        style={[styles.img4, { marginRight }]}
                    />
                </View>
                <View style={styles.middle}>
                    <Image
                        source={require('../../img/Group(5).png')}
                        style={styles.img5}
                    />
                    <Animated.Image
                        source={require('../../img/Group(4).png')}
                        style={[styles.img6, { transform: [{ rotate }] }]}
                    />
                </View>
                <Animated.View style={[styles.footer]}>
                    <Image
                        source={require('../../img/Group.png')}
                        style={styles.img7}
                    />
                    <Text style={styles.text}>Welcome!</Text>
                </Animated.View>
            </View>

        </SafeAreaView>
    )
}
export default ScreenFirst;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
        flex: 1
    },
    header: {
        flex: 1,
        flexDirection: 'row',
    },
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1.2,
    },
    img1: {
        width: scale(59.41),
        height: verticalScale(11.39),
        position: 'absolute',
        bottom: verticalScale(10),
        left: verticalScale(20)
    },
    imgfather: {
        position: 'absolute',
        top: '20%',
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    img2: {
        width: scale(76.02),
        height: scale(98.11),
        marginBottom: moderateScale(5)
    },
    img3: {
        width: scale(73),
        height: verticalScale(18),
    },
    img4: {
        position: 'absolute',
        right: 0,
        width: scale(66),
        height: verticalScale(11),
        top: '15%'
    },
    img5: {
        width: '100%',
        height: '100%'
    },
    img6: {
        height: verticalScale(217),
        width: verticalScale(217),
        position: 'absolute'
    },
    img7: {
        width: '100%',
        height: '95%'
    },
    text: {
        fontSize: scale(12),
        position: 'absolute',
        bottom: 0,
        left: '45%',
        color: '#4F3018'
    }

})