
import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container: {
        marginTop: scale(10)
    },
    body: {
        marginLeft: scale(15)
    },
    card: {
        width: scale(135),
        height: scale(135),
        marginRight: scale(15),
        borderRadius: scale(5),
        backgroundColor: 'white'
    },
    card2: {
        width: scale(162),
        height: scale(162),
        borderRadius: scale(5),
        backgroundColor: 'white',
        marginHorizontal: scale(6.5),
        marginVertical: scale(10)
    },
    img: {
        width: '100%',
        height: scale(107)
    },
    img2: {
        width: '100%',
        height: scale(128)
    },
    footer: {
        width: '100%',
        height: scale(135) - scale(107),
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer2: {
        width: '100%',
        height: scale(162) - scale(128),
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: scale(14),
        fontWeight: '400',
        color: '#000000'
    },
    check: {
        width: scale(16),
        height: scale(16)
    },
    oncheck: {
        position: 'absolute',
        top: scale(7),
        right: scale(7)
    },
    content: {
        marginTop: scale(18),
        marginHorizontal: scale(15),
        borderBottomWidth: scale(0.6),
        flexDirection: 'row',
    },
    label2: {
        marginBottom: scale(5),
        fontWeight: '400',
        fontSize: scale(14),
        color: '#989898'
    },
    img1: {
        width: scale(10),
        height: scale(5.63),
        position: 'absolute',
        right: 0,
        top: scale(5)
    },
    addprice: {
        width: scale(154),
        height: scale(33),
        fontSize: scale(14)
    },
    budget: {
        fontSize: scale(16),
        fontWeight: '700',
        marginTop: scale(10)
    },
    price: {
        fontSize: scale(14),
        color: '#333333',
        fontWeight: '400'
    },
    OK: {
        color: '#FF5F24',
        fontWeight: '700',
        fontSize: scale(14),
        marginRight: scale(35)
    },
    cancel: {
        marginLeft: scale(35),
        fontSize: scale(14),
        fontWeight: '700',
        color: '#9A9A9A'
    },
    footer3: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body3: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    container3: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content3: {
        backgroundColor: 'white',
        width: scale(264),
        height: scale(294),
        borderRadius: scale(10),
    },
    tou1: {
        height: scale(height) - scale(468),
        width: '100%',
    },
    bodyPerson:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:scale(10),
        marginTop:scale(20),
        borderBottomWidth:scale(0.6)
    },
    labelPerson:{
        fontSize:scale(14),
        color:'#090909'
    },
    textPerson :{
        fontSize:scale(14),
        color:'#989898'
    },
    viewQuantity:{
        flexDirection:'row',
    },
    img3:{
        width:scale(15),
        height:scale(15),
        marginHorizontal:scale(5),
        marginBottom:scale(10),
        marginTop:scale(3)
    },
})
export default styles;