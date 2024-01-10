import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react'
import TodoScreen from './components/todo_screen'


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
          <Tab.Navigator>
            <Tab.Screen name="Home" component={ TodoScreen }/>
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
