import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import StyleVars from './src/style/StyleVars'
import Home from './src/components/home/'
import List from './src/components/list/'
import Settings from './src/components/settings/'

const icons = {
  'Home': 'ios-home',
  'List': 'ios-list-box',
  'Settings': 'ios-settings'
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={icons[route.name]} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: StyleVars.colors.blue,
          inactiveTintColor: StyleVars.colors.grey
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
