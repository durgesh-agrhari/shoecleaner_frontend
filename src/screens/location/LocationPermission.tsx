// src/screens/LocationPermission.tsx
import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';

const LocationPermission = () => {
  const navigation = useNavigation();

  const handleAllowPress = async () => {
    const granted = await request(
      Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
    );

    if (granted === 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          // Navigate to HomeScreen after permission is granted
          navigation.navigate('HomeScreen');
        },
        error => console.error(error),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Allow your location</Text>
      <Text style={styles.subtext}>We will need your location for a better experience</Text>
      <Button mode="contained" onPress={handleAllowPress} style={styles.allowButton}>
        Allow
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')} style={styles.notNowButton}>
        Not now
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Use the background color from the design
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    marginBottom: 30,
  },
  allowButton: {
    width: '80%',
    marginBottom: 10,
    backgroundColor: '#FFD700', // Use the button color from the design
  },
  notNowButton: {
    width: '80%',
  },
});

export default LocationPermission;
