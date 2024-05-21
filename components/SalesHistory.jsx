import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../api';
import style from '../style';

const SalesHistory = () => {
  const [salesHistory, setSalesHistory] = useState([]);

  useEffect(() => {
    const fetchSalesHistory = async () => {
      try{
        const response = await api.get('/salesHistory');

        if(response.status == 200){
          setSalesHistory(response.data)
        }else{
          throw new Error("Falha ao obter historico de compras")
        }
      }
      catch(error){
        throw new Error("Falha ao obter historico de compras")
      }
    };

    fetchSalesHistory();
  }, []);

  const renderItem = ({ item }) => (
    <View style={style.item}>
      <Text>Data: {item.data}</Text>
      <Text>Valor: {item.valor}</Text>
      <Text>Produto: {item.produto}</Text>
    </View>
  );

  return (
    <View style={style.container}>
      <Text style={style.title}>Histórico de Vendas</Text>
      <FlatList
        style={style.lista}
        data={salesHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SalesHistory;
