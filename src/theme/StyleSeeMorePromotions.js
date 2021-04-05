import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleSeeMorePromotions = StyleSheet.create({
    container: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5
    },
    img: {
        width: '100%',
        height: height / 5.41,
        marginRight: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    text1: {
        fontSize: 14,
        fontWeight: '600',
        color: 'black',
        marginHorizontal: 15,
        marginTop: 10
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15
    },
    text2: {
        color: '#575757',
        fontSize: 13,
        fontWeight: '400',
        marginVertical: 5
    },
    text3: {
        color: 'black',
        fontSize: 13.5,
    },
    text4: {
        color: '#FF2424',
        fontSize: 11
    }

})
export default StyleSeeMorePromotions;