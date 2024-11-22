import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Home from '../assets/icons/Home'
import Screen from '../components/Screen';
import Button from '../components/Buttons'; 
import helpers from '../components/helpers/common';
import theme from '../constants/theme';

const LoginScreen = ({ navigation }) => {  
  
  return (
    <Screen bg="white">
      <Text style={styles.container}>
       <Home strokeWidth={2} color={theme.colors.button}/>
      </Text>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

});
