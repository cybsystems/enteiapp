import React from 'react'

import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { onIsLogin } from '../actions/login_actions'
import Spinner from 'react-native-loading-spinner-overlay'
import LoginView from 'react-native-animated-login'
import LoginComponent from '../components/LoginComponent';
import store from '../store/stores';


class Login extends React.Component {
  state = { loading: false, showLoginFailed: false }
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user != this.props.user) {
      const { navigate } = this.props.navigation
      const { user } = this.props
      this.setState({ loading: false })
      if (user && user.status == 'SUCCESS') {
        navigate('Home')
      }
      if (user && user.status == 'FAILED') {
        this.setState({ showLoginFailed: true })
      }
    }
  }

  onLogin = () => {
    const { navigate } = this.props.navigation
    const { userName, passWord } = this.props.credentials
     this.setState({ loading: true, showLoginFailed: false })
    this.props.isLogin(userName, passWord)
   }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <Spinner visible={this.state.loading} textContent={'Loading...'} textStyle={styles.spinnerTextStyle} />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={{ alignItems: 'center', backgroundColor: '#512DA8' }}>
          {this.state.showLoginFailed ? (
            <Text style={{ color: 'red', marginTop: 10, fontSize: 20 }}>Login Failed</Text>
          ) : (
              <Text />
            )}
        </View>
        <LoginView
          logo={require('../../assets/logo.png')}
          primaryColor="#512DA8"
          accentColor="#fff"
          FormComponent={LoginComponent}
          title="ELearn"
          titleColor="#fff"
          submitText="Sign In"
          submitTextColor="#000"
          submitButtonColor="#14ccad"
          onSubmit={this.onLogin}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomText: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
const mapStateToProps = state => {
  return { user: state.login.user, credentials: state.login.credentials }
}
const mapDispatchToProps = dispatch => {
  return {
    isLogin: (username, password) => {
      dispatch(onIsLogin(username, password))
    },
    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
