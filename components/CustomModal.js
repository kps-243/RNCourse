import {Modal, KeyboardAvoidingView, Image, View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native'; 
import CustomBtn from './UI/CustomBtn';

export default function CustomModal ({
    isModalVisible, 
    onCloseModal, 
    onCreateItem, 
    inputValue, 
    setInputValue
    }) {
    return (
        <Modal visible={isModalVisible} animationType="slide">
          <KeyboardAvoidingView style={styles.keyboardView} behavior="height">
          <View style={styles.modalView}>
          <Image source={require('../assets/logo-react-native.png')} style={styles.image} />
            <View style={styles.formContainer}>
            <TextInput 
            value={inputValue}
            onChangeText={setInputValue}
            style={styles.input}
            />
            <View style={styles.modalBtnContainer}>
                <CustomBtn onPress={onCreateItem} text="Créer" color="blue" />
                <CustomBtn onPress={onCloseModal} text="Fermer" color="red" />
            </View>
            </View>
          </View>
          </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
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
});