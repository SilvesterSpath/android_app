import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // setCounter(counter + 1);
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button onPress={increment} title='Increment' />
    </View>
  );
};

export default CounterScreen;
