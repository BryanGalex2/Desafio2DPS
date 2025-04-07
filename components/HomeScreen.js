import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import DishCard from './DishCard';
import dishes from '../data/dishes'; // Asegúrate de que la ruta sea correcta

const HomeScreen = ({ navigation }) => {
  const [dishesList, setDishesList] = useState([]);

  useEffect(() => {
    // Cargar los datos del JSON
    setDishesList(dishes);
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
        data={dishesList}
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