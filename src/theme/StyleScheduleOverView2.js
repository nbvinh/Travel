import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleScheduleOverView2 = StyleSheet.create({
    container: {
        marginLeft: scale(15),
        
    },
    img1:{
        width:scale(150),
        height:scale(200),
        marginRight:scale(15),
        borderRadius:5
    },
    text1:{
        position:'absolute',
        bottom:scale(5),
        left: scale(10),
        color:'white',
        fontSize:scale(12),
        fontWeight:'600'
    },
    text2:{
        fontWeight:'600',
        fontSize:scale(13),
        color:'#000000',
        marginTop:scale(5)
    },
    text3:{
        color:'#969696',
        fontSize:scale(13),
        fontWeight:'400'
    },
    text4:{
        fontWeight:'700',
        fontSize:scale(14),
        color:'#000000',
        marginTop:scale(10)
    },
    surface1:{
        marginTop:scale(5),
        flexDirection:'row'
    },
    img2:{
        width:scale(17),
        height:scale(11.4),
        marginTop:scale(10),
        marginRight:scale(10)
    },
    img4:{
        width:scale(17),
        height:scale(17),
        marginTop:scale(10),
        marginRight:scale(10)
    },
    textsurface2:{
        fontWeight:'500',
        fontSize:scale(13),
        color:'#000000',
    },
    textsurface1:{
        color:'#969696',
        fontSize:scale(13),
        fontWeight:'400'
    },
    img3:{
        width:scale(40),
        height:scale(40),
        borderRadius:scale(25)
    }
})
export default StyleScheduleOverView2;