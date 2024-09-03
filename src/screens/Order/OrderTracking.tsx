import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Text, Card, List, Divider} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Icon, MD3Colors} from 'react-native-paper';
const OrderTracking = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.navigate('OrderScreen');
        }}>
        <View>
          <Icon source="arrow-left" size={30} color={'#EAEAEA'} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.headerText}>My Cart</Text>
        </View>
      </TouchableOpacity>
      <Card style={styles.card}>
        <Card.Title
          title="Washing"
          right={() => <Text style={styles.price}>₹100</Text>}
        />
        <Card.Content>
          <View style={styles.timelineContainer}>
            <List.Item
              title="Order placed"
              description="8:30 am, August 22, 2024"
              left={props => (
                <List.Icon {...props} icon="check-circle-outline" />
              )}
            />
            <Divider />
            <List.Item
              title="Order collected"
              description="11:30 am, August 22, 2024"
              left={props => (
                <List.Icon {...props} icon="check-circle-outline" />
              )}
            />
            <Divider />
            <List.Item
              title="Our Magic process"
              left={props => <List.Icon {...props} icon="progress-clock" />}
            />
            <Divider />
            <List.Item
              title="Shipped"
              left={props => <List.Icon {...props} icon="truck" />}
            />
            <Divider />
            <List.Item
              title="Order delivered"
              description="Expected date: August 23, 2024"
              left={props => <List.Icon {...props} icon="circle-outline" />}
            />
          </View>
        </Card.Content>
      </Card>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery address</Text>
        <Text>
          Number 12, AB tower opposite, 5th cross street, Anna Nagar, Bangalore,
          Karnataka
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Information</Text>
        <Text>Order No.: #0001</Text>
        <Text>Service: Washing</Text>
        <Text>Order date: 24/08/2024</Text>
        <Text>Order total: ₹100</Text>
      </View>
    </ScrollView>
  );
};

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
  card: {
    marginBottom: 16,
    marginHorizontal: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00c853',
  },
  timelineContainer: {
    marginTop: 8,
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default OrderTracking;
