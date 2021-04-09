import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StylePersonalPage = StyleSheet.create({
    container: {
        marginVertical:moderateVerticalScale(15),
        marginHorizontal:moderateVerticalScale(15),
        flexDirection:'row'
    },
    img1:{
        width:verticalScale(65),
        height:verticalScale(65)
    },
    name:{
        fontSize:verticalScale(15),
        fontWeight:'700',
        marginVertical:moderateVerticalScale(10)
    },
    avatar:{
        marginRight:moderateVerticalScale(10)
    },
    follow:{
        flexDirection:'row',
        flex:1
    },
    text1:{
        textAlign:'center',
        fontSize:verticalScale(14)
    },
    text2:{
        textAlign:'center',
        fontSize:verticalScale(12),
        color:'#616161',
        marginVertical:verticalScale(10)
    }
})
export default StylePersonalPage;