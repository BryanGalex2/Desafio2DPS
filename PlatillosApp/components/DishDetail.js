import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DishDetail = ({ route }) => {
  const { dish } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.image}/>{/* Cambia aquí */}
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      <Text style={styles.price}>Precio: ${dish.price}</Text>
      <Text style={styles.region}>Región: {dish.region}</Text>
      <Text style={styles.category}>Categoría: {dish.category}</Text>
      <Text style={styles.ingredientsTitle}>Ingredientes:</Text>
      {dish.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          - {ingredient}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  region: {
    fontSize: 16,
    marginVertical: 5,
  },
  category: {
    fontSize: 16,
    marginVertical: 5,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default DishDetail;