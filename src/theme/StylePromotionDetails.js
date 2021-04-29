import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StylePromotionDetails = StyleSheet.create({
    text3: {
        fontSize: scale(16),
        color: '#FF5F24',
        fontWeight: '700'
    },
    footer: {
        marginTop: scale(60),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: scale(30)
    },
    colorblack: {
        color: 'black'
    },
    color: {
        color: '#FF5F24'
    },
    bold: {
        fontWeight: 'bold'
    },
    text2: {
        fontSize: scale(13),
        marginVertical: scale(10)
    },
    content: {
        marginHorizontal: scale(15),
        marginVertical: scale(15)
    },
    text1: {
        fontWeight: 'bold',
        fontSize: scale(14)
    },
    img: {
        width: '100%',
        height: '100%',
    },
    container: {
        width: width,
        height: scale(180)
    },
    ChevronRight:{
        position:'absolute',
        left:scale(16),
        top:scale(48),
        bottom:scale(120),
        zIndex:1,
        width:scale(6.61),
        height:scale(12)
    }

})
export default StylePromotionDetails;