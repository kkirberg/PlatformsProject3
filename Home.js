import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image } from 'react-native';

export default function Home () {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('./wordsearchlogo.png')} />
            <Button title='Click to play Word Search Game!'
                onPress={()=>console.log("button")} 
            />
        </View>
    )  
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
  });  