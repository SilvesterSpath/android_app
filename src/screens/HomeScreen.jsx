import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  // console.log(props.navigation);

  const clickHandler = (e) => {
    if (e.target.textContent === 'Go to components demo') {
      console.log('Component clicked');
      props.navigation.navigate('Components');
    } else {
      props.navigation.navigate('List');
      console.log('List clicked');
      console.log(e.target);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <p></p>
      <Button onPress={clickHandler} title='Go to components demo' />
      <p></p>
      <Button onPress={clickHandler} title='Go to list element' />
      <TouchableOpacity onPress={clickHandler}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
