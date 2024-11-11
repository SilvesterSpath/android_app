import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const ColorScreen_3 = () => {
  const [colors, setColors] = useState([]);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  };

  console.log(red);
  console.log(green);
  console.log(blue);

  const incrementRed = () => {
    red < 255 && setRed(red + 1);
  };
  const decrementRed = () => {
    red > 0 && setRed(red - 1);
  };

  const incrementGreen = () => {
    green < 255 && setGreen(green + 1);
  };
  const decrementGreen = () => {
    green > 0 && setGreen(green - 1);
  };

  const incrementBlue = () => {
    blue < 255 && setBlue(blue + 1);
  };
  const decrementBlue = () => {
    blue > 0 && setBlue(blue - 1);
  };

  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
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
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

export default ColorScreen_3;
