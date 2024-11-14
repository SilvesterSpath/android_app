import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // setCounter(counter + 1);
    let newCounter = counter + 1;
    setCounter(newCounter);
    // setCounter is asynchronous
    console.log(counter, newCounter);
  };

  const decrement = () => {
    // setCounter(counter - 1);
    const newCounter = counter - 1;
    setCounter(newCounter);
    console.log(counter, newCounter);
  };

  useEffect(() => {
    console.log('Useffect counter', counter);
  }, [counter]);

  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button onPress={increment} title='Increment' />
      <Button onPress={decrement} title='Decrement' />
    </View>
  );
};

export default CounterScreen;
