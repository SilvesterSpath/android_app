import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {
  const [color, setColor] = useState('red');
  const [left, setLeft] = useState(10);
  const [top, setTop] = useState(10);

  const randomPosition = () => {
    const left = Math.floor(Math.random() * 256);
    const top = Math.floor(Math.random() * 256);
    setLeft(left);
    setTop(top);
  };

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    setColor(`rgb(${red}, ${green}, ${blue})`);
    randomPosition();
  };

  return (
    <View>
      <Button title='Add a Color' onPress={randomRgb} />
      <View
        style={{
          height: 100,
          width: 100,
          left: left,
          top: top,
          backgroundColor: color,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
