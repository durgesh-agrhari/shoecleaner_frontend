import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, RadioButton, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState<string>('cod');
  const [location, setLocation] = useState<string>('Home');

  const products = [
    { id: 1, name: 'Washing', quantity: 1, price: 100 },
    { id: 2, name: 'Polishing (Shoes & Sandals)', quantity: 3, price: 300 },
  ];

  const totalPrice = products.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    navigation.navigate('OrderPlaced'); // Redirect to Order placed screen
  };

  const handleChangeLocation = () => {
    navigation.navigate('DisplayLocation'); // Redirect to location change screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      {products.map((product) => (
        <Card key={product.id} style={styles.productCard}>
          <Card.Content style={styles.productContent}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>₹{product.price}</Text>
          </Card.Content>
          <Text style={styles.productQuantity}>{product.quantity} item</Text>
        </Card>
      ))}
      <Text style={styles.totalPrice}>Total price: ₹{totalPrice}</Text>
      <Text style={styles.paymentMethodTitle}>Select payment method</Text>
      <RadioButton.Group onValueChange={newValue => setPaymentMethod(newValue)} value={paymentMethod}>
        <RadioButton.Item label="Cash on delivery" value="cod" />
        <RadioButton.Item label="UPI" value="upi" />
        <RadioButton.Item label="Net Banking" value="netBanking" />
        <RadioButton.Item label="Credit/Debit Card" value="card" />
      </RadioButton.Group>
      <Text style={styles.locationTitle}>Select your location</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <Button mode="contained" onPress={handleChangeLocation} style={styles.changeButton}>
          Change
        </Button>
      </View>
      <Button mode="contained" onPress={handlePlaceOrder} style={styles.placeOrderButton}>
        Place Order
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  productCard: {
    marginBottom: 16,
  },
  productContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
  },
  productQuantity: {
    textAlign: 'right',
    marginTop: 8,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  paymentMethodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationText: {
    fontSize: 16,
  },
  changeButton: {
    marginLeft: 16,
  },
  placeOrderButton: {
    marginTop: 16,
  },
});

export default PaymentScreen;
