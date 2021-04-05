import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleSchedule = StyleSheet.create({
    container: { marginRight: 20, backgroundColor: 'white', borderRadius: 5 },
    img1: { width: width / 3.1, height: height / 5.075, marginRight: 5, borderTopLeftRadius: 5 },
    text1: {
        color: 'black',
        fontSize: height / 45,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5
    },
    img2: { width: width / 2.15, height: height / 5.075 / 2 - 2.5 },
    img3: { width: '49%', height: '100%' },
    content: { marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', width: (width / 3.1 + width / 2.15 + 10) },
    content1: { flexDirection: 'row', marginBottom: 10, marginLeft: 5 },
    content2: { flexDirection: 'row', marginBottom: 10, marginLeft: 5 },
    img4: { width: 25, height: 25, borderRadius: 15, marginRight: 10, marginTop: 5 },
    content3: { flexDirection: 'row', justifyContent: 'flex-end' },
    img5: { width: 10, height: 13, marginRight: 5, marginTop: 3 },
    footer: { borderRadius: 5, width: '100%', backgroundColor: '#FF5F24', marginVertical: 10 },
    text2: { marginHorizontal: 5, marginVertical: 5, color: 'white' },
    content4: { flexDirection: 'row', width: width / 2.15, height: height / 5.075 / 2 - 2.5, marginTop: 4, justifyContent: 'space-between' },
    text3: { color: 'white', fontSize: height / 62.46, position: 'absolute', bottom: 8, left: 20, fontWeight: 'bold' },
    img6: { width: width / 2.5, height: height / 4.06, borderRadius: 5 }
})
export default StyleSchedule;