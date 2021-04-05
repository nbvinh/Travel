import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StylePromotionDetails = StyleSheet.create({
    text3: {
        fontSize: width / 23.43,
        color: '#FF5F24',
        fontWeight: '700'
    },
    footer: {
        marginTop: width / 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: width / 18.5
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
        fontSize: width / 28.8,
        marginVertical: 10
    },
    content: {
        marginHorizontal: 15,
        marginVertical: 15
    },
    text1: {
        fontWeight: 'bold',
        fontSize: width / 26.7
    },
    img: {
        width: '100%',
        height: '100%',
    },
    container: {
        width: width,
        height: height / 4.5
    }

})
export default StylePromotionDetails;