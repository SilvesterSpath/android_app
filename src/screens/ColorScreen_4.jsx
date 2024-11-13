import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const ColorScreen_4 = () => {
  return (
    <View>
      <ColorCounter color='Red' increment={() => {}} decrement={() => {}} />
      <ColorCounter color='Green' increment={() => {}} decrement={() => {}} />
      <ColorCounter color='Blue' increment={() => {}} decrement={() => {}} />
      <p></p>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default ColorScreen_4;
