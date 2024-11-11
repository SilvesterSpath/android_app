import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const ColorScreen_3 = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  const incrementRed = () => {
    red < 255 && setRed(red + COLOR_INCREMENT);
  };
  const decrementRed = () => {
    red > 0 && setRed(red - COLOR_INCREMENT);
  };

  const incrementGreen = () => {
    green < 255 && setGreen(green + COLOR_INCREMENT);
  };
  const decrementGreen = () => {
    green > 0 && setGreen(green - COLOR_INCREMENT);
  };

  const incrementBlue = () => {
    blue < 255 && setBlue(blue + COLOR_INCREMENT);
  };
  const decrementBlue = () => {
    blue > 0 && setBlue(blue - COLOR_INCREMENT);
  };

  return (
    <View>
      <ColorCounter
        color='Red'
        value={red}
        increment={incrementRed}
        decrement={decrementRed}
      />
      <ColorCounter
        color='Green'
        value={green}
        increment={incrementGreen}
        decrement={decrementGreen}
      />
      <ColorCounter
        color='Blue'
        value={blue}
        increment={incrementBlue}
        decrement={decrementBlue}
      />
      <p></p>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default ColorScreen_3;
