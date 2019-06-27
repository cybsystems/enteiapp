//import liraries
import React, { Component } from "react";
import { View, Text, StatusBar, StyleSheet, AppRegistry } from "react-native";
import DrawerLayoutContainer from "../components/DrawerLayoutContainer";
import { Provider } from "react-redux";
import store from "../store/stores";
// create a component
class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  render() {
    return (
      <Provider store={store}>
        <DrawerLayoutContainer {...store} />
      </Provider>
    );
  }
}

export default Home;
