import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, FlatList, Modal, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputResult, setInputResult] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const onOpenModal = () => {
    setModalVisible(true);
  };
  const onCloseBtn = () => {
    setModalVisible(false);
  };
  const onCreateItem = () => {
    setInputResult([...inputResult, inputValue]);
    setInputValue('');
    setModalVisible(false);
  }
  return (
      <SafeAreaView style={[styles.container]}>
        <View style={styles.inputContainer}>
          <TouchableOpacity activeOpacity={0.9} style={styles.btn} onPress={onOpenModal}>
            <Text style={styles.btnText}>Ajouter un élément</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.resultContainer]}>
          <FlatList 
          data={inputResult} 
          showVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
              </View>)
          }} />
        </View>
        <Modal visible={isModalVisible} animationType="slide">
          <KeyboardAvoidingView style={styles.keyboardView} behavior="height">
          <View style={styles.modalView}>
          <Image source={require('./assets/logo-react-native.png')} style={styles.image} />
            <View style={styles.formContainer}>
            <TextInput 
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
            />
            <View style={styles.modalBtnContainer}>
              <TouchableOpacity style={[styles.createBtn, styles.modalBtns]} onPress={onCreateItem}>
                <Text style={styles.modalBtnText}>Créer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.closeBtn, styles.modalBtns]} onPress={onCloseBtn}>
                <Text style={styles.modalBtnText}>Fermer</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
          </KeyboardAvoidingView>
        </Modal>
      </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
  },
  input: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    height: 42,
    fontSize: 20,
    paddingHorizontal: 8,
  },
  btn: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "violet",
  },
  btnText: {
    color: "white",
    fontSize: 20,
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
    fontSize: 20,
  },
  modalView: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  keyboardView: {
    flex: 1
  },
  formContainer: {
    width: "100%"
  },
  image: {
    width: 260,
    height: 260,
    borderRadius: 12,
  },
  modalBtnContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  modalBtns: {
    width: "40%",
    height: 50,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
  createBtn: {
    backgroundColor: "blue",
  },
  closeBtn: {
    backgroundColor: "black",
    marginTop: 50,
  },
  modalBtnText: {
    color: "white",  
    fontSize: 20,
  },
});
