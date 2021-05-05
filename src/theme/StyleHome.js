import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    search: {
        backgroundColor: 'white',
        borderRadius: moderateVerticalScale(5),
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        height: verticalScale(40),
        position: 'absolute',
        bottom: verticalScale(-20),
        left: verticalScale(20),
        right: verticalScale(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: verticalScale(16),
        height: verticalScale(14),
        marginLeft: moderateVerticalScale(20),
        marginRight: moderateVerticalScale(10)
    },
    textHeader: {
        marginHorizontal: moderateVerticalScale(16),
        marginTop: moderateVerticalScale(44)
    },
    text1: {
        fontSize: verticalScale(18),
        fontWeight: 'bold',
        color: 'white'
    },
    text2: {
        color: 'white',
        fontSize: verticalScale(16),
        marginTop: moderateVerticalScale(5)
    },
    onpress: {
        marginTop: moderateVerticalScale(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateVerticalScale(20)
    },
    touchable: {
        width: verticalScale(156.25),
        height: verticalScale(25),
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: verticalScale(5)
    },
    text3: {
        color: 'white',
        fontSize:moderateVerticalScale(12)
    },
    scrollview: {
        flex: 1,

    },
    textPromotion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: moderateVerticalScale(10),
        marginBottom: moderateVerticalScale(20),
        marginHorizontal: moderateVerticalScale(20)
    },
    text4: {
        fontWeight: 'bold',
        fontSize: verticalScale(18)
    },
    text5: {
        fontSize: verticalScale(18),
        color: '#9E9E9E',
        fontWeight: '600'
    },
    textinput: {
        width: '100%',
        height: scale(40),
        fontSize: scale(12),
    },
    marginLeft: {
        marginLeft: scale(16)
    },
    touch:{
        width: scale(49),
        height: scale(49),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(30)
    }
})
export default StyleHome;