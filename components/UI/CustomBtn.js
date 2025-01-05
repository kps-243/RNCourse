import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomBtn ({ text, onPress, color}) {
    return (
        <TouchableOpacity style={[styles.modalBtns, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.modalBtnText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    modalBtns: {
      width: "40%",
      height: 50,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12,
    },
    modalBtnText: {
      color: "white",  
      fontSize: 20,
    },
});