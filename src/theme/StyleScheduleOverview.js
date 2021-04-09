import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';

const { height, width } = Dimensions.get('screen')
const StyleScheduleOverview = StyleSheet.create({
    container: {
        marginTop: scale(-25),
        alignItems: 'center',
    },
    avatar: {
        width: scale(50),
        height: scale(50),
        borderRadius: scale(25),
    },
    viewAvatar: {
        width: scale(52),
        height: scale(52),
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(25)
    },
    text1: {
        fontSize: scale(16),
        fontWeight: '700',
    },
    text2: {
        fontSize: scale(12),
        color: '#333333',
    },
    MenuTop: {
        marginHorizontal: scale(10),
        marginTop: scale(10),
        height: scale(30),
        width: scale(85),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMenu: {
        fontSize: scale(12),
        fontWeight: '500'
    },
    containerSchedule: {
        marginTop: scale(10),
    },
    content: {
        alignItems: 'center'
    },
    text3: {
        color: '#000000',
        fontSize: scale(14),
        fontWeight: '500',
    },
    text6: {
        color: '#000000',
        fontSize: scale(14),
        fontWeight: '500',
        marginHorizontal: scale(10)
    },
    content1: {
        flexDirection: 'row',
        marginVertical: scale(5)
    },
    img1: {
        marginHorizontal: scale(15),
        width: scale(9.44),
        height: scale(8.64),
        marginTop: scale(5)
    },
    text4: {
        fontSize: scale(12),
        fontWeight: '400',
        color: '#000000',
    },
    text5: {
        fontSize: scale(12),
        fontWeight: '400',
        color: '#828282',
    },
    img2: {
        width: scale(40),
        height: scale(15),
        marginVertical: scale(10)
    },
    straightline: {
        width: scale(90),
        height: 0,
        borderWidth: 0.5,
        marginTop: scale(10)
    },
    straightline1: {
        width: scale(50),
        height: 0,
        marginTop: scale(10)
    },
    straightline2: {
        width: scale(165),
        height: 0,
        borderWidth: 1,
        marginVertical:scale(15)
    },
    search:{
        borderRadius:5,
        width:'100%',
        height:scale(25),
        marginBottom:scale(60),
        backgroundColor:'white',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    img3:{
        width:scale(12),
        height:scale(12),
        marginRight:scale(5)
    },
    text7:{
        color:'#FF5F24',
        fontWeight:'600',
        fontSize:scale(10)
    }
})
export default StyleScheduleOverview;