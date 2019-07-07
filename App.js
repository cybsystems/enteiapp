 
import React, { Component } from "react";

import {
  Container,
} from "native-base";
import Splash from "./imports/screens/Splash";
import AppContainer from "./imports/components/AppContainer";
import { StyleSheet } from "react-native";
import AppContainerWithLogin from "./imports/components/AppContainerWithLogin";

export default class App extends React.Component {
  state = {
    showNextScreen: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showNextScreen: true });
    }, 1000);
  }

  render() {
    return ( 
      <Container>
        {!this.state.showNextScreen ? <Splash /> : <AppContainerWithLogin />}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#FF5236"
  }
});
// sudo react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res