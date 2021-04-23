import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';
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
        fontSize: scale(10),
    },
    text3: {
        color: 'red',
        fontWeight: '600',

    },
    text4: {
        color: 'black',
        fontSize: scale(12),
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