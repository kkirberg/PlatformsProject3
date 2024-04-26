import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import API_Words from "./API_Words";

export default function Grid(){
    let words = API_Words();
    
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr = Array(100).fill('0');

    let i = 0;
    for(; i<words.length; ++i){
        const insert = getRandomInt(0,8);
        console.log(insert)
        let curWord = words[i];
        
        switch(insert){
            case 0:
                verticalInsert(curWord);
                break;
            case 1:
                curWord = reverseWord(curWord);
                verticalInsert(curWord);
                break;
            case 2:
                horizontalInsert(curWord);
                break;
            case 3:
                curWord = reverseWord(curWord);
                horizontalInsert(curWord);
                break;
            case 4:
                diagonalInsertRight(curWord);
                break;
            case 5:
                curWord = reverseWord(curWord);
                diagonalInsertRight(curWord);
                break;
            case 6:
                diagonalInsertLeft(curWord);
                break;
            case 7:
                curWord = reverseWord(curWord);
                diagonalInsertLeft(curWord);
                break;
        }
    }

    function verticalInsert(curWord){
        //Vertical insert
        const startingRow =  getRandomInt(0,10 - curWord.length)* 10;
        const col = getRandomInt(0, 10);

        //Checking if all spaces are empty
        //If so, place all the letters of the word
        let isValid = true;
        for(let j=0; j<curWord.length; ++j){
            let increment = j*10;
            let index = startingRow+col+increment;
            if(arr[index] != '0' && arr[index] != curWord[j]){
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
        else{ //If not, the word's location must be randomized again
            --i;
        }
    }

    function horizontalInsert(curWord){
         //Horizontal insert
         const row = getRandomInt(0,10) * 10;
         const startingCol = getRandomInt(0, 10 - curWord.length);
         
         //Checking if all spaces are empty
         //If so, place all the letters of the word
         let isValid = true;
         for(let j=0; j<curWord.length; ++j){
             let index = row+startingCol+j;
             if(arr[index] != '0' && arr[index] != curWord[j]){
                 isValid = false;
             }
         }
         if (isValid){
             for(let j=0; j<curWord.length; ++j){
                 let index = row+startingCol+j;
                 arr[index] = curWord[j];
             }
         }
         else{ //If not, the word's location must be randomized again
             --i;
         }
    }

    function diagonalInsertRight(curWord){
        //diagonal insert going from top left to bottom right
        const startingRow = getRandomInt(0,10 - curWord.length) * 10;
        const startingCol = getRandomInt(0,10 - curWord.length);

        //Checking if all spaces are empty
        //If so, place all the letters of the word
        let isValid = true;
        for(let j=0; j<curWord.length; ++j){
            let increment = j*10 + j;
            let index = startingRow+startingCol+increment;
            if(arr[index] != '0' && arr[index] != curWord[j]){
                isValid = false;
            }
        }
        if (isValid){
            for(let j=0; j<curWord.length; ++j){
                let increment = j*10 + j;
                let index = startingRow+startingCol+increment;
                arr[index] = curWord[j];
            }
        }
        else{ //If not, the word's location must be randomized again
            --i;
        }
    }

    function diagonalInsertLeft(curWord){
        //diagonal insert going from top left to bottom right
        const startingRow = getRandomInt(curWord.length - 1, 10) * 10;
        const startingCol = getRandomInt(curWord.length - 1, 10);

        //Checking if all spaces are empty
        //If so, place all the letters of the word
        let isValid = true;
        for(let j=0; j<curWord.length; ++j){
            let increment = j*10 - j;
            let index = startingRow+startingCol+increment;
            if(arr[index] != '0' && arr[index] != curWord[j]){
                isValid = false;
            }
        }
        if (isValid){
            for(let j=0; j<curWord.length; ++j){
                let increment = j*10 - j;
                let index = startingRow+startingCol+increment;
                arr[index] = curWord[j];
            }
        }
        else{ //If not, the word's location must be randomized again
            --i;
        }
    }



    console.log(arr);
    //Placing random letters in unfilled spots in grid
    for(let j=0; j<arr.length; ++j) {
        let rand = getRandomInt(0,26);
        if(arr[j] == '0'){
            arr[j] = letters[rand];
        }
    }
    
    return(arr);
}

function reverseWord(curWord){
    reverse = "";
    for(let i=curWord.length - 1; i>= 0; --i){
        reverse += curWord[i];
    }
    return reverse;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}