import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Students from './src/pages/Students'
import Assestment from './src/pages/Assessment'
import tw from 'twrnc'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#008080',
          tabBarLabelStyle: { fontWeight: 'bold', marginBottom: 5 },
        }}
      >
        <Tab.Screen
          name='Principal'
          component={Students}
          options={{
            tabBarLabel: 'Principal',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#008080'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 18, 
            },
            headerTitleAlign: 'center'
          }}
        />
        <Tab.Screen
          name='Avaliar'
          component={Assestment}
          options={{
            tabBarLabel: 'Avaliar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="school" color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#008080'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 18, 
            },
            headerTitleAlign: 'center'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}