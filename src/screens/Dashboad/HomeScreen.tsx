import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const data = [
    {
      image:
        'https://cdn09.nnnow.com/web-images/medium/styles/KTDP2DTUXKQ/1683610487559/1.jpg',
      title: 'Shoes & Sandal',
    },
    {
      image:
        'https://www.campusshoes.com/cdn/shop/products/FIRST_11G-787_BLK-MATTLIC.BLU.jpg?v=1705298910',
      title: 'Shoes & Sandal',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhhI57HtrokP6zstloweLXk1nz5g6eqiDSUhXS2_7-H3yQ5Oid8qv4q3psCe_97xeOC0&usqp=CAU',
      title: 'Shoes & Sandal',
    },
    {
      image:
        'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg',
      title: 'Shoes & Sandal',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
      title: 'Shoes & Sandal',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/9e/Lil_Nas_X_Satan_Shoes.png',
      title: 'Shoes & Sandal',
    },
  ];

  const services = [
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSigpNtip0FcCa_eYGTdy-f19QUoKP-cY2-qQ&s',
      title: 'Polishing',
    },
    {
      image:
        'https://4.imimg.com/data4/GM/FY/MY-3833109/ladies-suits-stitching.jpg',
      title: 'Stitching',
    },
    {
      image:
        'https://i.insider.com/5ea35316a34b3c1358599cd4?width=1136&format=jpeg',
      title: 'Shoes & Sandal',
    },
  ];

  return (
    <SafeAreaView>
      {/* header */}
      <View style={styles.header}>
        <Image source={require('../../assets/logo.jpg')} style={styles.img} />
      </View>
      <ScrollView>
        <View style={styles.cart}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CartScreen');
            }}
            style={styles.cardicon}>
            <View style={{marginRight: 8}}>
              <Icon source="shopping" size={30} color={'black'} />
            </View>
            <View>
              <Text style={styles.txtcard}>Cart</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.homebox}>
          <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
            Any help call us at +91 87654 87654
          </Text>
          <TouchableOpacity>
            <View style={styles.call}>
              <View style={{marginRight: 8}}>
                <Icon source="phone" size={25} color={'black'} />
              </View>
              <View>
                <Text style={styles.txtcard}>Call now</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.mapbox}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('LaundaryServiceScreen');
                }}
                style={styles.itemContainer}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: 20,
              color: '#543787',
              margin: 10,
              fontWeight: 'bold',
            }}>
            Quick Services{' '}
          </Text>
          <View style={styles.mapbox}>
            {services.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('LaundaryServiceScreen');
                }}
                style={styles.itemContainer}>
                <Image source={{uri: item.image}} style={styles.itemImage2} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 20,
              color: '#543787',
              margin: 10,
              fontWeight: 'bold',
            }}>
            Shose Category{' '}
          </Text>
          <View style={styles.mapbox2}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigation.navigate('LaundaryServiceScreen');
                }}
                style={styles.itemContainer}>
                <Image source={{uri: item.image}} style={styles.itemImage2} />
                <Text style={styles.itemTitle}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#5F95FF',
  },
  img: {
    width: '35%',
    height: 80,
    backgroundColor: 'red',
  },
  cart: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardicon: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    margin: 15,
    borderRadius: 8,
    paddingLeft: 20,
    paddingRight: 20,
    padding: 5,
  },
  txtcard: {
    fontSize: 20,
    color: 'black',
  },
  homebox: {
    backgroundColor: '#4069B2',
    marginTop: 10,
    margin: 30,
    marginBottom: 15,
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 10,
  },
  call: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFD600',
    borderRadius: 5,
    marginHorizontal: 100,
    marginTop: 25,
  },
  mapbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 0,
    margin: 10,
  },

  mapbox2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 0,
    margin: 10,
    marginBottom: 160,
  },

  itemContainer: {
    width: '25%', // Adjusted to fit two items per row
    alignItems: 'center',
    margin: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  itemImage2: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black',
  },
});

// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   Touchable,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import {Icon, MD3Colors} from 'react-native-paper';
// import {useNavigation, NavigationProp} from '@react-navigation/native';

// const HomeScreen = () => {
//   const navigation = useNavigation<NavigationProp<any>>();
//   const data = [
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Shoses & Sandle',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Shoses & Sandle',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Shoses & Sandle',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Shoses & Sandle',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Shoses & Sandle',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Shoses & Sandle',
//     },
//   ];

//   const services = [
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Polishing',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Stitching',
//     },
//     {
//       image:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDZrkDOqUqMF3dWL4ZmXZXaOdzs9hWNWJ-g&s',
//       title: 'Washing',
//     },
//   ];

//   return (
//     <SafeAreaView>
//       {/* heder */}

//       <View style={styles.header}>
//         <Image source={require('../../assets/logo.jpg')} style={styles.img} />
//       </View>
//       <ScrollView>
//         <View style={styles.cart}>
//           <View></View>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate('CartScreen');
//             }}
//             style={styles.cardicon}>
//             <View style={{marginRight: 8}}>
//               <Icon source="shopping" size={30} color={'black'} />
//             </View>
//             <View>
//               <Text style={styles.txtcard}>Cart</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.homebox}>
//           <View>
//             <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>
//               Any help call us at +91 87654 87654
//             </Text>
//           </View>
//           <TouchableOpacity>
//             <View style={styles.call}>
//               <View style={{marginRight: 8}}>
//                 <Icon source="phone" size={25} color={'black'} />
//               </View>
//               <View>
//                 <Text style={styles.txtcard}>Call now</Text>
//               </View>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View>
//           <View style={styles.mapbox}>
//             {data.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   navigation.navigate('LaundaryServiceScreen');
//                 }}
//                 style={styles.itemContainer}>
//                 <Image source={{uri: item.image}} style={styles.itemImage} />
//                 <Text style={styles.itemTitle}>{item.title}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>

//         <View>
//           <Text
//             style={{
//               fontSize: 20,
//               color: '#543787',
//               margin: 10,
//               fontWeight: 'bold',
//             }}>
//             Quick Services{' '}
//           </Text>
//           <View style={styles.mapbox}>
//             {data.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   navigation.navigate('LaundaryServiceScreen');
//                 }}
//                 style={styles.itemContainer}>
//                 <Image source={{uri: item.image}} style={styles.itemImage2} />
//                 <Text style={styles.itemTitle}>{item.title}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <View style={styles.mapbox}>
//             {data.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 onPress={() => {
//                   navigation.navigate('LaundaryServiceScreen');
//                 }}
//                 style={styles.itemContainer}>
//                 <Image source={{uri: item.image}} style={styles.itemImage2} />
//                 <Text style={styles.itemTitle}>{item.title}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#5F95FF',
//   },
//   img: {
//     width: '35%',
//     height: 80,
//     backgroundColor: 'red',
//   },
//   cart: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   cardicon: {
//     flexDirection: 'row',
//     borderColor: 'black',
//     borderWidth: 2,
//     margin: 15,
//     borderRadius: 8,
//     paddingLeft: 20,
//     paddingRight: 20,
//     padding: 5,
//   },
//   txtcard: {
//     fontSize: 20,
//     color: 'black',
//   },
//   homebox: {
//     backgroundColor: '#4069B2',
//     marginTop: 10,
//     margin: 30,
//     marginBottom: 15,
//     paddingTop: 35,
//     paddingBottom: 35,
//     borderRadius: 10,
//   },
//   call: {
//     padding: 5,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     backgroundColor: '#FFD600',
//     borderRadius: 5,
//     marginHorizontal: 100,
//     marginTop: 25,
//   },
//   mapbox: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     marginTop: 0,
//     margin: 10,
//   },

//   itemContainer: {
//     width:'100%',
//     alignItems: 'center',
//     margin: 10,
//   },
//   itemImage: {
//     width: "30%",
//     height: 80,
//     borderRadius: 50,
//   },
//   itemImage2: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     borderColor: 'gray',
//     borderWidth: 1,
//   },
//   itemTitle: {
//     marginTop: 10,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Button, Card, Title } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import LaundaryServiceScreen from './LaundaryServiceScreen';
// import ShoeServiceScreen from './ShoesServiceScreen';

// const HomeScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.helpText}>Any help call us at +91 87654 87654</Text>
//         <Button mode="contained" onPress={() => { /* Call functionality */ }} style={styles.callButton}>
//           Call Now
//         </Button>
//       </View>

//       {/* Categories Section */}
//       <View style={styles.categoryContainer}>
//         <Text style={styles.categoryTitle}>Shoes & Sandals</Text>
//         <View style={styles.row}>
//           <TouchableOpacity onPress={() => navigation.navigate('ShoesServiceScreen')}>
//             <Card style={styles.card}>
//               <Card.Content>
//                 <Title>Shoes & Sandals</Title>
//               </Card.Content>
//             </Card>
//           </TouchableOpacity>

//           {/* Add more categories similarly */}
//           <TouchableOpacity onPress={() => navigation.navigate('LaundaryServiceScreen')}>
//             <Card style={styles.card}>
//               <Card.Content>
//                 <Title>Washing</Title>
//               </Card.Content>
//             </Card>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Quick Services Section */}
//       <View style={styles.quickServicesContainer}>
//         <Text style={styles.sectionTitle}>Quick Services</Text>
//         <View style={styles.row}>
//           <TouchableOpacity onPress={() => navigation.navigate('ShoesServiceScreen')}>
//             <Card style={styles.quickCard}>
//               <Card.Content>
//                 <Title>Polishing</Title>
//               </Card.Content>
//             </Card>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigation.navigate('LaundaryServiceScreen')}>
//             <Card style={styles.quickCard}>
//               <Card.Content>
//                 <Title>Washing</Title>
//               </Card.Content>
//             </Card>
//           </TouchableOpacity>
//         </View>
//       </View>

//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#4A90E2',
//     padding: 20,
//     alignItems: 'center',
//   },
//   helpText: {
//     color: '#fff',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   callButton: {
//     backgroundColor: '#FFD700',
//   },
//   categoryContainer: {
//     padding: 15,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   card: {
//     width: 150,
//     height: 150,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   quickServicesContainer: {
//     padding: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   quickCard: {
//     width: 120,
//     height: 120,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
