import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  // console.log(props);

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to components demo'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('List')}
        title='Go to list element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Go to image element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to counter element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Counter_2')}
        title='Go to counter_2 element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Go to color element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Color_2')}
        title='Go to color_2 element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Color_3')}
        title='Go to color_3 element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Color_4')}
        title='Go to color_4 element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Go to text element'
      />
      <Text></Text>
      <Button
        onPress={() => navigation.navigate('Password')}
        title='Go to password element'
      />

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
