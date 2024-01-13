import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { RecoilRoot } from 'recoil'
import configData from "./config/graphql.json";

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

// Screens
import TodoScreen from './components/todo_screen'

import HomeStackElement from './components/home/home_stack'
import TrainingStackElement from './components/training/training_stack'


const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    'x-hasura-admin-secret': configData.qlkey
  },
  cache: new InMemoryCache()
});

const Tab = createBottomTabNavigator()


export default function App() {
  return (
      <RecoilRoot>
        <ApolloProvider client={ client }>
          <NavigationContainer>
            {/*TODO create navigation icons*/ }
            <Tab.Navigator screenOptions={ { headerShown: false } }>
              <Tab.Screen name="Home" component={ HomeStackElement }/>
              <Tab.Screen name="Training" component={ TrainingStackElement }/>
              <Tab.Screen name="Test" component={ TodoScreen }/>
            </Tab.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </RecoilRoot>
  );
}
