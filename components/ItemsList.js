import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function ItemsList ({data}) {
    return (
        <View style={[styles.resultContainer]}>
          <FlatList 
          data={data} 
          showVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item}</Text>
              </View>)
          }} />
        </View>
    )
}

const styles = StyleSheet.create({
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
})