import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleProfile = StyleSheet.create({
    header: {
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        flex:10,
    },
    avatar:{
        backgroundColor:'white',
        alignItems:'center',
        flexDirection:'row',
        marginVertical:scale(20)
    },
    setting:{
        backgroundColor:'white',
        marginVertical:scale(20)
    },
    imgAvatar:{
        width:scale(60),
        height:scale(60),
        marginHorizontal:scale(10),
        marginVertical:scale(5)
    },
    name:{
        fontWeight:'500',
        fontSize:scale(15)
    },
    content:{
        backgroundColor:'white',
        marginVertical:scale(10)
    },
    text1 :{
        fontSize:scale(13),
        fontWeight:'600',
        marginHorizontal:scale(10),
        marginTop:scale(10)
    },
    text2:{
        fontSize:scale(13),
        fontWeight:'700',
        marginHorizontal:scale(10),
        marginTop:scale(10)
    }
})
export default StyleProfile;