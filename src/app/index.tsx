import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FichaSala from '../components/FichaSala';
import EstadoSala from '../components/EstadoSala';
import Inventario from '../components/Inventario';
import FormularioArea from '../components/FormularioArea';

const ASYNC_STORAGE_KEY_AREA = '@corporate_spaces_area_encargada';

export default function HomeScreen() {
  const [areaInput, setAreaInput] = useState<string>('');
  const [areaGuardada, setAreaGuardada] = useState<string>('Sin asignar');
  const [isDisponible, setIsDisponible] = useState<boolean>(true);

  // Recuperar del almacenamiento al iniciar/refrescar la app
  useEffect(() => {
    cargarAreaGuardada();
  }, []);

  const cargarAreaGuardada = async () => {
    try {
      const areaValor = await AsyncStorage.getItem(ASYNC_STORAGE_KEY_AREA);
      if (areaValor !== null) {
        setAreaGuardada(areaValor);
      }
    } catch (error) {
      console.error('Error al recuperar de AsyncStorage:', error);
    }
  };

  // Guardar en almacenamiento no volátil
  const guardarArea = async () => {
    if (areaInput.trim() === '') {
      Alert.alert('Atención', 'Por favor ingrese el nombre de un área o departamento.');
      return;
    }

    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_KEY_AREA, areaInput);
      setAreaGuardada(areaInput);
      setAreaInput('');
      Alert.alert('Éxito', 'Área asignada y guardada correctamente.');
    } catch (error) {
      Alert.alert('Error', 'No se pudo guardar la información.');
      console.error('Error guardando en AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <View style={styles.headerAreaContainer}>
          <Text style={styles.headerLabel}>Área / Depto. Encargado:</Text>
          <Text style={styles.headerValue}>{areaGuardada}</Text>
        </View>

        <FichaSala />

        <EstadoSala
          isDisponible={isDisponible}
          onToggle={() => setIsDisponible(!isDisponible)}
        />

        <Inventario />

        <FormularioArea
          areaInput={areaInput}
          setAreaInput={setAreaInput}
          onGuardar={guardarArea}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F9',
  },
  scrollContent: {
    padding: 16,
  },
  headerAreaContainer: {
    backgroundColor: '#1E293B',
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  headerLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  headerValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
});