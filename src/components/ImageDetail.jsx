import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ImageDetail = ({ title }) => {
  return <div>ImageDetail: {title}</div>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;
