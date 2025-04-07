import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateAppointment } from '../utils/validateAppointment';

export default function EditAppointmentScreen({ route, navigation }) {
  const { cita } = route.params;
  const [cliente, setCliente] = useState(cita.cliente);
  const [modelo, setModelo] = useState(cita.modelo);
  const [fecha, setFecha] = useState(cita.fecha);
  const [hora, setHora] = useState(cita.hora);
  const [descripcion, setDescripcion] = useState(cita.descripcion);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('citas').then(data => {
      if (data) setCitas(JSON.parse(data));
    });
  }, []);

  const guardarCambios = async () => {
    const actualizada = { id: cita.id, cliente, modelo, fecha, hora, descripcion };
    const filtradas = citas.filter(c => c.id !== cita.id);
    const errores = validateAppointment(actualizada, filtradas);
    if (errores.length > 0) {
      Alert.alert('Errores', errores.join('\n'));
      return;
    }

    const nuevas = [...filtradas, actualizada];
    await AsyncStorage.setItem('citas', JSON.stringify(nuevas));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre del Cliente" value={cliente} style={styles.input} onChangeText={setCliente} />
      <TextInput placeholder="Modelo del Vehículo" value={modelo} style={styles.input} onChangeText={setModelo} />
      <TextInput placeholder="Fecha (YYYY-MM-DD)" value={fecha} style={styles.input} onChangeText={setFecha} />
      <TextInput placeholder="Hora (HH:MM)" value={hora} style={styles.input} onChangeText={setHora} />
      <TextInput placeholder="Descripción (opcional)" value={descripcion} style={styles.input} onChangeText={setDescripcion} />
      <Button title="Guardar Cambios" onPress={guardarCambios} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5,
  },
});

const handleSave = async () => {
    if (clientName.trim().length < 3) {
      Alert.alert('Error', 'El nombre debe tener al menos 3 caracteres.');
      return;
    }
  
    const selectedDateTime = new Date(`${date}T${time}`);
    if (selectedDateTime <= new Date()) {
      Alert.alert('Error', 'La fecha y hora deben ser posteriores al momento actual.');
      return;
    }
  
    const storedAppointments = await AsyncStorage.getItem('appointments');
    const parsedAppointments = storedAppointments ? JSON.parse(storedAppointments) : [];
  
    const duplicate = parsedAppointments.find(
      appt =>
        appt.id !== appointment.id &&
        appt.date === date &&
        appt.time === time &&
        appt.vehicleModel.toLowerCase() === vehicleModel.toLowerCase()
    );
  
    if (duplicate) {
      Alert.alert('Error', 'Ya existe una cita para ese vehículo en esa fecha y hora.');
      return;
    }
  
    const updatedAppointments = parsedAppointments.map(appt =>
      appt.id === appointment.id
        ? {
            ...appt,
            clientName,
            vehicleModel,
            date,
            time,
            description
          }
        : appt
    );
  
    await AsyncStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    navigation.goBack();
  };
  
