import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function API_Words() {
    //Put API here
    //Maybe we can have catagories of words like animals so words that happen to appear at random dont count

    let topic = 'animals';
    const api_string = 'https://api.datamuse.com/words?max=50&ml=' + topic + "&topic=" + topic;
    let wordList = [];
    let wordListLength = 0;
    function getListFromAPI() {
        fetch(api_string)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            for(let i=0; i<json.length; ++i){
                console.log(json[i]);
                if(checkIfNoun(json[i].tags) && validWord(json[i].word)){
                    wordList = wordList.concat([json[i].word.toUpperCase()]);
                    wordListLength += json[i].word.length;
                    console.log(wordList);
                    console.log(wordListLength);
                    if (wordListLength > 30){
                        //console.log(wordList);
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
    //I think the problem has to do with the fetch function itself since it asynchronous and runs in the background
    /*Potential soln: create separate button to make answer list with user input as topic utilizing onPress feature
                      if user does not do this or topic is unusable, refer to a default list
                      this may have to be perfomed inside home */
    //getListFromAPI();
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