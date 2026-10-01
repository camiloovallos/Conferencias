import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  areaInput: string;
  setAreaInput: (text: string) => void;
  onGuardar: () => void;
}

export default function FormularioArea({ areaInput, setAreaInput, onGuardar }: Props) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>🏢 Asignar Departamento / Área</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Gerencia de Tecnología"
        value={areaInput}
        onChangeText={setAreaInput}
        placeholderTextColor="#888"
      />
      <TouchableOpacity
        style={styles.saveButton}
        onPress={onGuardar}
        activeOpacity={0.8}
      >
        <Text style={styles.saveButtonText}>Guardar Asignación</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#0F172A',
    backgroundColor: '#F8FAFC',
    marginBottom: 12,
  },
  saveButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});