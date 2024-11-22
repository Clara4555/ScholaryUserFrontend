import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/app/Screen/HomeScreen';
import SignUpScreen from './src/app/Screen/SignUpScreen'; 
import LoginScreen from './src/app/Screen/LoginScreen';
import WelcomeScreen from './src/app/Screen/welcomescreen'; 

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      {/* Welcome Screen */}
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />

      {/* Home Screen */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />

      {/* Sign Up Screen */}
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ headerShown: false }} 
      />

      {/* Login Screen */}
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default Navigation;
