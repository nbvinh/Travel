
import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
import { scale } from "react-native-size-matters";
const styles = StyleSheet.create({
    container: {
        flex: 10,
    },
    star: {
        width: '100%',
        height: scale(70),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: scale(14),
        color: '#9A9A9A',
    },
    textInput: {
        fontSize: scale(14),
        color: '#000000',
        borderBottomWidth: 0.5,
        width: '100%',
        marginBottom: scale(10)
    },
    body: {
        backgroundColor: 'white'
    },
    comment: {
        marginHorizontal: scale(16),
        height: scale(200)
    },
    textInput1: {
        fontSize: scale(14),
        color: '#000000',
        width: '100%',
        marginBottom: scale(10),
    },
    img: {
        width: scale(61),
        height: scale(61)
    },
    addImage: {
        fontSize: scale(14),
        color: '#000000',
        marginVertical: scale(10)
    },
    footer: {
        marginHorizontal: scale(16)
    }
})
export default styles;