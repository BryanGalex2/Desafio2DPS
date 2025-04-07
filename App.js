import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'; // Asegúrate de que la ruta sea correcta
import DishDetail from './components/DishDetail'; // Asegúrate de que la ruta sea correcta

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Platillos', 
            headerStyle: { backgroundColor: '#9c3151' }, 
            headerTintColor: '#fff', 
            headerTitleStyle: { fontWeight: 'bold' } 
          }} 
        />
        <Stack.Screen 
          name="DishDetail" 
          component={DishDetail} 
          options={{ 
            title: 'Detalles del Platillo', 
            headerStyle: { backgroundColor: '#9c3151' }, 
            headerTintColor: '#fff', 
            headerTitleStyle: { fontWeight: 'bold' } 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;