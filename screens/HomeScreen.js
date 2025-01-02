import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tables = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Mesa ${i + 1}` }));

export default function HomeScreen({ navigation }) {
  const handlePress = (item) => {
    // Navega para a tela da mesa selecionada
    navigation.navigate('Table', { tableId: item.id });
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={tables}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.tableCard} 
            onPress={() => handlePress(item)}
          >
            <Text style={styles.tableText}>{item.id}</Text>
          </TouchableOpacity>
        )}
        numColumns={3}  // 3 mesas por linha
        columnWrapperStyle={styles.cardWrapper}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhuma mesa disponível.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f7f8fa',  // Fundo mais claro
  },
  tableCard: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor:"#14D9B5",  // Cor do fundo do card
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 5 },
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,  // Altura fixa para os cards
  },
  tableText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',  // Texto branco
  },
  cardWrapper: {
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: '#888',
  },
});
