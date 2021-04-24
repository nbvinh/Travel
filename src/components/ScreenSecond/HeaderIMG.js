import React, { useEffect, useState } from "react";
import { View, Image,Dimensions } from "react-native";
import styles from "./styles";
const { width, height } = Dimensions.get('screen')
const HeaderIMG = ({ navigation }) => {
    return (
        <View>
            <Image
                source={require('../../img/background.png')}
                style={{ width: '100%', height: height }}
            />
            <View style={styles.header}>
                <Image
                    source={require('../../img/okgoCIP-05.png')}
                    style={styles.img}
                />
                <Image
                    source={require('../../img/okgoCIP-06.png')}
                    style={styles.img1}
                />
            </View>
        </View>

    )
}
export default HeaderIMG;

