import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput } from 'react-native';

export default function Victory ({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('./winner.jpeg')} />
            <Button title='You win! Click to play again'
                onPress={()=> navigation.navigate("Home")} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 54,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    },
    image: {
      width: 400,
      height: 400,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  });  