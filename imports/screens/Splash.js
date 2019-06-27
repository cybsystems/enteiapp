//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";

// create a component
class Splash extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#2c3e50" barStyle="loght-content" />
        <Image
          style={{ width: 120, height: 120 }}
          source={require("../../assets/logo.png")}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default Splash;
