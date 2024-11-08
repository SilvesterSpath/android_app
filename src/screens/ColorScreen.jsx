import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorScreen = () => {
  const [boxes, setBoxes] = useState([]);

  const generateRandomBox = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;

    const left = Math.floor(Math.random() * 600);
    const top = Math.floor(Math.random() * 600);

    return {
      id: Date.now(), // unique identifier for each box
      color,
      left,
      top,
    };
  };

  const addBox = () => {
    const newBox = generateRandomBox();
    setBoxes([...boxes, newBox]);
    console.log(boxes);
  };

  return (
    <View style={styles.container}>
      <Button title='Add a Color' onPress={addBox} />
      <View style={styles.boxContainer}>
        {boxes.map((box) => (
          <View
            key={box.id}
            style={[
              styles.box,
              {
                backgroundColor: box.color,
                left: box.left,
                top: box.top,
              },
            ]}
          />
        ))}
      </View>
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
