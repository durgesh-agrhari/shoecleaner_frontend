// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/Auth/FirstScreen';
import Login from '../screens/Auth/Login';
import OTPScreen from '../screens/Auth/OTPScreen';
import OTPVerfiedScreen from '../screens/Auth/OTPVerfiedScreen';
import OnboardingScreen1 from '../screens/OnboardingScreen.tsx/OnboardingScreen1';
import OnboardingScreen2 from '../screens/OnboardingScreen.tsx/OnboardingScreen2';
import OnboardingScreen3 from '../screens/OnboardingScreen.tsx/OnboardingScreen3';
import AddLocationScreen from '../screens/location/AddLocationScreen';
import BottomTabs from '../components/BottomTabs';
import LaundaryServiceScreen from '../screens/Dashboad/LaundaryServiceScreen';
import CartScreen from '../screens/Cart/CartScreen';
import OrderPlacedScreen from '../screens/Order/OrderPlacedScreen';
import OrderPlacedSucessfully from '../screens/Order/OrderPlacedSucessfully';
import OrderTracking from '../screens/Order/OrderTracking';
// import HomeScreen from '../screens/Dashboad/HomeScreen';
// import OrderScreen from '../screens/Order/OrderScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="OTPVerfiedScreen" component={OTPVerfiedScreen} />
        <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
        <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
        <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} />
        <Stack.Screen name="AddLocationScreen" component={AddLocationScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen
          name="LaundaryServiceScreen"
          component={LaundaryServiceScreen}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="OrderTracking" component={OrderTracking} />
        <Stack.Screen name="OrderPlacedScreen" component={OrderPlacedScreen} />
        <Stack.Screen
          name="OrderPlacedSucessfully"
          component={OrderPlacedSucessfully}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
