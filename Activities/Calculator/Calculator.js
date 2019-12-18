
'use strict'; 
import React, {Component} from 'react'; 
import {View, Text, TextInput, TouchableHighlight,StyleSheet,Button} from 'react-native';
export default class Calculator extends Component { 

render(){ 
return ( 

<View>
    <Text   style={styles.intro}>A BASIC CALCULATOR LAYOUT IN REACT NATIVE</Text>
<View style={styles.screen}>
    <Text></Text>
    </View>   
<View style={styles.row}>
<TouchableHighlight  style={styles.button} >
    <Text>1</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text>2</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text>3</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text style={styles.operations}>+</Text>
</TouchableHighlight>
</View>

<View style={styles.row}>
<TouchableHighlight  style={styles.button} >
    <Text>4</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text>5</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text>6</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
<Text style={styles.operations}> - </Text>
</TouchableHighlight>
</View>

<View style={styles.row}>
<TouchableHighlight  style={styles.button} >
    <Text>7</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text>8</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
    <Text>9</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
<Text style={styles.operations}>*</Text>
</TouchableHighlight>
</View>

<View style={styles.row}>
<TouchableHighlight  style={styles.button} >
    <Text>0</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
<Text style={styles.operations}>=</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
<Text style={styles.operations}>/</Text>
</TouchableHighlight>
<TouchableHighlight  style={styles.button} >
<Text style={styles.operations}> . </Text>
</TouchableHighlight>
</View>
</View>

);
} 
};

const styles = StyleSheet.create({
    button:{
    flex: 1,
    
      
      padding: 25,
      margin: 15,
      borderColor: 'black',
      backgroundColor: 'grey',
      width: 60,

     

    },

    screen:{
        flex: 1,
        
          borderWidth: 1,
          padding: 25,
          margin: 20,
          borderColor: 'black',
          backgroundColor: 'lightgrey',
    
        },

    intro:{
             flex: 1,
            
              borderWidth: 1,
              padding: 25,
              fontSize: 25
        
            },

    row:{
        flex: 1,
        flexDirection:"row",

    },

    operations:{

    fontSize: 25
    }

   
  });