import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CheckoutScreen({ route, navigation }) {
  const { tableId, orders } = route.params;

  // Função para calcular o total, assumindo que cada pedido custa R$20,00
  const calculateTotal = () => orders.length * 20;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fechamento - Mesa {tableId}</Text>
      
      <View style={styles.ordersContainer}>
        <Text style={styles.orderTitle}>Pedidos:</Text>
        {orders.map((order, index) => (
          <Text key={index} style={styles.orderItem}>
            {order}
          </Text>
        ))}
      </View>

      <Text style={styles.total}>Total de itens: {orders.length}</Text>
      <Text style={styles.total}>
        Total: R$ {calculateTotal().toFixed(2).replace('.', ',')}
      </Text>

      <Button
        title="Finalizar Pagamento"
        onPress={() => alert('Pagamento finalizado!')}
      />
      <Button
        title="Voltar para a Tela Inicial"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  header: { fontSize: 24, marginBottom: 16, fontWeight: 'bold' },
  ordersContainer: { marginBottom: 16 },
  orderTitle: { fontSize: 20, fontWeight: 'bold' },
  orderItem: { fontSize: 18, marginVertical: 4 },
  total: { fontSize: 18, marginVertical: 8 },
});
