import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function TableScreen({ route, navigation }) {
  const { tableId } = route.params;
  const [order, setOrder] = useState('');
  const [orders, setOrders] = useState([]);

  const addOrder = () => {
    if (order.trim()) {
      setOrders([...orders, order]);
      setOrder('');
    } else {
      Alert.alert('Erro', 'Por favor, adicione um pedido válido.');
    }
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mesa {tableId}</Text>
      
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.orderItem}>{item}</Text>}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhum pedido na mesa.</Text>}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Adicionar pedido"
        value={order}
        onChangeText={setOrder}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addOrder}>
          <Text style={styles.buttonText}>Adicionar Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Kitchen', { tableId, orders })}>
          <Text style={styles.buttonText}>Enviar para Cozinha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout', { tableId, orders })}>
          <Text style={styles.buttonText}>Fechar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={clearOrders}>
          <Text style={styles.buttonText}>Limpar Pedidos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, marginBottom: 16, fontWeight: 'bold' },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 8, 
    marginBottom: 16, 
    borderRadius: 4 
  },
  orderItem: { fontSize: 18, marginVertical: 4 },
  emptyText: { textAlign: 'center', color: '#888', fontSize: 16, marginTop: 20 },
  buttonContainer: { marginTop: 20 },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
