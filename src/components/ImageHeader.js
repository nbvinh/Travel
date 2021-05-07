import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import { scale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen')
const ImageHeader = props => {
    return (
        <View style={{ height: props.height, justifyContent: 'flex-end', backgroundColor: '#FFFFFF' }}>
            {props.left ?
                <TouchableOpacity style={{ position: 'absolute', bottom: scale(18), left: scale(16), zIndex: 1 }} onPress={() => props.navigation.goBack()}>
                    {props.EditProfile ?
                        <Text style={{
                            color: '#828282',
                            fontWeight: '400',
                            fontSize: scale(12),
                        }}>Huỷ</Text>
                        :
                        <Image
                            source={require('../img/ChevronRight1.png')}
                            style={{ width: scale(6.61), height: scale(12) }}
                        />
                    }
                </TouchableOpacity>
                : null}
            <Text style={{ fontSize: scale(14), fontWeight: '700', textAlign: 'center', marginBottom: scale(15) }}>{props.title}</Text>
            {props.right ?
                <TouchableOpacity style={{ position: 'absolute', bottom: scale(18), right: scale(16) }} onPress={() => props.EditProfile ? props.onSave() : null}>
                    {props.EditProfile ?
                        <Text style={{ color: '#FF5F24', fontWeight: '600', fontSize: scale(12) }}>Lưu</Text> :
                        <Image
                            style={{
                                width: scale(17),
                                height: scale(15.76),
                            }}
                            source={require('../img/vinh50.png')}
                        />
                    }
                </TouchableOpacity>
                : null
            }
        </View>
    );
}

export default ImageHeader;