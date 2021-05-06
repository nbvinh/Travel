import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import { scale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen')
const ImageHeader = props => {
    return (
        <View style={{ height: props.height, justifyContent: 'center', backgroundColor: 'red', }}>
            <TouchableOpacity  onPress={() => onBack()}>
                <Image
                    source={require('../img/ChevronRight.png')}
                    style={{ width: scale(6.61), height: scale(12), position:'absolute', top:scale() }}
                />
            </TouchableOpacity>
            {/* <Text style={{ fontSize: scale(14), fontWeight: '700', textAlign: 'center' }}>{props.title}</Text> */}
            {/* {props.left ?
                <TouchableOpacity onPress={() => onBack()}>
                    <Image
                        source={require('../img/arrow-left.png')}
                        style={{ width: width / 23.4375, height: height / 50.75, marginLeft: width / 18.75 }}
                    />
                </TouchableOpacity>
                : null}
            <Text style={{ textAlign: 'center', flex: 1, marginRight: width / 10.41666, fontSize: width / 23.4375, fontWeight: '700' }}>{props.title}</Text>
            {props.right ?
                <TouchableOpacity>
                    <Image
                        style={{
                            width: scale(17),
                            height: scale(15.76),
                            marginRight: scale(10)
                        }}
                        source={require('../img/vinh50.png')}
                    />
                </TouchableOpacity>
                : null
            } */}
        </View>
    );
}

export default ImageHeader;