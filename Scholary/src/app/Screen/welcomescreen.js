import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Buttons from '../components/Buttons'; 

const WelcomeScreen = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
  
      <Image 
        style={styles.image} 
        source={require('../assets/logo.png')} 
        resizeMode="contain" 
      />

      
      <View style={styles.textContainer}>
        
        <Text style={styles.title}>We are happy to have you here!</Text>
      </View>

      <TouchableOpacity
        style={styles.arrowButton}
        onPress={() => navigation.navigate('Home')} 
      >
        <Text style={styles.arrowText}> &gt; </Text>  
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  image: {
    height: '40%', width: '80%',
    marginBottom: 40, 
  },
  textContainer: {
    marginBottom: 40, 
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
 
  arrowButton: {
    backgroundColor: '#007BFF', width: 60,
    height: 60,
    borderRadius: 30, 
    alignItems: 'center',
    marginTop: 20,
  },
  arrowText: {
    fontSize: 40,
    color: 'white', 
    fontWeight: 'bold',
  },
});
