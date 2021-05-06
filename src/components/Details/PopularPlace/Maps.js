import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, StatusBar, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../Header";
import MapView, { Marker, Polygon, PROVIDER_GOOGLE } from 'react-native-maps';
import { scale } from "react-native-size-matters";
const Maps = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='white' translucent animated barStyle={"dark-content"} />
            <Header text={"Bản đồ"} onBack={() => navigation.goBack()} />
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 15.3833662,
                    longitude: 109.1085227,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0.009,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 15.382289,
                        longitude: 109.108422
                    }}
                >
                    <Image
                        source={require('../../../img/vinh64.png')}
                        style={{ width: scale(21.66), height: scale(31.36) }}
                    />
                    <Text></Text>
                </Marker>
                <Marker
                    coordinate={{
                        latitude: 15.378255,
                        longitude: 109.110611
                    }}
                >
                    <Image
                        source={require('../../../img/vinh66.png')}
                        style={{ width: scale(21.66), height: scale(31.36) }}
                    />
                </Marker>
                <Marker
                    coordinate={{
                        latitude: 15.381389,
                        longitude: 109.111201
                    }}
                >
                    <Image
                        source={require('../../../img/vinh65.png')}
                        style={{ width: scale(21.66), height: scale(31.36) }}
                    />
                </Marker>
            </MapView>
        </SafeAreaView >
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