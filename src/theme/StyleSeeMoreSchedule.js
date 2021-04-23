import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { scale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StyleSeeMoreSchedule = StyleSheet.create({
    img6: {
        width: scale(13.2),
        height: scale(14),
        marginRight: scale(10),
        marginTop: scale(2)
    },
    img8: {
        width: scale(19),
        height: scale(19),
        marginRight: scale(10),
    },
    img7: {
        width: scale(14),
        height: scale(12),
        marginRight: scale(10),
        marginTop: scale(2)
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: scale(10)
    },
    viewText1: {
        borderRadius: scale(5),
        width: scale(104),
        backgroundColor: '#FF5F24',
        height: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(5)
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: scale(16),
        width: scale(323)
    },
    img1: {
        width: scale(127),
        height: scale(160),
        marginRight: scale(7),
        borderTopLeftRadius: scale(5)
    },
    img2: {
        width: scale(189),
        height: scale(77),
        borderTopRightRadius:scale(5)
    },
    img3: {
        width: scale(91),
        height: '100%'
    },
    viewIMG: {
        flexDirection: 'row',
        width: scale(189),
        height: scale(77),
        marginTop: scale(6),
        justifyContent: 'space-between'
    },
    viewIMG2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    viewText: {
        flexDirection: 'row',
        marginBottom: scale(10),
        marginLeft: scale(5),
    },
    img4: {
        width: scale(25),
        height: scale(25),
        borderRadius: scale(15),
        marginRight: scale(10),
    },
    img5: {
        width: scale(10),
        height: scale(13),
        marginRight: scale(5),
    },
    text1: {
        color: 'white',
        fontSize: scale(10)
    },
    content: { flexDirection: 'row', marginRight: scale(5) }

})
export default StyleSeeMoreSchedule;