import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform
} from "react-native";

import { Item, Input, Label, Button } from "native-base";
import { connect } from "react-redux";
import { onIsLogin, getUser } from "../actions/login_actions";
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };


  state = {
    username: "",
    password: "",
    showLoginFailed: false,
    loading: false
  };

  onLogin = () => {
    const { navigate } = this.props.navigation;
    this.setState({ loading: true })
    this.props.isLogin(this.state.username, this.state.password);
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user != this.props.user) {
      const { navigate } = this.props.navigation;
      const { user } = this.props;
      this.setState({ loading: false })

      if (user && user.status == "SUCCESS") {
        navigate("Home");
      }
      if (user && user.status == "FAILED") {
        this.setState({ showLoginFailed: true });
      }
    }
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Spinner
          visible={this.state.loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{ marginTop: "20%" }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 25 }}>Welcome To Bhoomi Classes</Text>

            <Image
              style={{ width: 80, marginTop: 10, height: 80 }}
              source={require("../../assets/logo.png")}
            />
            <Text style={{ fontSize: 20 }}>Bhoomi Classes</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            {this.state.showLoginFailed ? (
              <Text style={{ color: "red", marginTop: 10, fontSize: 20 }}>
                Login Failed
              </Text>
            ) : (
                <Text />
              )}
          </View>

          <View style={{ marginTop: 30, marginHorizontal: "5%" }}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={value => {
                  this.setState({ username: value });
                }}
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 20 }}>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={value => {
                  this.setState({ password: value });
                }}
              />
            </Item>

            <Button onPress={this.onLogin} block style={{ marginTop: 40 }}>
              <Text style={{ color: "white" }}>LOGIN</Text>
            </Button>
          </View>
        </View>

        <View style={styles.bottomText}>
          <Text> Cyborg Systems</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bottomText: {
    flex: 1,
    justifyContent: 'flex-end',
     marginTop:80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
const mapStateToProps = state => {
  return { user: state.login.user };
};
const mapDispatchToProps = dispatch => {
  return {
    isLogin: (username, password) => {
      dispatch(onIsLogin(username, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
