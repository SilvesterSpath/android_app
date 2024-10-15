import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

const ComponentsScreen = () => {
  const greeting = 'Bye there!';
  const numbers = [123, 234];
  const strings = ['abc', 'dfg'];
  // but not objects
  const jsx = <Text>This is a Jsx element</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>First android text</Text>
      <Text>Hello there!</Text>
      <Text style={{ fontSize: 40 }}>{greeting}</Text>
      <Text style={styles.subHeaderStyle}>{numbers}</Text>
      <Text>{strings}</Text>
      {jsx}
    </View>
  );
};

export default ComponentsScreen;
