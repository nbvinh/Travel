
import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: scale(220),
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    imgHeader: {
        width: '100%',
        height: "100%"
    },
    leftBack: {
        position: 'absolute',
        top: scale(25),
        left: scale(16),
    },
    ChevronRight: {
        width: scale(6.61),
        height: scale(10),
    },
    nameHotel: {
        position: 'absolute',
        top: scale(110),
        left: scale(16),
        fontSize: scale(18),
        fontWeight: 'bold',
        color: 'white',
    },
    addressView: {
        position: 'absolute',
        top: scale(137),
        left: scale(17.38),
        flexDirection: 'row'
    },
    location: {
        width: scale(7.24),
        height: scale(10),
        marginRight: scale(7.38)
    },
    address: {
        fontSize: scale(10),
        color: 'white'
    },
    body: {
    },
    middle: {
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: { height: 10 },
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFFFFF",
        height: scale(90),
        marginTop: scale(-45),
        marginHorizontal: scale(16),
        borderRadius: scale(5),
        backgroundColor: "white",
    },
    textView: {
        marginHorizontal: scale(17),
        marginVertical: scale(14),
    },
    addressDetails: {
        fontSize: scale(12),
        fontWeight: '700',
        marginTop: scale(2),
        lineHeight:scale(16)
    },
    rate: {
        width: scale(10),
        height: scale(9.56),
        marginLeft: scale(3)
    },
    rateView: {
        position: 'absolute',
        bottom: scale(19.22),
        right: scale(19.22)
    },
    map: {
        marginTop: scale(20),
        width: '100%',
        height: scale(140),
        marginBottom: scale(16),
    },
    Introduce: {
        marginBottom: scale(20),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    introduceimg: {
        width: (width - scale(64)) / 3,
        height: (width - scale(64)) / 3,
        marginHorizontal: scale(8)
    },
    plus: {
        position: 'absolute',
        bottom: (width - scale(92)) / 6,
        right: (width - scale(30)) / 6,
        height: scale(17),
        width: scale(17),
    },
    textIntroduce: {
        fontSize: scale(12),
        fontWeight: '600',
        marginHorizontal: scale(16),
        marginTop: scale(15),
        lineHeight:scale(16)
    }
})
export default styles;