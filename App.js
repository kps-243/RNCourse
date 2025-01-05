import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomModal from './components/CustomModal';
import ItemsList from './components/ItemsList';
import ModalOpener from './components/ModalOpener';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputResult, setInputResult] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const onOpenModal = () => {
    setModalVisible(true);
  };
  const onCloseModal = () => {
    setModalVisible(false);
  };
  const onCreateItem = () => {
    setInputResult([...inputResult, inputValue]);
    setInputValue('');
    setModalVisible(false);
  }
  return (
      <SafeAreaView style={[styles.container]}>
        <ModalOpener onOpenModal={onOpenModal} />
        <ItemsList data={inputResult} />
        <CustomModal 
          isModalVisible={isModalVisible} 
          inputValue={inputValue} 
          onCloseModal={onCloseModal} 
          onCreateItem={onCreateItem} 
          setInputValue={setInputValue}
        />
      </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
