import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleScheduleDetails = StyleSheet.create({
    container: {
        height: verticalScale(150),
        width: '100%'
    },
    img1: {
        width: '100%',
        height: '100%'
    },
    ChevronRight: {
        position: 'absolute',
        top: '30%',
        left: '6.03%'
    },
    img2: {
        width: scale(6.61),
        height: scale(12)
    },
    text1: {
        color: 'white',
        position: 'absolute',
        bottom: '40%',
        left: '0%',
        right: '0%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scale(16),
    },
    text2: {
        color: 'white',
        position: 'absolute',
        bottom: '25%',
        left: '0%',
        right: '0%',
        textAlign: 'center',
        fontSize: scale(12)
    },
    TopTab: {
        marginHorizontal: scale(10)
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        top:'94.5%',
        left:0,
        right:0,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    daycontainer: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        flexDirection: 'row'
    },
    daycontent1: {
        width: '10%',
    },
    daycontent2: {
        width: '90%',
        marginVertical: scale(10),
    },
    daytext1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: scale(10),
        marginVertical: scale(5)
    },
    imgcontainer: {
        height: scale(80),
        borderRadius: scale(5),
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    img: {
        height: '100%',
        width: scale(80),
        borderTopLeftRadius: scale(5),
        borderBottomLeftRadius: scale(5)
    },
    text3: {
        marginLeft: scale(10),
        marginTop: scale(20),
        fontWeight: '700',
        fontSize: scale(14)
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: scale(100),
        right: 10,
        bottom: 10
    },
    text4: {
        color: '#FF5F24',
        fontSize: scale(10),
        fontWeight:'700'
    },
    img3: {
        width: scale(18),
        height: scale(18)
    },
    X: {
        position: 'absolute',
        top: 10, right: 10
    },
    viewDay: {
        width: '100%',
        height: scale(40),
        borderStyle: 'dotted',
        borderWidth: 1,
        marginTop: scale(15),
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:5,
        borderColor:'#FF5F24'
    },
    viewDay1: {
        flexDirection: 'row'
    },
    img4: {
        width: scale(13),
        height: scale(9.85),
        marginRight: scale(5),
        
    },
    text5: {
        color: '#3076FE',
        fontSize: scale(8),
    },
    img5: {
        width: scale(9.12),
        height: scale(12),
        marginRight: scale(5)
    },
    text6: {
        color: '#FF5F24',
        fontSize: scale(8)
    },
    img6:{
        width:scale(13),
        height:scale(13)
    },
    viewDay3:{
        width: '100%',
        height: scale(30),
        borderStyle: 'dotted',
        borderWidth: 1,
        marginTop: scale(30),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:5,
        borderColor:'#FF5F24',
        marginBottom:scale(70)
    },
    img7:{
        width:scale(11),
        height:scale(11)
    },
    text7:{
        color:'#FF5F24',
        fontSize:scale(10),
        marginLeft:scale(5)
    },
    BookNow :{
        backgroundColor:'#FF5F24',
        borderRadius :scale(5),
        width:scale(71),
        height:scale(25),
        marginRight:scale(10),
        justifyContent:'center',
        alignItems:'center'
    },
    textPrice:{
        fontSize:scale(16),
        fontWeight:'700',
        color:'#FF5F24',
        marginLeft:scale(10)
    },
    textBookNow:{
        fontSize:scale(10),
        fontWeight:'600',
        color:'#FFFFFF',
        
    }

})
export default StyleScheduleDetails;