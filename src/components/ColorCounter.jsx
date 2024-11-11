import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const ColorCounter = ({ color, value, increment, decrement }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={increment} />
      <Button title={`Decrease ${color}`} onPress={() => decrement()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
