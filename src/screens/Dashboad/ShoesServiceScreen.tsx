import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

type ServiceItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const ShoeServiceScreen = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [cartItems, setCartItems] = useState<ServiceItem[]>([]);
  const navigation = useNavigation();

  // Example function to fetch services from an API or global store
  const fetchServices = async () => {
    // This is just a placeholder. Replace it with actual data fetching logic later.
    const fetchedServices = [
      {
        id: '1',
        name: 'Polishing (Shoes & Sandals)',
        price: '₹100',
        image: 'https://example.com/polishing.png',
      },
      {
        id: '2',
        name: 'Stitching',
        price: '₹100',
        image: 'https://example.com/stitching.png',
      },
      {
        id: '3',
        name: 'Washing',
        price: '₹100',
        image: 'https://example.com/washing.png',
      },
    ];
    setServices(fetchedServices);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddToCart = (item: ServiceItem) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Quick Services</Text>
      </View>

      {/* Sale Banner */}
      <Card style={styles.bannerCard}>
        <Image
          source={{ uri: 'https://example.com/banner.png' }} // Replace with actual banner image URI
          style={styles.bannerImage}
        />
      </Card>

      {/* Services List */}
      {services.map((item) => (
        <Card key={item.id} style={styles.serviceCard}>
          <View style={styles.serviceContent}>
            <Image source={{ uri: item.image }} style={styles.serviceImage} />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.servicePrice}>{item.price}</Text>
            </View>
            <Button
              mode="contained"
              onPress={() => handleAddToCart(item)}
              style={styles.addButton}
            >
              Add
            </Button>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default ShoeServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerCard: {
    margin: 15,
  },
  bannerImage: {
    height: 150,
    borderRadius: 10,
  },
  serviceCard: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicePrice: {
    fontSize: 14,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#FFD700',
  },
});
