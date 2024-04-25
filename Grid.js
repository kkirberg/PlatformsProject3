import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function Grid(){
    let words = ["GARY", "CHRISTIAN", "KEARA"];
    
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr = Array(100).fill('0');

    
    for(let i=0; i<words.length; ++i){
        const insert = Math.floor(Math.random() * 2);
        console.log(insert)
        let curWord = words[i];
        if(insert == 0){
            //Vertical insert
            let startingRow =  Math.floor(Math.random() * (10 - curWord.length)) * 10;
            let col = Math.floor(Math.random() * 10);

            let isValid = true;
            for(let j=0; j<curWord.length; ++j){
                let increment = j*10;
                let index = startingRow+col+increment;
                if(arr[index] != '0'){
                    isValid = false;
                }
            }
            if(isValid){
                for(let j=0; j<curWord.length; ++j){
                    let increment = j*10;
                    let index = startingRow+col+increment;
                    arr[index] = curWord[j];
                }
            }
            else{
                --i;
            }
        }
        else{
        //Horizontal insert
        let row = Math.floor(Math.random() * 10) * 10;
        let startingCol = Math.floor(Math.random() * (10 - curWord.length));
        
        //Checking if all spaces are empty
        //If so, place all the letter of the word
        //If not, the word's location must be randomized again
        let isValid = true;
        for(let j=0; j<curWord.length; ++j){
            let index = row+startingCol+j;
            if(arr[index] != '0'){
                isValid = false;
            }
        }
        if (isValid){
            for(let j=0; j<curWord.length; ++j){
                let index = row+startingCol+j;
                arr[index] = curWord[j];
            }
        }
        else{
            --i;
        }
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