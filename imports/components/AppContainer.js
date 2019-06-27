import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../screens/Home";
import VideoScreen from "../screens/VideoScreen";

const AppNavigator = createStackNavigator({
  Home: Home,
  VideoScreen: VideoScreen
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
