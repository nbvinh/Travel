import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleSeeMoreHotel = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text1: {
        flexDirection: 'row',
        marginVertical: 5
    },
    content: {
        flexDirection: 'row',
        marginHorizontal: 15
    },
    text2: {
        color: '#3076FE',
        marginBottom: 5,
        fontSize: width / 37.5,
        marginTop:3
    },
    text3: {
        color: 'red',
        fontSize: height / 50,
        fontWeight: '600',

    },
    text4: {
        color: 'black',
        fontSize: height / 50,
        fontWeight: '600',
    },
    viewText:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1,
        marginBottom:width/37.5
    }
})
export default StyleSeeMoreHotel;