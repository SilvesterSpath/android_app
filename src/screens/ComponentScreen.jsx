import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/Easing';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>First android text</Text>;
};

export default ComponentsScreen;
