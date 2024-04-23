import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function Grid(){
    let arr = []; 
    for(let i=0; i<100; ++i) {
        j = i % 10;
        arr = arr.concat([j]);
    }
    
    return(
        <View style={styles.container}>
            <FlatList
              data={arr}
              numColumns={10}
              renderItem={({item}) => 
              <Text style={styles.item}>{item}</Text>
              }
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
    }
  }); 