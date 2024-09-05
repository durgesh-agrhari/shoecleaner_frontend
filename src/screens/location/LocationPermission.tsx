import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const LocationPermission: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.map}>
          <Image
            source={require('../../assets/map.jpg')}
            style={styles.image}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontWeight: '600',
            color: 'white',
            marginBottom: 20,
          }}>
          Allow your location{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '600',
            color: 'white',
          }}>
          We will need your location for better{' '}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            fontWeight: '600',
            color: 'white',
          }}>
          {' '}
          experience
        </Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('BottomTabs');
          }}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            navigation.navigate('BottomTabs');
          }}>
          <Text style={styles.text2}>Not now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationPermission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F95FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 120,
    width: 120,
  },
  text: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    padding: 8,
  },
  text2: {
    color: '#FEE000',
    fontSize: 25,
    textAlign: 'center',
    padding: 8,
  },
  skip: {
    marginTop: 20,
    marginLeft: 320,
  },
  btn: {
    backgroundColor: '#FEE000',
    marginHorizontal: 0,
    borderRadius: 10,
    marginTop: 60,
  },
  btn2: {
    borderColor: '#FEE000',
    borderWidth: 2,
    marginHorizontal: 0,
    borderRadius: 10,
    marginTop: 20,
  },
});

// // src/screens/LocationPermission.tsx
// import React from 'react';
// import { View, StyleSheet, Platform, SafeAreaView } from 'react-native';
// import { Button, Text } from 'react-native-paper';
// // import Geolocation from '@react-native-community/geolocation';
// // import { request, PERMISSIONS } from 'react-native-permissions';
// import { useNavigation } from '@react-navigation/native';

// const LocationPermission = () => {
//   const navigation = useNavigation();

//   const handleAllowPress = async () => {
//     // const granted = await request(
//       // Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
//     // );

//     // if (granted === 'granted') {
//     //   Geolocation.getCurrentPosition(
//     //     position => {
//     //       console.log(position);
//     //       // Navigate to HomeScreen after permission is granted
//     //       // navigation.navigate('HomeScreen');
//     //     },
//     //     error => console.error(error),
//     //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//     //   );
//     // }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Allow your location</Text>
//       <Text style={styles.subtext}>We will need your location for a better experience</Text>
//       <Button mode="contained" onPress={handleAllowPress} style={styles.allowButton}>
//         Allow
//       </Button>
//       <Button mode="outlined"
//       // onPress={() => navigation.navigate('HomeScreen')}
//       style={styles.notNowButton}>
//         Not now
//       </Button>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ADD8E6', // Use the background color from the design
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 10,
//   },
//   subtext: {
//     fontSize: 16,
//     marginBottom: 30,
//   },
//   allowButton: {
//     width: '80%',
//     marginBottom: 10,
//     backgroundColor: '#FFD700', // Use the button color from the design
//   },
//   notNowButton: {
//     width: '80%',
//   },
// });

// export default LocationPermission;
