import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <div>
      ImageScreen
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
      />
      <ImageDetail
        title='Mountains'
        imageSource={require('../../assets/mountain.jpg')}
      />
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
      />
    </div>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
