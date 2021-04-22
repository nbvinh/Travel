import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleSchedule = StyleSheet.create({
    container: { marginRight: scale(16), backgroundColor: 'white', borderRadius: scale(5), width: scale(300) },
    img1: { width: scale(120), height: scale(160), marginRight: scale(6), borderTopLeftRadius: scale(5) },
    text1: {
        color: 'black',
        fontSize: height / 45,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5
    },
    img2: { width: scale(174), height: scale(77), borderTopRightRadius: scale(5) },
    img3: { width: scale(84), height: scale(77) },
    content: { marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', width: (width / 3.1 + width / 2.15 + 10) },
    content1: { flexDirection: 'row', marginBottom: 10, marginLeft: 5 },
    content2: { flexDirection: 'row', marginBottom: 10, marginLeft: 5 },
    img4: { width: 25, height: 25, borderRadius: 15, marginRight: 10, marginTop: 5 },
    content3: { flexDirection: 'row', justifyContent: 'flex-end' },
    img5: { width: scale(10), height: scale(13), marginRight: scale(5) },
    footer: { borderRadius: 5, width: '100%', backgroundColor: '#FF5F24', marginVertical: 10 },
    text2: { marginHorizontal: 5, marginVertical: 5, color: 'white' },
    content4: { flexDirection: 'row', width: scale(174), height: scale(77), marginTop: scale(6), justifyContent: 'space-between' },
    text3: { color: 'white', fontSize: height / 62.46, position: 'absolute', bottom: 8, left: 20, fontWeight: 'bold' },
    img6: { width: scale(150), height: scale(200), borderRadius: 5 }
})
export default StyleSchedule;