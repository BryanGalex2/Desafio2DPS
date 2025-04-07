import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

const DishCard = ({ dish, onPress }) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.card}>
     < Image item={{ require: dish.image }} style={styles.image} /> 
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#666',
  },
});

export default DishCard;