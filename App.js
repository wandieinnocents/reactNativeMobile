import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ProfileScreen   from './Screens/ProfileScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page </Text>
    </View>
  );
}

function RequestsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Requests Page</Text>
    </View>
  );
}

function ServiceHistory() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Service History</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Requests" component={RequestsScreen} options={{ tabBarBadge: 3  }} />
        <Tab.Screen name="History" component={ServiceHistory} options={{ tabBarBadge: 13  }} />
        <Tab.Screen name="Account" component={ProfileScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}