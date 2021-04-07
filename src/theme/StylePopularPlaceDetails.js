import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
const { height, width } = Dimensions.get('screen')
const StylePopularPlaceDetails = StyleSheet.create({
    container: {
        height: verticalScale(190),
        width: '100%'
    },
    img1: {
        width: '100%',
        height: '100%'
    },
    ChevronRight: {
        position: 'absolute',
        top: '20%',
        left: '6.03%'
    },
    searchPlace: {
        position: 'absolute',
        top: '20%',
        right: '6.03%'
    },
    img3: {
        width: scale(14),
        height: (14)
    },
    content: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: scale(-40),
        borderTopLeftRadius: scale(10),
        borderTopRightRadius: scale(10)
    },
    viewLabel: {
        marginHorizontal: scale(10),
        marginVertical: scale(15)
    },
    name: {
        fontWeight: '700',
        fontSize: scale(16),
        color: 'black'
    },
    content3: {
        flexDirection: 'row',
        marginVertical: scale(10)
    },
    label: {
        fontSize: scale(12),
        fontWeight: '400',
        color: 'black',
        textAlign: 'center',
        marginBottom: scale(10)
    },
    button: {
        height: scale(30),
        width: '100%',
        backgroundColor: '#FF5F24',
        borderRadius: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(15)
    },
    Seemore: {
        fontSize: scale(12),
        color: '#FF5F24',
        textAlign: 'center',

    },
    textButton: {
        color: 'white',
        fontSize: scale(12)
    },
    img2: {
        width: '100%',
        height: scale(120)
    },
    ProposedSchedule: {
        marginLeft: scale(15),
        marginBottom: scale(10),
    },
    Restaurant: {
        marginRight: moderateScale(20),
        width: width / 2.34,
    }
})
export default StylePopularPlaceDetails;