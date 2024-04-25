import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Grid from './Grid';
import Home from './Home';
import Word_Select from './Word_Select';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Word_Select'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Grid' component={Grid} />
        <Stack.Screen name='Word_Select' component={Word_Select} />
      </Stack.Navigator>
    </NavigationContainer>
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
