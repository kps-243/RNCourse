import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputResult, setInputResult] = useState([]);
  const onPressBtn = () => {
    setInputResult((prev) => [...prev, inputValue]);
    setInputValue('');
  }
  return (
      <SafeAreaView style={[styles.container]}>
        <View style={styles.inputContainer}>
          <TextInput 
          value={inputValue} 
          onChangeText={setInputValue} 
          style={styles.input}/>
        <Button title='Valide' onPress={onPressBtn}/>
        </View>
        <View style={[styles.resultContainer]}>
          {
          inputResult.map((item, index ) => {
            return <View style={styles.itemContainer} key={index}>
                      <Text style={styles.itemText}>{item}</Text>
                  </View>
          }) 
          
          }
        </View>
      </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
  },
  resultContainer: {
    width: "100%",
    padding: 8,
  },
  itemContainer: {
    width: "100%",
    height: 38,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    marginVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "white",
    fontSize: 16,
  },
});
