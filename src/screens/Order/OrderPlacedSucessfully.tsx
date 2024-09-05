import React, {useEffect} from 'react';
import {StyleSheet, View, Image, Text, SafeAreaView} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const OrderPlacedSuccessfully: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNavigation();
    }, 2000);

    // Clear the timeout if the component is unmounted before the timer ends
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/done.jpg')} style={styles.image} />
      <Text style={styles.text}>Order placed successfully</Text>
    </SafeAreaView>
  );
};

export default OrderPlacedSuccessfully;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F95FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
  },
  text: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
  },
});
