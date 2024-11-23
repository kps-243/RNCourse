import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={{width:"100%", height:350, backgroundColor: "blue"}}>
        <View style={{ flex: 1, margin: 8, backgroundColor: "black"}}>
          <View style={{flex: 1, backgroundColor: "green"}}></View>
          <View style={{flex: 1, backgroundColor: "violet", flexDirection: "row"}}>
            <View style={{ flex: 1, backgroundColor: "yellow"}}></View>
            <View style={{ flex: 1, backgroundColor: "purple"}}></View>
          </View>
        </View>
      </View>
      <View style={{width:"100%", height:350, backgroundColor: "blue"}}>
        <View style={{ flex: 1, margin: 8, backgroundColor: "black"}}>
          <View style={{flex: 1, backgroundColor: "green"}}></View>
          <View style={{flex: 1, backgroundColor: "violet", flexDirection: "row"}}>
            <View style={{ flex: 1, backgroundColor: "yellow"}}></View>
            <View style={{ flex: 1, backgroundColor: "purple"}}></View>
          </View>
        </View>
      </View>      
      <View style={{width:"100%", height:350, backgroundColor: "blue"}}>
        <View style={{ flex: 1, margin: 8, backgroundColor: "black"}}>
          <View style={{flex: 1, backgroundColor: "green"}}></View>
          <View style={{flex: 1, backgroundColor: "violet", flexDirection: "row"}}>
            <View style={{ flex: 1, backgroundColor: "yellow"}}></View>
            <View style={{ flex: 1, backgroundColor: "purple"}}></View>
          </View>
        </View>
      </View>      
      <View style={{width:"100%", height:350, backgroundColor: "blue"}}>
        <View style={{ flex: 1, margin: 8, backgroundColor: "black"}}>
          <View style={{flex: 1, backgroundColor: "green"}}></View>
          <View style={{flex: 1, backgroundColor: "violet", flexDirection: "row"}}>
            <View style={{ flex: 1, backgroundColor: "yellow"}}></View>
            <View style={{ flex: 1, backgroundColor: "purple"}}></View>
          </View>
        </View>
      </View>    
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text:{
    borderColor:"red", 
    borderWidth: 2, 
    padding: 8,
    width: "100%",
  }
});
