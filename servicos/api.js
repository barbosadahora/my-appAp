import axios from "axios";

// Função assíncrona que busca informações sobre os feriados do ano
export default async function getConexaoapi(ano) {
    // URL da API para buscar informações sobre feriados
    const url = `https://brasilapi.com.br/api/feriados/v1/${ano}`;

    try {
        const response = await axios.get(url); // Faz a requisição à API
        return response.data; // Retorna os dados dos feriados
    } catch (error) {
        console.error("Erro ao buscar feriados:", error);
        throw error; // Lança o erro para ser tratado no componente Form
    }
}
