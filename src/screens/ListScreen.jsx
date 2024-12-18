import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TurboModuleRegistry,
} from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 27 },
    { name: 'Friend #9', age: 28 },
  ];

  return (
    <>
      <Text>List Screen</Text>
      <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={(anything) => {
          //anything  === { item: { name: 'Friend #1' }, index: 0 }
          return (
            <Text style={styles.firstTextStyle}>
              {anything.item.name} - Age {anything.item.age}
            </Text>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  firstTextStyle: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ListScreen;
