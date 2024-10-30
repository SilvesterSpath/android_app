import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <div>
      ImageScreen
      <ImageDetail title='Beach' />
      <ImageDetail title='Mountains' />
      <ImageDetail title='Forest' />
    </div>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
