import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleHotel = StyleSheet.create({
    container: {
        marginRight: 20,
        width: width / 2.34,
        marginBottom: 30
    },
    img1: { width: '100%', height: height / 5.4, borderRadius: 5 },
    content: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    text1: { marginVertical: 5, color: '#A1A1A1', fontSize: height / 64 },
    content2: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
    star: { width: 10, height: 9.56, marginRight: 3 },
    text2: { color: 'black', fontSize: height / 45, fontWeight: '700', marginBottom: 5 },
    img2: { width: 10, height: 13, marginRight: 5, marginTop: 3 },
    text3: { color: '#3076FE', marginBottom: 5 },
    text4:{color:'red',fontSize:height/50,fontWeight:'600'},
})
export default StyleHotel;