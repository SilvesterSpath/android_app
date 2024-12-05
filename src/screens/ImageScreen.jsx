import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <>
      <ImageDetail
        title='Beach'
        imageSource={require('../../assets/beach.jpg')}
        imageScore={9}
      />
      <ImageDetail
        title='Mountains'
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={7}
      />
      <ImageDetail
        title='Forest'
        imageSource={require('../../assets/forest.jpg')}
        imageScore={4}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
