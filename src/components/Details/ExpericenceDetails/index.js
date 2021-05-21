import React from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { scale } from 'react-native-size-matters';
import styles from './styles';

export default function ExperienceDetails({ navigation, route }) {
    const item = route.params.item
    console.log('item', item)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
            <StatusBar backgroundColor='transparent' translucent animated barStyle={"light-content"} />
            <ScrollView style={{ flex: 1 }}>
                <Image
                    source={{ uri: item.img }}
                    style={styles.imgheader}
                />
                <Image
                    source={require('./../../../img/ChevronRight.png')}
                    style={styles.iconRight}
                />
                <Text style={styles.label}>{item.text}</Text>
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
                <TouchableOpacity>
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
            </ScrollView>
        </SafeAreaView>
    );
}
