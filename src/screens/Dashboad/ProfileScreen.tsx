import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, TextInput, Button, Avatar} from 'react-native-paper';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Avatar.Image
        size={120}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kQde9WSUovyViQF7mGAfRzW513_M3cFpT8i8HY7kBW7n0khwbUh802vKT1dXYJoBndA&usqp=CAU',
        }}
        style={styles.avatar}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value="John Doe"
          style={styles.input}
          underlineColor="gray"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-Mail</Text>
        <TextInput
          value="johndoe@gmail.com"
          style={styles.input}
          underlineColor="gray"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile number</Text>
        <TextInput
          value="+91     9876543210"
          style={styles.input}
          underlineColor="gray"
        />
      </View>

      <Button
        mode="contained"
        onPress={() => console.log('Saved locations pressed')}
        style={styles.button}>
        Saved locations
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#5F95FF',
    padding: 15,
  },
  avatar: {
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: '#6b6b6b',
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  button: {
    marginTop: 30,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#3f51b5',
    marginHorizontal: 20,
  },
});

export default ProfileScreen;
