import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleExpenrience = StyleSheet.create({
    container: {
        marginRight: scale(16),
        width: width / 1.70
    },
    img1: {
        width: '100%',
        height: height / 4.06,
        borderRadius: 5
    },
    text1: {
        color: 'black',
        fontSize: height / 45,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5
    },
    img2: {
        width: 10,
        height: 13,
        marginRight: 5,
        marginTop: 3
    },
    text2: { color: '#3076FE', marginBottom: 5, fontSize: height / 60 }

})
export default StyleExpenrience;