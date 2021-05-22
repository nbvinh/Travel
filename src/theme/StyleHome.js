import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import { scaleW } from '../config/Ultils';
const { height, width } = Dimensions.get('screen')
const StyleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    search: {
        backgroundColor: 'white',
        borderRadius: scaleW(5),
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        height: scaleW(40),
        position: 'absolute',
        bottom: scaleW(-20),
        left: scaleW(20),
        right: scaleW(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: scaleW(12),
        height: scaleW(12),
        marginLeft: scaleW(20),
        marginRight: scaleW(10)
    },
    textHeader: {
        marginHorizontal: scaleW(16),
        marginTop: scaleW(44)
    },
    text1: {
        fontSize: scaleW(18),
        fontWeight: 'bold',
        color: 'white'
    },
    text2: {
        color: 'white',
        fontSize: scaleW(14),
        marginTop: scaleW(5)
    },
    onpress: {
        marginTop: scaleW(40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: scaleW(20)
    },
    touchable: {
        width: scaleW(160),
        height: scaleW(25),
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleW(5)
    },
    text3: {
        color: 'white',
        fontSize: scaleW(12)
    },
    scrollview: {
        flex: 1
    },
    textPromotion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleW(10),
        marginBottom: scaleW(20),
        marginHorizontal: scaleW(20)
    },
    text4: {
        fontWeight: 'bold',
        fontSize: scaleW(18)
    },
    text5: {
        fontSize: scaleW(18),
        color: '#9E9E9E',
        fontWeight: '600'
    },
    textinput: {
        width: '100%',
        height: scaleW(40),
        fontSize: scaleW(12),
    },
    marginLeft: {
        marginLeft: scaleW(16)
    },
    touch: {
        width: scaleW(49),
        height: scaleW(49),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleW(30)
    }
})
export default StyleHome;