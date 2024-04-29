import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image } from 'react-native';

export default function Home ({ navigation }) {
  
  let topic = 'animals';
  const api_string = 'https://api.datamuse.com/words?max=50&ml=' + topic + "&topic=" + topic;
  let wordList = [];
  let wordListLength = 0;
  function getListFromAPI() {
    wordList = [];
    wordListLength = 0;
    fetch(api_string)
    .then((response) => response.json())
    .then((json) => {
      for(let i=0; i<json.length; ++i){
          //console.log(json[i]);
          if(checkIfNoun(json[i].tags) && validWord(json[i].word)){
              wordList = wordList.concat([json[i].word.toUpperCase()]);
              wordListLength += json[i].word.length;
              //console.log(wordList);
              //console.log(wordListLength);
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
  
  return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('./wordsearchlogo.png')} />
            <Button title='Set Topic'
                onPress={() => getListFromAPI()} />
            <Button title='Click to Play!'
                onPress={()=> navigation.navigate("Word_Select", wordList)} 
            />
        </View>
    )  
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