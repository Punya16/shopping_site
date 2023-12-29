import React from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';

const Products = ({ navigation }: any) => {
  // Mock data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      image: require('../assets/images/bag.jpg'), // Replace with actual image path
    },
    // Add more products here
  ];

  const handleBuy = (productId: number) => {
    // Handle product purchase logic here
    // Example: Add the product to purchases list
    console.log(`Product ${productId} added to purchases.`);
  };

  return (
    <ScrollView>
      {products.map((product) => (
        <View key={product.id}>
          <Image source={product.image} />
          <Text>{product.name}</Text>
          <Text>{product.description}</Text>
          <Button title="BUY" onPress={() => handleBuy(product.id)} />
        </View>
      ))}
    </ScrollView>
  );
};

export default Products;
