import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const ColorScreen_3 = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red, green, blue);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        color='Red'
        increment={() => setColor('red', COLOR_INCREMENT)}
        decrement={() => setColor('red', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        increment={() => setColor('green', COLOR_INCREMENT)}
        decrement={() => setColor('green', -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        increment={() => setColor('blue', COLOR_INCREMENT)}
        decrement={() => setColor('blue', -1 * COLOR_INCREMENT)}
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
