import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput } from 'react-native';

export default function Home ({ navigation }) {
  
  const [Topic, setTopic] = useState('Topic');
  const api_string = 'https://api.datamuse.com/words?max=200&ml=' + Topic + "&topic=" + Topic;
  let wordList = [];
  let wordListLength = 0;

  function getListFromAPI() {
    wordList = [];
    wordListLength = 0;
    fetch(api_string)
    .then((response) => response.json())
    .then((json) => {
      while (wordListLength < 30){
        const index = getRandomInt(0, json.length);
        let inList = false;
        for(let i=0; i<wordList.length; ++i){
          if(wordList[i] == json[index].word.toUpperCase()){
            inList = true;
          }
        }
        if(!inList && checkIfNoun(json[index].tags) && validWord(json[index].word)){
          wordList = wordList.concat([json[index].word.toUpperCase()]);
          wordListLength += json[index].word.length;
          //console.log(wordList);
          //console.log(wordListLength);
        }
      }
      return wordList;
    })
    .catch((error) => {
        console.error(error);
    });
  }
  
  return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('./wordsearchlogo.png')} />
            <TextInput 
              style={styles.input}
              onChangeText={setTopic}
              placeholder="Enter Topic"
              textAlign = "center"
              />
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

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
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