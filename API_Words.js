import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function API_Words() {
    //Put API here
    //Maybe we can have catagories of words like animals so words that happen to appear at random dont count

    let topic = 'animals';
    const api_string = 'https://api.datamuse.com/words?max=50&ml=' + topic + "&topic=" + topic;
    
    function getListFromAPI() {
        let wordList = [];
        let wordListLength = 0;
        fetch(api_string)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            for(let i=0; i<json.length; ++i){
                console.log(json[i]);
                if(checkIfNoun(json[i].tags) && validWord(json[i].word)){
                    wordList = wordList.concat([json[i].word]);
                    wordListLength += json[i].word.length;
                    //console.log(wordList);
                    if (wordListLength > 30){
                        console.log(wordList);
                        return wordList;
                    }
                }

            }
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    /* Due to the diagonal placements, it is much more common for the insertions in the grid to fail
        To prevent an infinite loop, I would recommend keeping a count of the total characters of all
        the words to be added in. Once a determined limit is reached, stop adding words into the list

        Also, I added the functionality for words to overlap if the characters at the index are the same, 
        so watch out for that edge case when you program the selection functionality of the board
        -Gary
    */

    // https://www.datamuse.com/api/
    //Potential API

    //temp array
    let words = ["CAT", "DOG", "MOUSE", "BULL", "TIGER", "LION", "EAGLE"];
    // I can connect to the above API and access what I want, but right when I try to return the array of words from the
    // function I get nothing and don't know why. Can one of you guys fix it? -Gary
    let wordsList = getListFromAPI();
    console.log(wordsList);
    //console.log(wordsList.length);
    return(words);
}

function checkIfNoun(tags){
    for(let i=0; i<tags.length; ++i){
        if(tags[i] == "n"){
            return true;
        }
    }
    return false;
}

// Word is valid for placement if less than 10 letters and contains no spaces
function validWord(word){
    if(word.length > 10){
        return false
    }
    for(let i=0; i<word.length; ++i){
        if(word[i] == " "){
            return false;
        }
    }
    return true;
}