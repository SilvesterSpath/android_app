import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, TextInput } from 'react-native';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        value={password}
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 4 ? <Text>Password must be 4 characters</Text> : null}
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

export default PasswordScreen;
