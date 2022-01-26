import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  ProfileScreen   from './Screens/ProfileScreen';
import  HomeScreen   from './Screens/HomeScreen';
import  RequestsScreen   from './Screens/RequestsScreen';
import  ServiceHistory   from './Screens/ServiceHistory';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Requests') {
              iconName = focused 
              ? 'ios-car'
                : 'ios-car-outline';
            }

            else if (route.name === 'History') {
              iconName = focused 
              ? 'ios-time'
                : 'ios-time-outline';
            }
            else if (route.name === 'Account') {
              iconName = focused 
              ? 'ios-people'
                : 'ios-people-outline';
            }



            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
      
      
        <Tab.Screen name="Home" component={HomeScreen} />
        
        <Tab.Screen
         name="Requests" 
         component={RequestsScreen} 
         options={{ 
           tabBarBadge: 3
           
           
           }} />


        <Tab.Screen name="History" component={ServiceHistory} options={{ tabBarBadge: 13  }} />
        <Tab.Screen name="Account" component={ProfileScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}