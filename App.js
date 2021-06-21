import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView,TextInput, Image, Dimensions, FlatList } from 'react-native';
import Constants from 'expo-constants';
import allProducts from './allProducts.json';

// You can import from local files
import AssetExample from './components/products';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const renderProduct = ({item}) => {
    return (
        <View style={styles.product}>
          <View style= {styles.card}>
            <Image style={styles.image} source={{uri: `${item.imgURL}`}} />
            <Text style={styles.text}>{item.title}</Text>
            <View style={styles.details}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.isInStock}>{item.inStock ? "" : "STOKTA YOK"}</Text>
            </View>
          </View>
        </View>
    )
  }

  return (
    <SafeAreaView>
      <View style={styles.container} >

        <Text style={styles.mainTitle}>PATIKASTORE</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Ara..."
            keyboardType="default"
          />
        </View>

       
    
        <FlatList style={styles.flatList} data={allProducts} renderItem = {renderProduct} numColumns = {2} />
        



      
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 1,
    height: "100%"
  },
  mainTitle: {
    fontWeight: 'bold',
    fontSize: 32,
    color: "purple"
  },
  input: {
    padding: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10
  },
  product: {
    marginTop: 10,
    flex: 1,
    height: Dimensions.get("window").height / 3,
    justifyContent: "space-evenly"
  },
  card: {
    flex: 1,
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    borderRadius: 10,
    margin: 5
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get("window").height / 6,
    width: "100%"
  },
  text: {
    fontWeight: "bold",
    marginTop: 5
  },
  price: {
    fontWeight: "bold",
    opacity: "0.5"
  },
  isInStock: {
    color: "red",
    fontWeight: "bold"
  },
  flatList: {
    width: "100%"
  }

});

