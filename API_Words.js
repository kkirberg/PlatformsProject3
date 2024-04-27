import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default function API_Words() {
    //Put API here
    //Maybe we can have catagories of words like animals so words that happen to appear at random dont count

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
    return(words);
}