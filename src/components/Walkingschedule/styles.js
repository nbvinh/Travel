
import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container: {
        marginTop: scale(16),
        marginHorizontal: scale(16)
    },
    day: {
        fontWeight: '800',
        fontSize: scale(12),
        lineHeight: scale(14.32),
        // color: '#A0A0A0',
        marginBottom: scale(16)
    },
    time: {
        fontSize: scale(12),
        fontWeight: '400',
        // color: '#A0A0A0',
    },
    label: {
        marginLeft: scale(32),
        marginRight: scale(47),
        fontSize: scale(14),
        // color: '#A0A0A0',
    },
    chiphi: {
        marginLeft: scale(48),
        fontSize: scale(11),
        // color: '#A0A0A0',
        marginVertical: scale(16)
    },
    viewStar: {
        flexDirection: 'row',
        position: 'absolute',
        width: scale(36),
        height: scale(15),
        right: 0,
        top: scale(18),
        justifyContent: 'space-between'
    },
    star: {
        fontSize: scale(13),
        fontWeight: '400',
        color: '#000000',
        marginRight: scale(5),
    },
    imgstar: {
        width: scale(15),
        height: scale(15)
    },
    STT: {
        position: 'absolute',
        top: scale(21),
        width: scale(15),
        height: scale(15),
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(9)
    },
    textstt: {
        color: 'white',
        fontSize: scale(10)
    },
    straightLine: {
        position: 'absolute',
        width: 1,
        top: scale(36),
        left: scale(7),
        bottom: 0,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderRadius: 1,
        borderColor: 'black'
    },
    footer: {
        height: scale(30),
        backgroundColor: '#FF5F24',
        marginTop: scale(44),
        marginHorizontal: scale(16),
        marginBottom: scale(197),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    congratulation: {
        color: 'white',
        fontSize: scale(14)
    },
    end: {
        position: 'absolute',
        height: scale(84),
        bottom: 0,
        width: '100%',
        backgroundColor: 'white'
    },
    spent: {
        marginLeft: scale(16),
        marginTop: scale(18),
        marginBottom: scale(16),
        fontSize: scale(14),
        color: 'black'
    },
    price: {
        color: '#FF5F24',
        fontWeight: '700'
    },
    RewardPoints: {
        marginHorizontal: scale(16),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    point: {
        fontSize: scale(14),
        color: 'black'
    },
    evaluate: {
        width: scale(104),
        height: scale(20),
        borderRadius: scale(5),
        backgroundColor: '#FF5F24',
        justifyContent:'center',
        alignItems:'center'
    },
    textevaluate: {
        fontSize: scale(10),
        color: '#FFFFFF'
    }
})
export default styles;