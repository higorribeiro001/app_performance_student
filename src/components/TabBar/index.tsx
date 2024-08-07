import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

interface TabBarProps { title: string, router: React.ComponentType<any>, icon: string }

export default function TabBar({ title, router, icon }: TabBarProps) {
    return(
        <Tab.Screen
          name={title}
          component={router}
          options={{
            tabBarLabel: title,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={icon} color={color} size={size} />
            ),
            headerStyle: {
              backgroundColor: '#008080'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold', 
              fontSize: 18, 
              textAlign: 'center'
            },
          }}
        />
    )
}