import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../api';

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
    <View style={styles.item}>
      <Text>Data: {item.date}</Text>
      <Text>Valor: {item.amount}</Text>
      <Text>Produto: {item.product}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={salesHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SalesHistory;
