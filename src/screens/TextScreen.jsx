import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

const TextScreen = () => {
  const [currentText, setCurrentText] = useState('asdfsdfdsf');

  const handleChange = (e) => {
    setCurrentText(e);
    console.log(e);
  };

  return (
    <View>
      <TextInput
        value={currentText}
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={handleChange}
      />
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
