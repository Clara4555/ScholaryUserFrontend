import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Screen from '../components/Screen';
import Button from '../components/Buttons'; 
import helpers from '../components/helpers/common';
import theme from '../constants/theme';

const HomeScreen = ({ navigation }) => {  
  const [loading, setLoading] = useState(false); 

  return (
    <Screen bg="white">
      <View style={styles.container}>
        <Image 
          style={styles.welcomeImage} 
          resizeMode="contain" 
          source={require('../assets/welcomeimage.png')} 
        />

        <View style={{ gap: 20 }}>
          <Text style={styles.title}>Welcome to lockedIn</Text>
          <Text style={styles.subTitle}>We’ll help set up your account in a few steps!</Text>
        </View>

        <View style={styles.footer}>
          <Button
            loading={loading} 
            buttonStyle={{ marginHorizontal: helpers.wp(3), marginTop: 20 }}
            title="Get Started" 
            onPress={() => {
              setLoading(true); 
              setTimeout(() => {
                setLoading(false); 
                navigation.navigate('SignUp'); 
              }, 3000); 
            }}
          />
          
          <View style={styles.login}>
            <Text style={styles.logintext}>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.logintext, { color: theme.colors.button, fontWeight: theme.fonts.semibold }]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: helpers.wp(4),
    backgroundColor: 'white',
  },
  welcomeImage: {
    height: helpers.hp(50),
    width: helpers.wp(100),
    alignSelf: 'center',
  },
  title: {
    fontSize: helpers.hp(4),
    fontWeight: theme.fonts.extrabold,
    color: '#000000',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: helpers.hp(1.7),
    color: '#424242',
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: helpers.wp(10),
  },
  footer: {
    gap: 20,
    marginTop: 20,
    width: '100%',
  },
  login: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  logintext: {
    textAlign: 'center',
    color: theme.colors.subtext,
    fontSize: helpers.hp(1.6),
  },
});
