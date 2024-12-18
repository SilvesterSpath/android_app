import React, { useReducer } from 'react';
import { View, Button, FlatList, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }
  switch (action.type) {
    case 'change_red':
      // never do this
      // state.red = state.red + action.payload;
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const ColorScreen_4 = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  console.log(state);

  return (
    <View>
      <ColorCounter
        color='Red'
        increment={() =>
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        decrement={() => {
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT });
        }}
      />
      <ColorCounter
        color='Green'
        increment={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        decrement={() => {
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT });
        }}
      />

      <ColorCounter
        color='Blue'
        increment={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        decrement={() => {
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT });
        }}
      />

      <Text></Text>
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

export default ColorScreen_4;
