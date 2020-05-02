import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from './List'
import Detail from './Detail'

const Stack = createStackNavigator();

const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default ListStack;