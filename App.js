import React, { Component } from "react";

import {
  Container,
  View,
  Card,
  CardItem,
  Grid,
  Col,
  Button
} from "native-base";
import Splash from "./imports/screens/Splash";
import AppContainer from "./imports/components/AppContainer";
import { StyleSheet, Text, Image, StatusBar } from "react-native";
import AppContainerWithLogin from "./imports/components/AppContainerWithLogin";
import { FlatGrid } from "react-native-super-grid";

export default class App extends React.Component {
  state = {
    showSplash: false,
    showHomePage: true

  };


  onStartClicked() {
    this.setState({ showHomePage: false, showSplash: true })
    setTimeout(() => {
      this.setState({ showSplash: false });
    }, 1000);
  }


  render() {
    const { showSplash, showHomePage } = this.state
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#512DA8" barStyle="loght-content" />
        {
          showHomePage ?
            <HomePage onStart={this.onStartClicked.bind(this)} />
            :
            showSplash ? <Splash /> : <AppContainerWithLogin />
        }

      </View>
    );
  }
}

const HomePage = ({ onStart }) => {
  const items = [
    { name: "Marathi Medium", code: "#1abc9c" },
    { name: "Semi English", code: "#3498db" },
    { name: "CBSCE", code: "#34495e" },
    { name: "ICSE", code: "#d35400" },
    { name: "MPSC", code: "#d35400" },
    { name: "UPSC", code: "#d35400" },

  ];

  return (
    <Card style={styles.container}>
      <Text
        style={{
          fontSize: 25,

          color: "black",
          alignSelf: "center",
          marginTop: 25
        }}
      >
        Welcome To Bhoomi Classes
      </Text>
      <Text style={{
        alignSelf: "center",
        fontSize: 20,
        color: "black",
      }}>We Teach</Text>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />
      <View style={{ alignSelf: "center", marginBottom: "2%" }}>
        <Button onPress={() => {
          onStart()

        }} success style={{ padding: 30 }}>
          <Text style={{ alignSelf: "center", color: "white", fontSize: 20 }}>
            Start
          </Text>
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#FF5236"
  },
  gridView: {
    marginTop: 20,
    height: '100%'
  },
  itemContainer: {
    justifyContent: "center",
    borderRadius: 5,
    padding: 10,
    height: 150
  },
  itemName: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
    fontWeight: "600"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff"
  }
});
// sudo react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
