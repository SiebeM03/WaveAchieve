import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react'

import TodoScreen from './components/todo_screen'
import HomeStack from './components/home/home_stack'
import TrainingStack from './components/training/training_stack'


const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  headers: {
    'x-hasura-admin-secret': process.env.GRAPHQL_KEY
  },
  cache: new InMemoryCache()
});

const Tab = createBottomTabNavigator();

const theme = {
  colors: {
    primary: 'deepskyblue',
  },
};

export default function App() {
  return (
      <ApolloProvider client={ client }>
        <NavigationContainer>
          {/*TODO create navigation icons*/ }
          <Tab.Navigator screenOptions={ { headerShown: false } }>
            <Tab.Screen name="Home" component={ HomeStack }/>
            <Tab.Screen name="Training" component={ TrainingStack }/>
            <Tab.Screen name="Test" component={ TodoScreen }/>
          </Tab.Navigator>
        </NavigationContainer>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
