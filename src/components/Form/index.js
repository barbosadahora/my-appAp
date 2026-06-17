import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity, View } from "react-native";
import { Result } from "../Result"; 
import styles from "./style"; 
import getConexaoapi from "../../services/conexaoapi";

export default function Form() {
    const [ano, setAno] = useState("");
    const [feriados, setFeriados] = useState([]);

    async function buscarFeriados() {
        try {
            const dataFeriados = await getConexaoapi(ano); // Chama a função para buscar os feriados
            setFeriados(dataFeriados); 
        } catch (error) {
            console.error("Erro ao buscar feriados:", error);
        }
    }

    return (
        //formulário com os botões
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Ano:</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={ano}
                    onChangeText={setAno}
                    placeholder="Digite o ano"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={buscarFeriados}
                >
                    <Text style={styles.textButton}>Buscar Feriados</Text>
                </TouchableOpacity>
            </View>
          
            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Feriados:</Text>
                {feriados.length > 0 ? (
                    feriados.map((feriado, index) => (
                        <Result
                            key={index}
                            nome={feriado.name} 
                            data={feriado.date} 
                        
                        />
                    ))
                ) : (
                    <Text style={styles.formLabel}> Digite o ano desejado </Text>
                )}
            </View>
        </View>
    );
}
