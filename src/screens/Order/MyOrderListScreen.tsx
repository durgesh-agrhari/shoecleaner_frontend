import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Searchbar, Card} from 'react-native-paper';

import {useNavigation, NavigationProp} from '@react-navigation/native';

const MyOrderListScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [orders, setOrders] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation(); // Hook to access navigation

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        // Replace with your actual API call
        const response = await fetch('API_ENDPOINT');
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const filteredOrders = orders.filter(order =>
    order.date.includes(searchQuery),
  );

  const renderOrderItem = ({item}: {item: (typeof orders)[0]}) => (
    <TouchableOpacity
    // onPress={() => navigation.navigate('TrackOrder', { orderId: item.id })}
    >
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.detail}>Order date: {item.date}</Text>
              <Text style={styles.detail}>Status: {item.status}</Text>
              <Text style={styles.detail}>Total cost: ₹{item.cost}</Text>
            </View>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Orders</Text>
      <Searchbar
        placeholder="Search in orders"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={filteredOrders}
          renderItem={renderOrderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    marginBottom: 16,
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: 'green',
    marginBottom: 16,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    color: 'gray',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default MyOrderListScreen;
