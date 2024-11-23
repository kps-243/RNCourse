import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [inputValue, setInputValue] = useState('');
  const onPressBtn = () => {
    setBackgroundColor(inputValue.toLowerCase());
  }
  return (
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.inputContainer}>
          <TextInput value={inputValue} onChangeText={setInputValue} style={styles.input}/>
        <Button title='Valider' onPress={onPressBtn}/>
        </View>
      </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
  },
  input: {
    width: "80%",
    backgroundColor: "white",
  },
});
