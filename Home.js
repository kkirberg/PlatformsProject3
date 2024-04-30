import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Image, TextInput } from 'react-native';

export default function Home ({ navigation }) {
  
  const [Topic, setTopic] = useState('Topic');
  const api_string = 'https://api.datamuse.com/words?max=50&ml=' + Topic + "&topic=" + Topic;
  let wordList = [];
  const defaultList = ["CAT", "DOG", "MOUSE", "BULL", "TIGER", "LION", "EAGLE"];
  let wordListLength = 0;

  function getListFromAPI() {
    wordList = [];
    wordListLength = 0;
    fetch(api_string)
    .then((response) => response.json())
    .then((json) => {
      for(let i=0; wordListLength < 30 && i<json.length; ++i){
        let inList = false;
        for(let j=0; i<wordList.length; ++j){
          if(wordList[j] == json[i].word.toUpperCase()){
            inList = true;
          }
        }
        if(!inList && checkIfNoun(json[i].tags) && validWord(json[i].word)){
          wordList = wordList.concat([json[i].word.toUpperCase()]);
          wordListLength += json[i].word.length;
          console.log(wordList);
          console.log(wordListLength);
          if(wordListLength > 30){
            return 
          }
        }
      }
      wordList = defaultList;
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

// Word is valid for placement if less than 10 letters and contains no spaces or dashes
function validWord(word){
  if(word.length > 10){
      return false
  }
  for(let i=0; i<word.length; ++i){
      if(word[i] == " " || word[i] == "-"){
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