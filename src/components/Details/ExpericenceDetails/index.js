import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { scale } from 'react-native-size-matters';
import { scaleW } from '../../../config/Ultils';
import TextHome from '../../TextHome';
import styles from './styles';

export default function ExperienceDetails({ navigation, route }) {
    const item = route.params.item
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground
                    source={{ uri: item.img }}
                    style={styles.imgheader}
                >
                    <TouchableOpacity style={styles.Back} onPress={() => navigation.goBack()}>
                        <Image
                            source={require('./../../../img/ChevronRight.png')}
                            style={styles.iconRight}
                        />
                    </TouchableOpacity>
                    <Text style={styles.label1}>{item.text}</Text>
                    <View style={{
                        flexDirection: 'row', position: 'absolute',
                        left: scale(16),
                        bottom: scale(16),
                    }}>
                        <Image
                            source={require('./../../../img/location1.png')}
                            style={styles.location}
                        />
                        <Text style={styles.address}>{item.text1} </Text>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.map}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.mapaddress}
                        region={{
                            latitude: item.mapaddress.latitude,
                            longitude: item.mapaddress.longitude,
                            latitudeDelta: 0.09,
                            longitudeDelta: 0.09,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: item.marker.latitude,
                                longitude: item.marker.longitude
                            }}
                        >
                            <Image
                                source={require('../../../img/locationred.png')}
                                style={{ width: scale(9.11), height: scale(13) }}
                            />
                        </Marker>
                    </MapView>
                </TouchableOpacity>
                <View style={styles.Introduce}>
                    <Image
                        source={item.introduce1}
                        style={styles.introduceimg}
                    />
                    <Image
                        source={item.introduce2}
                        style={styles.introduceimg}
                    />
                    <Image
                        source={item.introduce3}
                        style={styles.introduceimg}
                    />
                    <TouchableOpacity style={styles.plus}>
                        <Image
                            source={require('../../../img/plus.png')}
                            style={styles.imgHeader}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: scaleW(16) }}>
                    <Text style={styles.content1}>{item.content1}</Text>
                    <Text style={styles.label}>{item.label1}</Text>
                    <Text style={[styles.label, { marginVertical: scaleW(10) }]}>{item.label2}</Text>
                    <Text style={[styles.label, { marginLeft: scaleW(15) }]}>{item.label3}</Text>
                    <Text style={[styles.label, { marginLeft: scaleW(15) }]}>{item.label4}</Text>
                    <Text style={[styles.label, { marginLeft: scaleW(15), marginBottom: scaleW(20) }]}>{item.label5}</Text>
                    <Text style={styles.content1}>{item.content2}</Text>
                    <Text style={styles.label}>{item.label6}</Text>
                    <Text style={styles.label}>{item.label7}</Text>
                    <Text style={[styles.content1, { marginTop: scaleW(20) }]}>{item.content3}</Text>
                    <Text style={styles.text}>{item.text1}</Text>
                    <Text style={styles.label}>{item.label8}</Text>
                    <Text style={[styles.text, { marginTop: scaleW(20) }]}>{item.text2}</Text>
                    <Text style={styles.label}>{item.label9}</Text>
                    <Text style={[styles.text, { marginTop: scaleW(20) }]}>{item.text3}</Text>
                    <Text style={styles.label}>{item.label10}</Text>
                    <Text style={[styles.text, { marginTop: scaleW(20) }]}>{item.text4}</Text>
                    <Text style={styles.label}>{item.label11}</Text>
                </View>
                <TextHome text1={'Địa điểm đề xuất'} text2={'Xem Thêm >'}
                    onSeeMore={() => {
                        dispatch({ type: 'TYPE', typeHotel: "Hotel" })
                        navigation.navigate("HomeStack", { screen: 'SeeMoreHotel' })
                    }}
                />
                <ScrollView horizontal={true} style={{ marginHorizontal: scaleW(16) }}>
                    {item.offer && item.offer.map((e, index) => {
                        return (
                            <ImageBackground key={index} source={e.img1} style={styles.image}>
                                <Text style={styles.textimg1}>{e.textimg1}</Text>
                            </ImageBackground>
                        )
                    })}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
}
