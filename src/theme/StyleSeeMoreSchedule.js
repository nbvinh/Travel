import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleSeeMoreSchedule = StyleSheet.create({
    img6: {
        width: 13.2,
        height: 14,
        marginRight: 10
    },
    img7: {
        width: 14,
        height: 12,
        marginRight: 10
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 15
    },
    viewText1: {
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#FF5F24',
        marginVertical: 10
    },
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: width / 37.5
    },
    img1: {
        width: width / 3.1,
        height: height / 5.075,
        marginRight: 5,
        borderTopLeftRadius: 5
    },
    img2: {
        width: width - 20 + width / 3.1 + 5,
        height: height / 5.075 / 2 - 2.5
    },
    img3: {
        width: '49%',
        height: '100%'
    },
    viewIMG: {
        flexDirection: 'row',
        width: '50%',
        height: height / 5.075 / 2 - 2.5,
        marginTop: 4,
        justifyContent: 'space-between'
    },
    viewIMG2: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    viewText: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 5
    },
    img4: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginRight: 10,
        marginTop: 5
    },
    img5: {
        width: 10,
        height: 13,
        marginRight: 5,
        marginTop: 3
    },
    text1: {
        marginHorizontal: 5,
        marginVertical: 5,
        color: 'white'
    },
    content:{ flexDirection: 'row', justifyContent: 'flex-end' }

})
export default StyleSeeMoreSchedule;