import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleHotel = StyleSheet.create({
    container: {
        marginRight: moderateScale(16),
        width: width / 2.34,
    },
    img1: { width: '100%', height: scale(150), borderRadius: 5 },
    content: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    text1: { marginVertical: scale(5), color: '#A1A1A1', fontSize: scale(10) },
    content2: { flexDirection: 'row', justifyContent: 'space-around', marginTop: scale(10) },
    star: { width: scale(10), height: scale(9.56), marginRight: scale(3) },
    text2: { color: 'black', fontSize: scale(14), fontWeight: '600', marginBottom: 5 },
    img2: { width: scale(10), height: scale(13), marginRight: scale(5) },
    text3: { color: '#3076FE', fontSize: scale(10) },
    text4: { color: 'red', fontSize: scale(12), fontWeight: '600' },
})
export default StyleHotel;