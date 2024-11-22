import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/app/Screen/welcomescreen';
import HomeScreen from './src/app/Screen/HomeScreen';
import SignUpScreen from './src/app/Screen/SignUpScreen';  // Import the SignUp Screen
import LoginScreen from './src/app/Screen/LoginScreen';    // Import the LoginScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* First screen is WelcomeScreen */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        
        {/* Second screen is HomeScreen */}
        <Stack.Screen name="Home" component={HomeScreen} />
        
        {/* Add SignUpScreen here */}
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* Add LoginScreen here */}
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
