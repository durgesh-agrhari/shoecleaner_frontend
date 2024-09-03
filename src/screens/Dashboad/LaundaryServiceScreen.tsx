import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, Card} from 'react-native-paper';
// import {useNavigation} from '@react-navigation/native';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Icon, MD3Colors} from 'react-native-paper';

type ServiceItem = {
  id: string;
  name: string;
  price: string;
  image: string;
};

const LaundaryServiceScreen = () => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [cartItems, setCartItems] = useState<ServiceItem[]>([]);
  // const navigation = useNavigation();
  const navigation = useNavigation<NavigationProp<any>>();

  // Example function to fetch services from an API or global store
  const fetchServices = async () => {
    // This is just a placeholder. Replace it with actual data fetching logic later.
    const fetchedServices = [
      {
        id: '1',
        name: 'Polishing (Shoes & Sandals)',
        price: '₹100',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s',
      },
      {
        id: '2',
        name: 'Stitching',
        price: '₹100',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s',
      },
      {
        id: '3',
        name: 'Washing',
        price: '₹100',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s',
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
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <View>
          <Icon source="arrow-left" size={30} color={'#EAEAEA'} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.headerText}>Quick Services</Text>
        </View>
      </TouchableOpacity>

      {/* Sale Banner */}
      <Card style={styles.bannerCard}>
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-psd/big-offer-promotion-banner-template_47987-13437.jpg',
          }} // Replace with actual banner image URI
          style={styles.bannerImage}
        />
      </Card>

      {/* Services List */}
      {services.map(item => (
        <Card key={item.id} style={styles.serviceCard}>
          <View style={styles.serviceContent}>
            <Image source={{uri: item.image}} style={styles.serviceImage} />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.servicePrice}>{item.price}</Text>
            </View>
            <Button
              mode="contained"
              // onPress={() => handleAddToCart(item)}

              onPress={() => {
                navigation.navigate('CartScreen');
              }}
              style={styles.addButton}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                Add
              </Text>
            </Button>
          </View>
        </Card>
      ))}
    </View>
  );
};

export default LaundaryServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bannerCard: {
    margin: 15,
  },
  bannerImage: {
    height: 150,
    borderRadius: 10,
  },
  serviceCard: {
    backgroundColor: '#4A90E2',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  serviceInfo: {
    flex: 1,
    marginLeft: 15,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  servicePrice: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
  },
});
