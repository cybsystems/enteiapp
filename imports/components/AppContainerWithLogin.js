import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import Login from "../screens/Login";
import VideoScreen from "../screens/VideoScreen";
import { Provider } from "react-redux";

import store from "../store/stores";

const AppNavigator = createStackNavigator({
  Login: Login,
  Home: Home,
  VideoScreen: VideoScreen
});

const AppContainer = createAppContainer(AppNavigator);

export default class AppContainerWithLogin extends React.Component {
  render() {
     
    return (
      <Provider store={store}>
        <AppContainer {...store} />
      </Provider>
    );
  }
}
