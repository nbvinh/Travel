import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleSeeMorePopularPlace = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    content: {
        flex: 10,
        marginHorizontal: 10
    },
    img1: {
        width: '100%', height: height / 4.511, borderRadius: 5
    },
    content2:{
        position: 'absolute', bottom: 8, left: 20, flexDirection: 'row'
    },
    img2:{
        width:width/36.7,height:width/26.97,marginRight:5
    },
    text1:{
        color: 'white', fontSize: height / 62.46, fontWeight: '600' 
    },
    text2:{
        position:'absolute',left:'43%',top:'48%',color:'white',fontSize:width/23.4375
    }

})
export default StyleSeeMorePopularPlace;