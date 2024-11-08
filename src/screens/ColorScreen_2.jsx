import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  };

  return (
    <View style={styles.container}>
      <Button title='Add a Color' />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    height: 100,
    width: 100,
  },
});

export default ColorScreen;
