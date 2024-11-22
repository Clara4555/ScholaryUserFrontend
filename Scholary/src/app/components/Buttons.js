import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native';
import React from 'react';
import helpers from './helpers/common'; 
import theme from '../constants/theme';
import Loading from './Loading'; 

const Button = ({
  buttonStyle,
  textStyle,
  title = '',
  onPress = () => {},
  loading = false, 
  hasShadow = true,
}) => {
  const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  };

  
  if (loading) {
    return (
      <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
        <Loading /> 
      </View>
    );
  }


  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text> 
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    height: helpers.hp(6.6),
    paddingHorizontal: 20,
    backgroundColor: theme.colors.button,
    borderCurve:'continuous', 
    borderRadius: theme.radius.xl,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    
    fontSize: helpers.hp(2.5),
    fontWeight: theme.fonts.bold,
  },
});
