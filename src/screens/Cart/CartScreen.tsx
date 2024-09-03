import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, Card, IconButton} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Icon, MD3Colors} from 'react-native-paper';
type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Washing',
      price: 100,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s', // Replace with actual image URI
      quantity: 1,
    },
    {
      id: '2',
      name: 'Polishing (Shoes & Sandals)',
      price: 300,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s', // Replace with actual image URI
      quantity: 3,
    },
  ]);

  // const navigation = useNavigation();

  const handleQuantityChange = (itemId: string, change: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item,
      ),
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.navigate('LaundaryServiceScreen');
        }}>
        <View>
          <Icon source="arrow-left" size={30} color={'#EAEAEA'} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.headerText}>My Cart</Text>
        </View>
      </TouchableOpacity>

      {cartItems.map(item => (
        <Card key={item.id} style={styles.cartItemCard}>
          <View style={styles.cartItemContent}>
            <Image source={{uri: item.image}} style={styles.cartItemImage} />
            <View style={styles.cartItemInfo}>
              <Text style={styles.cartItemName}>{item.name}</Text>
              <Text style={styles.cartItemPrice}>
                ₹{item.price * item.quantity}
              </Text>
            </View>
            <View style={styles.quantityControl}>
              <View style={styles.plusbc}>
                <IconButton
                  icon="minus"
                  size={20}
                  iconColor="black"
                  onPress={() => handleQuantityChange(item.id, -1)}
                />
              </View>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <View style={styles.plusbc}>
                <IconButton
                  icon="plus"
                  size={20}
                  iconColor="black"
                  onPress={() => handleQuantityChange(item.id, 1)}
                />
              </View>
            </View>
          </View>
        </Card>
      ))}
      <View>
        <TouchableOpacity
          style={{flexDirection: 'row', marginHorizontal: 30}}
          // onPress={() => navigation.navigate('HomeScreen')}
        >
          <View></View>
          <View style={styles.addmore}>
            <Text style={styles.addMoreButton}>+ Add more</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceText}>Total price</Text>
        <Text style={styles.totalPriceValue}>₹{calculateTotalPrice()}</Text>
      </View>

      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate('OrderPlacedScreen');
        }}
        style={styles.proceedButton}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
          Proceed
        </Text>
      </Button>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    // padding: 15,
  },
  // header: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'white',
  //   padding: 10,
  // },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  cartItemCard: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#5F95FF',
  },
  cartItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  cartItemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  addMoreButton: {
    color: 'black',
    fontSize: 16,
    // marginTop: 10,
    marginHorizontal: 30,
  },
  plusbc: {
    backgroundColor: '#FFD600',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addmore: {
    backgroundColor: '#FEB737',
    padding: 8,
    borderRadius: 8,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 30,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPriceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  proceedButton: {
    backgroundColor: '#FEB737',
    marginHorizontal: 30,
  },
});
