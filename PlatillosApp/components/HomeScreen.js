import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import DishCard from './DishCard';
import dishesData from '../data/dishes.json'; // Asegúrate de que la ruta sea correcta
import { View, Text, Button, StyleSheet,TouchableOpacity,image } from 'reactnative';
const HomeScreen = ({ navigation }) => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Cargar los datos del JSON
    setDishes(dishesData);
  }, []);

  const renderDish = ({ item }) => (
    <DishCard
      dish={item}
      onPress={() => navigation.navigate('DishDetail', { dish: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dishes}
        renderItem={renderDish}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Dos columnas en modo horizontal
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;