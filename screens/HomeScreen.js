import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tables = Array.from({ length: 10 }, (_, i) => ({ id: i + 1, name: `Mesa ${i + 1}` }));

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={tables}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableCard}>
            <Text style={styles.tableText}>{item.name}</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => navigation.navigate('Table', { tableId: item.id })}
            >
              <Text style={styles.buttonText}>Gerenciar</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma mesa disponível.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f8f8' },
  tableCard: { padding: 16, marginVertical: 8, backgroundColor: '#fff', borderRadius: 8, elevation: 2 },
  tableText: { fontSize: 18, marginBottom: 8 },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontSize: 16 },
  emptyText: { textAlign: 'center', marginTop: 20, fontSize: 18, color: '#888' },
});
