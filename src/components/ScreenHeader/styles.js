
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
    body: {
        marginHorizontal: scale(16)
    }
})
export default styles;