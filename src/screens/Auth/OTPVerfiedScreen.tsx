import React, { useEffect } from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';


const OTPVerfiedScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  useEffect(() => {
    handleOTPSubmit();
  }, [3000]);

  const handleOTPSubmit = () => {
    navigation.navigate('OnboardingScreen1');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/done.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>
        OTP verified successfully
      </Text>
    </View>
  );
};

export default OTPVerfiedScreen;

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
