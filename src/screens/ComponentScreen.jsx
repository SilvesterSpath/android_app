import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

const ComponentsScreen = () => {
    const greeting = 'Bye there!';
    const numbers = [123, 234];
    const strings = ['abc', 'dfg']
    // but not objects
    const jsx = <Text>This is a Jsx element</Text>

  return (
      <View>
        <Text style={styles.textStyle}>First android text</Text>
        <Text >Hello there!</Text>
        <Text >{greeting}</Text>
        <Text >{numbers}</Text>
        <Text >{strings}</Text>
        {jsx}
      </View>
)

};



export default ComponentsScreen;
