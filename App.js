import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import AddAppointmentScreen from './screens/AddAppointmentScreen';
import EditAppointmentScreen from './screens/EditAppointmentScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Citas' }} />
        <Stack.Screen name="AddAppointment" component={AddAppointmentScreen} options={{ title: 'Agregar Cita' }} />
        <Stack.Screen name="EditAppointment" component={EditAppointmentScreen} options={{ title: 'Editar Cita' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
