import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, ImageBackgroundComponent } from 'react-native';
import Grid from './Grid';
import API_Words from './API_Words';

export default function Word_Selector({ route, navigation }){ 
  
    const [array, setArray] = useState(Grid());
    const [answers, setAnswers] = useState(API_Words());

    const [Letters, setLetters] = useState("");
    const [LetterIndex, setLetterIndex] = useState("");
    const [Direction, setDirection] = useState("");

    //const customStyle = LetterIndex != '' ? styles.customStyle2 : styles.customStyle1;
    //potential custom styling code?

    return(
        <View>
            <FlatList
              data={array}
              numColumns={10}
              renderItem={({item, index}) => 
              <TouchableOpacity style={[styles.item, styles.customStyle2]} onPress={()=>{if(item != ''){AdjacencyDetector(item, index)}}}>
                <Text>{item}</Text>
              </TouchableOpacity>}
            />

            <Text>Your selected letters are: {Letters}</Text>
            
              <Button title = "Submit" onPress={()=>CheckAnswer()} />
              <Button title = "Clear" onPress={()=>{setLetters(""); setLetterIndex(""); setDirection("");}} />
            <Text>The remaining words are:</Text>
            <FlatList
             data={answers}
             renderItem={({item}) => 
                <Text>{item}</Text>}
            />
        </View>
    );


    //for topic issue: maybe have topic chooser on home screen and take function to add to Your topic is and API_words
    //or, make another grid with all the answers and knock them off as they are guessed
    function CheckAnswer() {
      for(i=0; i<=answers.length; ++i){
        if(Letters == answers[i]){
          setAnswers(answers.filter(a => a != answers[i]));
          setLetters("");
          //navigate to victory screen when player wins, for now navigating back to home
          if(answers.length == 1){
            navigation.navigate("Home");
          }
        }
      }
    }

    function AdjacencyDetector(item, index) {
      //0 Letters
      if(Letters == ''){
        setLetters(item);
        setLetterIndex(index);
      }

      //1+ Letters
      else{
        //1st Letter
        if ((Direction == '') && (index != LetterIndex)){
          setLetters(Letters + item);
          setLetterIndex(index);
          //Right Square
          if(index == LetterIndex+1){
            setDirection(1);
          }
          //Left Square
          else if(index == LetterIndex-1){
            setDirection(2);
          }
          //Down Square
          else if(index == LetterIndex+10){
            setDirection(3);
          }
          //Up Square
          else if(index == LetterIndex-10){
            setDirection(4);
          }
          //Up Right
          else if(index == LetterIndex-9){
            setDirection(5);
          }
          //Up Left
          else if(index == LetterIndex-11){
            setDirection(6);
          }
          //Down Right
          else if(index == LetterIndex+11){
            setDirection(7);
          }
          //Down Left
          else if(index == LetterIndex+9){
            setDirection(8);
          }
        }
        //2nd+ Letter Same Direction
        else{
          if((Direction == 1) && (index == LetterIndex+1)
          || (Direction == 2) && (index == LetterIndex-1)
          || (Direction == 3) && (index == LetterIndex+10)
          || (Direction == 4) && (index == LetterIndex-10)
          || (Direction == 5) && (index == LetterIndex-9)
          || (Direction == 6) && (index == LetterIndex-11)
          || (Direction == 7) && (index == LetterIndex+11)
          || (Direction == 8) && (index == LetterIndex+9)
          ){
          setLetters(Letters + item);
              setLetterIndex(index);
          }
        }
      }
    }
}



const styles = StyleSheet.create({
      border: {
        borderWidth: 1,
        borderColor: "gray",
      },

      item: {
        flex: 1,
        width: 50,
        alignItems: "center",
        
        padding: 12,
        borderWidth: 1,
        borderColor: "#fff"
      },

      customStyle1: {
        backgroundColor: "#D3D3D3"
      },
      customStyle2: {
        backgroundColor: "#ADD8E6"
      }
    });