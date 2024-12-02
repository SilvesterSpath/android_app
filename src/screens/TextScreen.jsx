import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        value={name}
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderWidth: 1,
    margin: 15,
    padding: 15,
  },
});

export default TextScreen;
