import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <div>
      ImageScreen
      <ImageDetail title='Forest' />
      <ImageDetail title='Mountains' />
      <ImageDetail title='See' />
    </div>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
