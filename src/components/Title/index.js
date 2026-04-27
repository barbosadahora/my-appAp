import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function Title() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>APP FILMES v1.0</Text>
        </View>
    );
}