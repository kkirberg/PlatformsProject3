import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function Grid(){
    let words = ["GARY", "CHRISTIAN", "KEARA"];
    
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr = Array(100).fill('0');

    //Horizontal insert
    for(let i=0; i<words.length; ++i){
        let curWord = words[i];
        let curLength = curWord.length;
        let row = Math.floor(Math.random() * 9) * 10;
        let startingCol = Math.floor(Math.random() * (9 - curLength));
        for(let j=0; j<curLength; ++j){
            let index = row+startingCol+j;
            arr[index] = curWord[j];
        }

    }

    console.log(arr); 
    //Placing random letters in unfilled spots in grid
    for(let i=0; i<100; ++i) {
        let rand = Math.floor(Math.random() * 25);
        if(arr[i] == '0'){
            arr[i] = letters[rand];
        }
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