import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Text, Card, TextInput} from 'react-native-paper';
import {Icon, MD3Colors} from 'react-native-paper';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const OrderCard = ({title, orderDate, status, totalCost, imageUrl}: any) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OrderTracking');
      }}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.textContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.orderDetail}>Order date: {orderDate}</Text>
            <Text style={styles.orderDetail}>Status: {status}</Text>
            <Text style={styles.totalCost}>Total cost: ₹{totalCost}</Text>
          </View>
          <Image source={{uri: imageUrl}} style={styles.image} />
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const OrdersScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (query: string) => setSearchQuery(query);
  // const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: '#5F95FF'}}>
        <Text style={styles.header}>My Orders</Text>
      </View>
      <ScrollView style={{marginHorizontal: 20, marginTop: 20}}>
        <View style={{marginBottom: 20}}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.serachorder}
          />
        </View>
        {/* <TextInput
          placeholder="Search in orders"
          value={searchQuery}
          onChangeText={handleSearchChange}
          style={styles.searchInput}
        /> */}
        <OrderCard
          title="Washing"
          orderDate="24/08/2024"
          status="Pending"
          totalCost="100"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s"
        />
        <OrderCard
          title="Washing"
          orderDate="24/08/2024"
          status="Pending"
          totalCost="100"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s"
        />
        <OrderCard
          title="Washing"
          orderDate="24/08/2024"
          status="Pending"
          totalCost="100"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTUzp5xmVe86B0Fgo7T4tKv36cm8y0M9Dsfg&s"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  searchInput: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  serachorder: {
    borderRadius: 10,
    borderColor: '#a4a4a6',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#4069B2',
    padding: 16,
    borderRadius: 8,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffbf00',
    marginBottom: 8,
  },
  orderDetail: {
    fontSize: 14,
    marginBottom: 4,
    color: 'white',
  },
  totalCost: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'white',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 8,
  },
});

export default OrdersScreen;
