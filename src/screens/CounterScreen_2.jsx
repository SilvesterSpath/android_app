import React, { useEffect, useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' || 'decrement', payload: 1 }
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  console.log(state.count);

  const increment = () => {
    dispatch({ type: 'increment', payload: 1 });
  };

  const decrement = () => {
    dispatch({ type: 'decrement', payload: 1 });
  };

  return (
    <View>
      <Text>Current Count: {state.count}</Text>
      <Button
        onPress={() => {
          increment();
        }}
        title='Increment'
      />
      <Button
        onPress={() => {
          decrement();
        }}
        title='Decrement'
      />
    </View>
  );
};

export default CounterScreen;
