import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Login from '../screens/Login'
import VideoScreen from '../screens/VideoScreen'
import { Provider } from 'react-redux'
const SharedPreferences = require('react-native-shared-preferences');

import store from '../store/stores'
import Register from '../screens/Register';
import { View } from 'native-base';

const AppNavigator = createStackNavigator({
  Login: Login,
  Home: Home,
  VideoScreen: VideoScreen,
})

const AppContainer = createAppContainer(AppNavigator)

export default class AppContainerWithLogin extends React.Component {

  constructor() {
    super()
    this.state = { showNothing: true, showRegister: false }
  }
  showLogin=()=> {
    this.setState({ showNothing: false, showRegister: false })

  }
  componentDidMount() {
    const me = this
    SharedPreferences.getItem('isRegistered', (value) => {
      me.setState({ showNothing: false, showRegister: true })
    })
  }

  render() {
    const { showRegister, showNothing } = this.state
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {
            !showNothing ?
              showRegister ?
                <Register showLogin={this.showLogin} /> :
                <AppContainer {...store} />
              : <View></View>
          }
        </View>
      </Provider>
    )
  }
}
