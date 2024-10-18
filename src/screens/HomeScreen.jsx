import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props);

  const clickHandler = (e) => {
    if (e.target.textContent === 'Go to components demo') {
      console.log('Component clicked');
      navigation.navigate('Components');
    } else if (e.target.textContent === 'Go to image element') {
      navigation.navigate('Image');
    } else {
      navigation.navigate('List');
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
      <p></p>
      <Button onPress={clickHandler} title='Go to image element' />
      {/*<TouchableOpacity onPress={clickHandler}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
