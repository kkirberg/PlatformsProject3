import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import Grid from './Grid';

let array = Grid();

export default function Word_Selector({ route, navigation }){ 
    

    const [Letter, setLetter] = useState("");
    const [Word, setWord] = useState("");
    let currentString = "";

    return(
        <View>
            <FlatList
              data={array}
              numColumns={10}
              renderItem={({item}) => 
              <TouchableOpacity style={styles.item} onPress={()=>{if(item != ''){setLetter(item)}}}>
                <Text>{item}</Text>
              </TouchableOpacity>}
            />

            <Text>The topic is </Text>
            <Text>Your selected word is: {currentString + Letter}</Text>
            
              <Button title = "Submit" onPress={()=>{}} />
              <Button title = "Clear" onPress={()=>setLetter("")} />
        </View>
    );
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
      }
    });