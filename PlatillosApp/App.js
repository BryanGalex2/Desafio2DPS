import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import DishDetail from './components/DishDetail';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Platillos Típicos' }} />
          <Stack.Screen name="DishDetail" component={DishDetail} options={{ title: 'Detalles del Platillo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}