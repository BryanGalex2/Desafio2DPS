import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function AppointmentCard({ cita, onDelete, onEdit }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Cliente: {cita.cliente}</Text>
      <Text style={styles.text}>Vehículo: {cita.modelo}</Text>
      <Text style={styles.text}>Fecha: {cita.fecha}</Text>
      <Text style={styles.text}>Hora: {cita.hora}</Text>
      {cita.descripcion ? <Text style={styles.text}>Descripción: {cita.descripcion}</Text> : null}
      <View style={styles.buttons}>
        <Button title="Editar" onPress={() => onEdit(cita)} />
        <Button
          title="Eliminar"
          color="red"
          onPress={() =>
            Alert.alert(
              'Eliminar Cita',
              '¿Estás seguro que deseas eliminar esta cita?',
              [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Eliminar', style: 'destructive', onPress: () => onDelete(cita.id) },
              ]
            )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  text: {
    marginBottom: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
