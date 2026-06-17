import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export function Result(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.formLabel}>Nome: {props.nome}</Text>
            
            <Text style={styles.formLabel}>Data: {props.data}</Text>
            
        </View>
    );
}
