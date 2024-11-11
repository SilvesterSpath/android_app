import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';

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

  return (
    <View>
      <Button
        title='Add a Color'
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <Button title='More  Red' onPress={() => setRed(red + 1)} />
      <Button title='More  Green' onPress={() => setGreen(green + 1)} />
      <Button title='More  Blue' onPress={() => setBlue(blue + 1)} />
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
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
