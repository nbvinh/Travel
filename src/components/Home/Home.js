import React, { useEffect, useState } from "react";
import { View, StatusBar, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, Image, TextInput, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import ImgHeader from "./ImgHeader";
import Promotion from "./Promotion";
import TextHome from "../TextHome";
import Schedule from "./Schedule";
import PopularPlace from "./PopularPlace";
import Experience from "./Experience";
import Hotel from "./Hotel";
import DecemberDestination from "./DecemberDestination";
import AppStyle from "../../theme/index";
const { height, width } = Dimensions.get('screen')
const Home = ({ navigation }) => {
    const [search, setSearch] = useState('')
    return (
        <SafeAreaView style={AppStyle.StyleHome.container}>
            <StatusBar backgroundColor='white' barStyle={"dark-content"} />
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
                        <TouchableOpacity style={AppStyle.StyleHome.touchable} onPress={()=> navigation.navigate('Suggestion')}>
                            <Text style={AppStyle.StyleHome.text3}>Xem gợi ý</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={AppStyle.StyleHome.touchable}>
                            <Text style={AppStyle.StyleHome.text3}>Tạo lịch trình</Text>
                        </TouchableOpacity>
                    </View>
                    <TextHome text1={'Khuyến Mại'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMorePromotions')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Promotion />
                    </View>
                    <TextHome text1={'Lịch trình gần đây'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreSchedule')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Schedule />
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
                        <DecemberDestination />
                    </View>
                    <TextHome text1={'Khách sạn & Resort'} text2={'Xem Thêm >'} onSeeMore={() => navigation.navigate('SeeMoreHotel')} />
                    <View style={AppStyle.StyleHome.marginLeft}>
                        <Hotel />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;
