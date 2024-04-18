import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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

/*Game specifications
-Word Search game
-around 10x10 grid size
-words from API
-random letters in all other grid slots
-horizontal and vertical
    -add words first
    -fill rest with random
-scoring system in state variable
-add selected letters into stack
-etc



*/