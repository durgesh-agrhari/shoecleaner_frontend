import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Text, TextInput, Button, IconButton} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Icon} from 'react-native-paper';

const AddLocationScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const [addressTitle, setAddressTitle] = useState('');
  const [flatDetails, setFlatDetails] = useState('');
  const [areaDetails, setAreaDetails] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSave = () => {
    // Handle save action here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <IconButton
          icon="arrow-left"
          size={24}
          onPress={() => {
            navigation.navigate('ShowLocationScreen');
          }}
          style={styles.backButton}
        />
        <Text style={styles.header}>Saved locations</Text>
      </View>
      <ScrollView style={{marginHorizontal: 20}}>
        <TextInput
          label="Address title"
          value={addressTitle}
          onChangeText={setAddressTitle}
          style={styles.input}
          mode="outlined"
        />

        <Button
          mode="contained"
          icon="map-marker"
          onPress={() => {}}
          style={styles.locationButton}>
          Use my location
        </Button>

        <TextInput
          label="Flat, House no., Building, Company, Apartment"
          value={flatDetails}
          onChangeText={setFlatDetails}
          style={styles.input}
          mode="flat"
        />

        <TextInput
          label="Area, Street, Sector"
          value={areaDetails}
          onChangeText={setAreaDetails}
          style={styles.input}
          mode="flat"
        />

        <TextInput
          label="Landmark"
          value={landmark}
          onChangeText={setLandmark}
          style={styles.input}
          mode="flat"
        />

        <TextInput
          label="Pincode"
          value={pincode}
          onChangeText={setPincode}
          style={styles.input}
          mode="flat"
        />

        <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
          Save
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#5F95FF',
  },
  backButton: {
    marginRight: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  locationButton: {
    marginBottom: 16,
    backgroundColor: '#4069B2',
    borderRadius: 10,
    marginHorizontal: 40,
  },
  saveButton: {
    marginTop: 32,
    backgroundColor: '#ffbf00',
    borderRadius: 10,
  },
});

export default AddLocationScreen;
