import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Inventario() {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>🛠️ Inventario de Equipamiento</Text>
      <View style={styles.inventoryList}>
        <Text style={styles.inventoryItem}>• Pantalla 4K de 85"</Text>
        <Text style={styles.inventoryItem}>• Sistema de Micrófonos Omnidireccionales</Text>
        <Text style={styles.inventoryItem}>• Cámara PTZ para videollamadas</Text>
        <Text style={styles.inventoryItem}>• Red Wi-Fi dedicada</Text>
        <Text style={styles.inventoryItem}>• Tomas Eléctricas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  inventoryList: {
    gap: 6,
  },
  inventoryItem: {
    fontSize: 14,
    color: '#334155',
  },
});