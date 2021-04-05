import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },
    search: {
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        height: 40,
        position: 'absolute',
        bottom: -20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 16,
        height: 14,
        marginLeft: 20,
        marginRight: 10
    },
    textHeader: {
        marginHorizontal: 20,
        marginTop: 10
    },
    text1: {
        fontSize: height / 45,
        fontWeight: 'bold',
        color: 'white'
    },
    text2: {
        color: 'white',
        fontSize: height / 51,
        marginTop: 5
    },
    onpress: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    touchable: {
        width: width / 2.4,
        height: 25,
        backgroundColor: '#FF5F24',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    text3: {
        color: 'white',
    },
    scrollview: {
        flex: 1,

    },
    textPromotion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    text4: {
        fontWeight: 'bold',
        fontSize: height / 45
    },
    text5: {
        fontSize: height / 45,
        color: '#9E9E9E',
        fontWeight: '600'
    },
    textinput: {
        width: '100%',
        height: '100%'
    },
    marginLeft: {
        marginLeft: 20
    }
})
export default StyleHome;