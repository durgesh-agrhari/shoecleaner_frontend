import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Text,
  Card,
  Button,
  RadioButton,
  IconButton,
  TextInput,
} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Icon} from 'react-native-paper';

const LocationCard = ({label, address, isSelected, onEdit}: any) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [loader, setloader] = useState(false);
  const postAction = () => {
    setloader(true);
  };
  function renderModel() {
    return (
      <Modal transparent={true} visible={loader}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.8)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '95%',
              height: 350,
              backgroundColor: 'white',
              top: 200,
              position: 'absolute',
              borderRadius: 20,
              // marginHorizontal:20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={styles.left1}>Edit Location Address</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.right1}
                  onPress={() => setloader(false)}>
                  <Text
                    style={{color: 'red', fontWeight: 'bold', fontSize: 18}}>
                    Cancil
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.edittextbox}>
                <TextInput
                  placeholder="Edit T itle"
                  placeholderTextColor="green"
                  style={styles.input}
                />
              </View>
              <View style={styles.edittextbox}>
                <TextInput
                  placeholder="Edit your Location "
                  placeholderTextColor="green"
                  numberOfLines={5}
                  multiline={true}
                  style={styles.input}
                />
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text
                  style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
  return (
    <Card style={[styles.card, isSelected && styles.selectedCard]}>
      <View style={styles.cardContent}>
        <View style={styles.textContent}>
          <View style={styles.radioAndLabel}>
            <RadioButton
              value={label}
              status={isSelected ? 'checked' : 'unchecked'}
              onPress={() => {}}
              color="#ffbf00"
            />
            <Text style={styles.title}>{label}</Text>
          </View>
          <Text style={styles.address}>{address}</Text>
        </View>
        <Button
          mode="outlined"
          // onPress={onEdit}
          style={styles.editButton}
          onPress={() => {
            postAction();
          }}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Edit</Text>
        </Button>
      </View>
      {renderModel()}
    </Card>
  );
};

const ShowLocationScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerRow}>
          {/* <IconButton
            icon="arrow-left"
            size={24}
            onPress={() => {
              navigation.goBack();
              // navigation.navigate('ProfileScreen');
            }}
            style={styles.backButton}
          /> */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              // navigation.navigate('ProfileScreen');
            }}>
            <Icon source="arrow-left" size={30} color={'#EAEAEA'} />
          </TouchableOpacity>
          <Text style={styles.header}>My locations</Text>
        </View>

        {/* <Button mode="contained" icon="plus" onPress={() => {}} style={styles.newLocationButton}>
          New location
        </Button> */}
        <View style={styles.cart}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddLocationScreen');
            }}
            style={styles.cardicon}>
            <View style={{marginRight: 8}}>
              <Icon source="plus" size={30} color={'black'} />
            </View>
            <View>
              <Text style={styles.txtcard}>Add location</Text>
            </View>
          </TouchableOpacity>
        </View>

        <LocationCard
          label="Home"
          address="Number 12, AB tower opposite, 5th cross street, Anna Nagar, Bangalore, Karnataka"
          isSelected={true}
          onEdit={() => {}}
        />
        <LocationCard
          label="Office"
          address="456 Business Avenue, Ban, Bangalore, Karnataka"
          isSelected={false}
          onEdit={() => {}}
        />
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
    backgroundColor: '#5F95FF',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
  },
  backButton: {
    marginRight: 8,
    // color:'white'
  },
  header: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  newLocationButton: {
    marginBottom: 16,
    backgroundColor: '#e6f7ff',
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#4069B2',
    marginHorizontal: 15,
  },
  input:{
    borderRadius:8,
  },
  selectedCard: {
    borderColor: '#ffbf00',
    borderWidth: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContent: {
    flex: 1,
  },
  radioAndLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffbf00',
  },
  address: {
    fontSize: 14,
    color: 'white',
  },
  editButton: {
    marginLeft: 16,
    borderColor: '#ffbf00',
    backgroundColor: '#FEE000',
    borderRadius: 10,
  },

  cart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardicon: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 5,
  },
  txtcard: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },

  left1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  right1: {
    marginTop: 20,
    marginRight: 20,
    // backgroundColor: 'gray',
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  left: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  right: {
    marginTop: 20,
    marginRight: 20,
    borderRadius: 50,
    padding: 1,
  },
  edittextbox: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#FFD600',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default ShowLocationScreen;
