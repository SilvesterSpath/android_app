import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image
        source={imageSource}
        // Add width and height - this is required for React Native images
        style={styles.image}
      />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>Image Score - {imageScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  image: {
    width: 300, // Add specific dimensions
    height: 200,
    resizeMode: 'cover',
  },
});

export default ImageDetail;
