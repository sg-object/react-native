import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './Settings'
import Setting01 from './Setting01'
import Setting02 from './Setting02'
import Setting03 from './Setting03'

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Setting01" component={Setting01} />
      <Stack.Screen name="Setting02" component={Setting02} />
      <Stack.Screen name="Setting03" component={Setting03} />
    </Stack.Navigator>
  )
}

export default SettingsStack;