import { Dimensions, StyleSheet } from "react-native"
import { scaleW } from "../../../config/Ultils"
const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    map: {
        marginTop: scaleW(20),
        marginBottom: scaleW(16)
    },
    imgheader: {
        width: '100%',
        height: scaleW(240)
    },
    iconRight: {
        width: "100%",
        height: "100%"
    },
    Back: {
        width: scaleW(6.61),
        height: scaleW(12),
        position: 'absolute',
        top: scaleW(48),
        left: scaleW(16),
        zIndex: 1
    },
    label1: {
        position: 'absolute',
        bottom: scaleW(36),
        left: scaleW(16),
        fontSize: scaleW(18),
        fontWeight: '700',
        color: 'white'
    },
    address: {
        color: 'white',
        fontSize: scaleW(10),
        fontWeight: '400'
    },
    location: {
        width: scaleW(7.24),
        height: scaleW(10),
        marginRight: scaleW(7.38)
    },
    mapaddress: {
        width: '100%',
        height: scaleW(140)
    },
    Introduce: {
        marginBottom: scaleW(16),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    introduceimg: {
        width: (width - scaleW(64)) / 3,
        height: (width - scaleW(64)) / 3,
        marginHorizontal: scaleW(8)
    },
    plus: {
        position: 'absolute',
        bottom: (width - scaleW(92)) / 6,
        right: (width - scaleW(30)) / 6,
        height: scaleW(17),
        width: scaleW(17),
    },
    imgHeader: {
        width: '100%',
        height: "100%"
    },
    content1: {
        fontSize: scaleW(14),
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: scaleW(8)
    },
    label: {
        fontWeight: '400',
        fontSize: scaleW(12),
        lineHeight: scaleW(15.68)
    },
    text: {
        fontWeight: '700',
        fontSize: scaleW(12),
        lineHeight: scaleW(15.68),
        marginBottom: scaleW(15),
        marginLeft: scaleW(8)
    },
    image: {
        width: scaleW(150),
        height: scaleW(200),
        marginRight: scaleW(16),
        borderRadius: scaleW(5),
        marginBottom: scaleW(55)
    },
    textimg1: {
        position: 'absolute',
        bottom: scaleW(9),
        left: scaleW(10),
        color: '#FFFFFF'
    }
})
export default styles