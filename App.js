import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Grid from './Grid';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up Appjs. to start working on your app!</Text>
      <Grid />
      <StatusBar style="auto"/>
    </View>
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
