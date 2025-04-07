import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateAppointment } from '../utils/validateAppointment';
import uuid from 'react-native-uuid';

export default function AddAppointmentScreen({ navigation }) {
  const [cliente, setCliente] = useState('');
  const [modelo, setModelo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('citas').then(data => {
      if (data) setCitas(JSON.parse(data));
    });
  }, []);

  const guardarCita = async () => {
    const nueva = { id: uuid.v4(), cliente, modelo, fecha, hora, descripcion };
    const errores = validateAppointment(nueva, citas);
    if (errores.length > 0) {
      Alert.alert('Errores', errores.join('\n'));
      return;
    }
    const nuevas = [...citas, nueva];
    await AsyncStorage.setItem('citas', JSON.stringify(nuevas));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre del Cliente" style={styles.input} onChangeText={setCliente} />
      <TextInput placeholder="Modelo del Vehículo" style={styles.input} onChangeText={setModelo} />
      <TextInput placeholder="Fecha (YYYY-MM-DD)(La fecha no puede ser anterior a la actual)" style={styles.input} onChangeText={setFecha} />
      <TextInput placeholder="Hora (HH:MM)" style={styles.input} onChangeText={setHora} />
      <TextInput placeholder="Descripción (opcional)" style={styles.input} onChangeText={setDescripcion} />
      <Button title="Guardar Cita" onPress={guardarCita} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5,
  },
});

const handleAddAppointment = async () => {
    if (clientName.trim().length < 3) {
      Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres.');
      return;
    }
  
    const selectedDateTime = new Date(`${date}T${time}`);
    if (selectedDateTime <= new Date()) {
      Alert.alert('Error', 'La fecha y hora deben ser posteriores al momento actual.');
      return;
    }
  
    const existingAppointments = await AsyncStorage.getItem('appointments');
    const parsedAppointments = existingAppointments ? JSON.parse(existingAppointments) : [];
  
    const duplicate = parsedAppointments.find(
      appt => appt.date === date && appt.time === time && appt.vehicleModel.toLowerCase() === vehicleModel.toLowerCase()
    );
  
    if (duplicate) {
      Alert.alert('Error', 'Ya existe una cita para ese vehículo en esa fecha y hora.');
      return;
    }
  
    const newAppointment = {
      id: uuid.v4(),
      clientName,
      vehicleModel,
      date,
      time,
      description
    };
  
    const updatedAppointments = [...parsedAppointments, newAppointment];
    await AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    navigation.goBack();
  };
  