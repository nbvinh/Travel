
import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { scale, moderateScale, verticalScale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: '5%',
        zIndex: 1,
        alignItems: 'center'
    },
    footer: {
        // flex: 1,
        position: 'absolute',
        top: '45%'
    },
    img: {
        width: scale(101),
        height: scale(129)
    },
    img1: {
        width: scale(137),
        height: scale(33.69),
        marginTop: moderateScale(10)
    },
    footercontent: {
        marginHorizontal: moderateScale(10)
    },
    textInput: {
        borderTopRightRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30),
        height: verticalScale(50),
        width: '60%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        fontSize: moderateScale(15)
    },
    viewtextinput: {
        flexDirection: 'row'
    },
    textinput1: {
        height: verticalScale(50),
        width: '40%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderTopLeftRadius: scale(30),
        borderBottomLeftRadius: scale(30),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img2: {
        width: scale(24),
        height: verticalScale(16)
    },
    img3: {
        width: scale(10),
        height: verticalScale(6)
    },
    text: {
        fontSize: scale(15),
        fontWeight: '500',
        color: 'white'
    },
    OK: {
        width: '100%',
        height: verticalScale(50),
        backgroundColor: '#FF5F24',
        marginTop: moderateScale(20),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        borderRadius: scale(25)
    },
    text1: {
        color: 'white',
        fontWeight: '700',
        fontSize: scale(20)
    },
    loginFB: {
        marginTop: scale(50),
        height: scale(40),
        width: '100%',
        backgroundColor: '#055EEE',
        borderRadius: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img4: {
        width: scale(40),
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: scale(8),
        borderBottomLeftRadius: scale(8),
    },
    loginGG: {
        backgroundColor: '#1864FD',
        marginTop: scale(20),
        width: '100%',
        height: scale(40),
        borderRadius: scale(8),
        flexDirection: 'row',
    },
    text2: {
        color: 'white',
        fontSize: scale(15),
        fontWeight: '500',
    },
    textfb: {
        fontSize: scale(15),
        color: 'white',
        fontWeight: '500'
    },
    imgFb: {
        width: scale(20),
        height: scale(20),
        marginRight:scale(26)
    }
})
export default styles;