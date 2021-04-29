import React, { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { Hotel, ImgHeader, Promotion, TextHome, Schedule, PopularPlace, Experience, DecemberDestination } from "./index";
import AppStyle from "../../theme/index";
import Draggable from 'react-native-draggable';
import { scale } from "react-native-size-matters";
const { height, width } = Dimensions.get('screen')
const Home = ({ navigation, route }) => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const data = useSelector(store => store.Hotel.data)
    const DecemberDestinationArr = useSelector(store => store.DecemberDestination.data)
    const dataSchedule = useSelector(store => store.Schedule.data)
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <ScrollView style={AppStyle.StyleHome.scrollview}>
                <ImageBackground source={require('../../img/khampha.png')} style={{ height: height / 3.8 }}>
                    <View style={AppStyle.StyleHome.textHeader}>
                        <Text style={AppStyle.StyleHome.text1}>Khám phá</Text>
                        <Text style={AppStyle.StyleHome.text2}>Lên lịch trình, đặt vé máy bay, khách sạn, tìm kiếm các tour lịch và các hoạt động vui chơi giải trí</Text>
                    </View>
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <ImgHeader />
                    </View>
                    <View style={AppStyle.StyleHome.search}>
                        <Image
                            source={require('../../img/Vector.png')}
                            style={AppStyle.StyleHome.img}
                        />
                        <TextInput
                            placeholder={'Bạn muốn đi đâu?'}
                            maxLength={20}
                            onChangeText={(value) => setSearch(value)}
                            style={AppStyle.StyleHome.textinput}
                            onFocus={() => navigation.navigate('Search')}
                        />
                    </View>
                </ImageBackground>
                <View style={{ flex: 10 }}>
                    <View style={AppStyle.StyleHome.onpress}>
                        <TouchableOpacity style={AppStyle.StyleHome.touchable} onPress={() => navigation.navigate('Suggestion')}>
                            <Text style={AppStyle.StyleHome.text3}>Xem gợi ý</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.StyleHome.touchable} onPress={() => navigation.navigate('CreateSchedules')}>
                            <Text style={AppStyle.StyleHome.text3}>Tạo lịch trình</Text>
                        </TouchableOpacity>
                    </View>
                    <TextHome text1={'Khuyến Mại'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMorePromotions')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Promotion />
                    </View>
                    <TextHome text1={'Lịch trình gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Schedule data={dataSchedule} />
                    </View>
                    <TextHome text1={'Địa điểm phổ biến'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMorePopularPlace')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <PopularPlace />
                    </View>
                    <TextHome text1={'Trải Nghiệm nổi bật'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreExperience')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Experience />
                    </View>
                    <TextHome text1={'Điểm đến tháng 12'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreDecemberDestination')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <DecemberDestination data={DecemberDestinationArr} />
                    </View>
                    <TextHome text1={'Khách sạn & Resort'} text2={'Xem Thêm >'}
                        onSeeMore={() => {
                            dispatch({ type: 'TYPE', typeHotel: "Hotel" })
                            navigation.navigate('SeeMoreHotel', { dataHotel: data })
                        }}
                    />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Hotel data={data} type={"home"} />
                    </View>
                </View>
            </ScrollView>
            <Draggable x={width - scale(70)} y={height - scale(150)} minX={scale(10)} minY={scale(20)} maxX={width - scale(10)} maxY={height - scale(95)}>
                <TouchableOpacity style={AppStyle.StyleHome.touch} onPress={() => { Linking.openURL('https://t.me/UBGKenhThongBao') }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require('../../img/touchable.png')} />
                </TouchableOpacity>
            </Draggable>
        </SafeAreaView>
    )
}
export default Home;
