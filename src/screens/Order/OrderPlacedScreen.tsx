import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Text,
  Button,
  Card,
  RadioButton,
  Title,
  Paragraph,
} from 'react-native-paper';
import {Icon, MD3Colors} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const CartItem = ({title, image, price, quantity}: any) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Card.Cover style={styles.cardImage} source={{uri: image}} />
        <View style={styles.cardDetails}>
          <Title style={{color: 'white'}}>{title}</Title>
          <Paragraph style={{color: 'white'}}>{quantity} Item</Paragraph>
          <Paragraph style={{color: 'white'}}>₹{price}</Paragraph>
        </View>
      </View>
    </Card>
  );
};

const OrderPlacedScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('cod');
  const [address, setAddress] = useState<string>('Home');
  const navigation = useNavigation<NavigationProp<any>>();
  const washingQuantity = 1;
  const polishingQuantity = 3;
  const washingPrice = 100;
  const polishingPrice = 300;
  const totalPrice =
    washingQuantity * washingPrice + polishingQuantity * polishingPrice;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.navigate('CartScreen');
        }}>
        <View>
          <Icon source="arrow-left" size={30} color={'#EAEAEA'} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.headerText}>My Cart</Text>
        </View>
      </TouchableOpacity>
      <ScrollView style={styles.carditem}>
        <CartItem
          title="Washing"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s"
          price={washingPrice}
          quantity={washingQuantity}
        />
        <CartItem
          title="Polishing (Shoes & Sandals)"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s"
          price={polishingPrice}
          quantity={polishingQuantity}
        />

        <Text style={styles.totalPriceLabel}>Total price</Text>
        <Text style={styles.totalPriceValue}>₹{totalPrice}</Text>

        <Text style={styles.sectionTitle}>Select payment method</Text>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={paymentMethod}>
          <View style={styles.radioButtonContainer}>
            <RadioButton value="cod" />
            <Text>Cash on delivery</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton value="upi" />
            <Text>UPI</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton value="netbanking" />
            <Text>Net Banking</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton value="card" />
            <Text>Credit/Debit Card</Text>
          </View>
        </RadioButton.Group>

        <Text style={styles.sectionTitle}>Select your location</Text>
        <Card style={styles.addressCard}>
          <View style={styles.addressContainer}>
            <View>
              <Text style={styles.addressTitle}>{address}</Text>
              <Text>Number 12, AB tower opposite,</Text>
              <Text>5th cross street,</Text>
              <Text>Anna Nagar, Bangalore, Karnataka</Text>
            </View>
            <Button
              mode="outlined"
              onPress={() => {
                navigation.navigate('ShowLocationScreen');
              }}>
              Change
            </Button>
          </View>
        </Card>
        <Button
          mode="contained"
          style={styles.placeOrderButton}
          onPress={() => {
            navigation.navigate('OrderPlacedSucessfully');
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            {' '}
            Place Order
          </Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  carditem: {
    marginTop: 25,
    marginHorizontal: 20,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#4069B2',
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  cardDetails: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'center',
  },
  totalPriceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 8,
  },
  totalPriceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#d32f2f',
    textAlign: 'right',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  addressCard: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  placeOrderButton: {
    marginTop: 20,
    backgroundColor: '#ffa000',
    borderRadius: 10,
  },
});

export default OrderPlacedScreen;
