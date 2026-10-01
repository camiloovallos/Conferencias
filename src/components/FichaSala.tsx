import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FichaSala() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
        }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.roomName}>Sala de Conferencias Ejecutiva A-1</Text>
        <Text style={styles.capacityText}>👥 Aforo Máximo Autorizado: 25 Personas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 16,
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  capacityText: {
    fontSize: 14,
    color: '#475569',
  },
});