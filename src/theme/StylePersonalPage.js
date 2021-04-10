import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StylePersonalPage = StyleSheet.create({
    container: {
        marginVertical: moderateVerticalScale(15),
        marginHorizontal: moderateVerticalScale(15),
        flexDirection: 'row'
    },
    img1: {
        width: verticalScale(65),
        height: verticalScale(65)
    },
    name: {
        fontSize: verticalScale(15),
        fontWeight: '700',
        marginVertical: moderateVerticalScale(10),
        textAlign: 'center'
    },
    avatar: {
        // marginRight: moderateVerticalScale(10)
        width: verticalScale(65),
    },
    follow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    text1: {
        textAlign: 'center',
        fontSize: verticalScale(14)
    },
    text2: {
        textAlign: 'center',
        fontSize: verticalScale(12),
        color: '#616161',
        marginVertical: verticalScale(10)
    },
    Edit: {
        borderWidth: 1,
        borderColor: '#A2A2A2',
        height: scale(30),
        marginLeft: verticalScale(30),
        marginTop: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        width: width - verticalScale(100),
    },
    text3: {
        fontSize: verticalScale(13),
        fontWeight: '500',
        color: '#000000'
    },
    Review: {
        marginLeft: scale(20)
    },
    img6: {
        width: verticalScale(150),
        height: verticalScale(200),
        borderRadius: verticalScale(5)
    },
    text6: {
        fontSize: verticalScale(13),
        fontWeight: '600',
        position: 'absolute',
        bottom: verticalScale(5),
        left: verticalScale(10),
        color: 'white'
    },
    SeeIMG: {
        height: verticalScale(160),
        width: '100%',
        flexDirection: 'row'
    },
    img7: {
        width: verticalScale(137),
        height: '100%',
        borderRadius: verticalScale(5)
    },
    SeeIMG1: {
        marginLeft: verticalScale(5),
        width: width - verticalScale(182),
        height: 50,
    },
    img8: {
        width: '100%',
        height: verticalScale(77),
        borderRadius: verticalScale(5)
    },
    viewIMG:{
        height:verticalScale(160) - verticalScale(77),
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    img3:{
        height:verticalScale(160) - verticalScale(82),
        width:(width - verticalScale(187))/2,
        marginTop:verticalScale(5),
        borderRadius:verticalScale(5)
    },
    img4:{
        width:verticalScale(17),
        height:verticalScale(17)
    },
    plus:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:0,
        bottom:0,
        right:0,
        left:(width - verticalScale(187))/2,
        zIndex:1
    }
})
export default StylePersonalPage;