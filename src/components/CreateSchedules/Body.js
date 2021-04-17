import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, Switch } from "react-native";
import { scale } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import Time from "../Suggestion/Time";
import styles from "../Suggestion/styles";
const Body = (props) => {
    const DataContent = useSelector(store => store.CreateSchedules.DataContent)
    const dispatch = useDispatch()
    const start = useSelector(store => store.Suggestion.start)
    const end = useSelector(store => store.Suggestion.end)
    const navigation = props.navigation
    const onChoose = (item) => {
        item.id === 2 ?
            dispatch({ type: 'CHOOSETIME' }) :
            item.id === 3 ?
                navigation.navigate('ChoosePerson')

                : null
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={[styles.container, { marginBottom: scale(30) }]}>
            {DataContent && DataContent.map((item) => {
                return (
                    <TouchableOpacity key={item.id} style={styles.content} onPress={() => onChoose(item)}>
                        <Image
                            source={item.icon}
                            style={{ width: item.width, height: item.height, marginRight: scale(15), marginLeft: scale(5) }}
                        />
                        <Text style={styles.label2}>
                            {
                                item.id === 2 ?
                                    start !== '' ?
                                        start + '-' + end :
                                        item.label
                                    :
                                    item.label
                            }
                        </Text>
                        {item.id === 4 ?
                            <Switch
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom:scale(5)
                                }}
                                trackColor={{ false: "#767577", true: "#00D42F" }}
                                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            : null
                        }
                    </TouchableOpacity>
                )
            })}
            <Time />
        </View>
    )
}
export default Body;