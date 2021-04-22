
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
    header: {
        marginHorizontal: scale(16)
    },
    input: {
        backgroundColor: '#EAEAEA',
        width: '100%',
        height: scale(40),
        fontSize: scale(12),
        color: '#000000',
        marginVertical: scale(16),
        borderRadius: scale(5),
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        paddingLeft: scale(16)
    },
    img1: {
        width: '100%',
        height: scale(150),
        borderRadius: scale(5),
    },
    body: {
        marginLeft: scale(16)
    }
})
export default styles;