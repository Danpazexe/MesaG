import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function KitchenScreen({ route }) {
  const { tableId, orders } = route.params;

  const handleOrderComplete = (order) => {
    Alert.alert('Pedido Pronto', `O pedido "${order}" está pronto!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pedidos - Mesa {tableId}</Text>
      {orders.length === 0 ? (
        <Text style={styles.emptyText}>Não há pedidos para esta mesa.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.orderCard}>
              <Text style={styles.orderItem}>{item}</Text>
              <TouchableOpacity style={styles.completeButton} onPress={() => handleOrderComplete(item)}>
                <Text style={styles.completeButtonText}>Concluir Pedido</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, marginBottom: 16, fontWeight: 'bold' },
  orderCard: { 
    padding: 16, 
    marginVertical: 8, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderItem: { fontSize: 18 },
  completeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  completeButtonText: { color: '#fff', fontSize: 16 },
  emptyText: { textAlign: 'center', fontSize: 18, color: '#888', marginTop: 20 },
});
