
import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container: {
        marginTop: scale(10)
    },
    body: {
        marginLeft: scale(15)
    },
    card: {
        width: scale(135),
        height: scale(135),
        marginRight: scale(15),
        borderRadius: scale(5),
        backgroundColor: 'white'
    },
    card2: {
        width: scale(162),
        height: scale(162),
        borderRadius: scale(5),
        backgroundColor: 'white'
    },
    img: {
        width: '100%',
        height: scale(107)
    },
    img2: {
        width: '100%',
        height: scale(128)
    },
    footer: {
        width: '100%',
        height: scale(135) - scale(107),
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer2: {
        width: '100%',
        height: scale(162) - scale(128),
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: scale(14),
        fontWeight: '400',
        color: '#000000'
    },
    check: {
        width: scale(16),
        height: scale(16)
    },
    oncheck: {
        position: 'absolute',
        top: scale(7),
        right: scale(7)
    },
    content: {
        marginTop: scale(18),
        marginHorizontal: scale(15),
        borderBottomWidth: scale(0.6),
        flexDirection: 'row',
    },
    label2: {
        marginBottom: scale(5),
        fontWeight: '400',
        fontSize: scale(14),
        color: '#989898'
    },
    img1: {
        width: scale(10),
        height: scale(5.63),
        position: 'absolute',
        right: 0,
        top: scale(5)
    }
})
export default styles;