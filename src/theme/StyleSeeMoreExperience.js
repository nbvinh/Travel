import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { height, width } = Dimensions.get('screen')
const StyleSeeMoreExperience = StyleSheet.create({
    container: {
        flex: 10
    },
    content: {
        backgroundColor: 'white',
        marginBottom: width / 18.75,
        borderRadius: 5,
        marginHorizontal: 10
    },
    img: {
        width: '100%',
        height: height / 4.06,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    text1: {
        color: 'black',
        fontSize: height / 45,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5
    },
    img1: {
        width: 10,
        height: 13,
        marginRight: 5,
        marginTop: 3
    },
    content1: {
        marginLeft: width / 37.5
    },
    text2: {
        color: '#3076FE',
        marginBottom: 5,
        fontSize: height / 60
    },
    text3: {
        fontSize: height / 60,
        color: 'black',
        marginBottom: width / 37.5
    },
    text4: {
        color: '#FF5F24',

    }

})
export default StyleSeeMoreExperience;