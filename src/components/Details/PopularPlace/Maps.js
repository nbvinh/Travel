import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { scale } from "react-native-size-matters";
import { useHeaderHeight } from "@react-navigation/stack";
import ImageHeader from "../../ImageHeader";
const Maps = ({ navigation, route }) => {
    const headerHeight = useHeaderHeight();
    navigation.setOptions({
        header: (e) => (
            <ImageHeader
                navigation={e.navigation}
                height={headerHeight}
                title={"Bản đồ"}
                left={true}
            />
        ),
    });
    const item = route.params.item
    return (
        <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: item.mapaddress.latitude,
                    longitude: item.mapaddress.longitude,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                }}
            >
                {item.Marker && item.Marker.map((marker, index) => {
                    return (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude
                            }}
                        >
                            <Image
                                source={require('../../../img/vinh67.png')}
                                style={{ width: scale(21.66), height: scale(31.36) }}
                            />
                            <Text style={{fontSize:scale(10),color:'#000000',position:'absolute', top:scale(5), left:scale(7)}}>{index + 1}</Text>
                        </Marker>
                    )
                })}
            </MapView>
        </View >
    )
}
export default Maps;
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1
    },
    text: {
        position: 'absolute',

    }
});