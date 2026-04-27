import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export function Result(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.msg}</Text>
            <Text style={styles.text}>{props.resultado}</Text>
        </View>
    )
}   
