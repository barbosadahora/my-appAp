import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

import api from '../../services/api';
import Result from './src/Result';

export default function Form() {
  const [filmes, setFilmes] = useState([]);
  const [resultado, setResultado] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(()=> {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      // console.log(response.data);
      setFilmes(response.data);
    }

    loadFilmes();

  }, []);
  

 return (
   <View style={styles.container}>
     
     <FlatList
     data={filmes}
     keyExtractor={ item => String(item.id) }
     renderItem={ ({ item }) => <Filmes data={item} /> }
     />

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }


});
