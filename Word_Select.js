import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import Grid from './Grid';

export default function Word_Selector(){ 
    let array = Grid();
    return(
        <View style={styles.container}>
            <FlatList
              data={array}
              numColumns={10}
              renderItem={({item}) => 
              <Text style={styles.item}>{item}</Text>
              }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        width: 400
      },
      item: {
        flex: 1,
        maxWidth: "25%", // 100% devided by the number of rows you want
        alignItems: "center",
        
        // my visual styles; not important for the grid
        padding: 15,
        borderWidth: 2,
        borderColor: "#fff"
      }
    });