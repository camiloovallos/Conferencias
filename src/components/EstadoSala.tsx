import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  isDisponible: boolean;
  onToggle: () => void;
}

export default function EstadoSala({ isDisponible, onToggle }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.statusButton,
        isDisponible ? styles.statusDisponible : styles.statusEnUso,
      ]}
      onPress={onToggle}
      activeOpacity={0.8}
    >
      <Text style={styles.statusButtonText}>
        {isDisponible ? '🟢 SALA DISPONIBLE' : '🔴 SALA EN USO'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  statusButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  statusDisponible: {
    backgroundColor: '#22C55E',
  },
  statusEnUso: {
    backgroundColor: '#EF4444',
  },
  statusButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});