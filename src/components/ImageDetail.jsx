import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Text style={styles.text}>ImageDetail: {title}</Text>
      <Image
        source={imageSource}
        // Add width and height - this is required for React Native images
        style={styles.image}
      />
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
