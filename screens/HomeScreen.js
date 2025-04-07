import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppointmentCard from '../components/AppointmentCard';
import { useIsFocused } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const [citas, setCitas] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const cargarCitas = async () => {
      const data = await AsyncStorage.getItem('citas');
      if (data) setCitas(JSON.parse(data));
    };
    cargarCitas();
  }, [isFocused]);

  const eliminarCita = async (id) => {
    const nuevas = citas.filter(c => c.id !== id);
    setCitas(nuevas);
    await AsyncStorage.setItem('citas', JSON.stringify(nuevas));
  };

  const editarCita = (cita) => {
    navigation.navigate('EditAppointment', { cita }); // ✅ nombre corregido
  };

  return (
    <View style={styles.container}>
      <Button
        title="Agregar Nueva Cita"
        onPress={() => navigation.navigate('AddAppointment')} // ✅ nombre corregido
      />
      <FlatList
        data={citas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AppointmentCard cita={item} onDelete={eliminarCita} onEdit={editarCita} />
        )}
        numColumns={1}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
