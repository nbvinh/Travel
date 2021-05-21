import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"

const styles = StyleSheet.create({
    imgheader: {
        width: '100%',
        height: scale(240)
    },
    iconRight: {
        width: scale(6.61),
        height: scale(12),
        position: 'absolute',
        top: scale(48),
        left: scale(16),
        zIndex: 1
    },
    label: {
        position: 'absolute',
        bottom: scale(36),
        left: scale(16),
        fontSize: scale(18),
        fontWeight: '700',
        color: 'white'
    },
    address: {
        color: 'white',
        fontSize: scale(10),
        fontWeight: '400'
    },
    location: {
        width: scale(7.24),
        height: scale(10),
        marginRight: scale(7.38)
    },
    mapaddress: {
        width: '100%',
        height: scale(140)
    },
    
})
export default styles