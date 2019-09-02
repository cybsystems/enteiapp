import React from 'react'
import { View } from 'react-native'
import { Item, Input, Label } from 'native-base'
import store from '../store/stores'

const LoginComponent = () => (
  <View>
    <Item floatingLabel>
      <Label>Email or Username</Label>
      <Input
        onChangeText={value => {
          store.dispatch({ type: 'ON_USERNAME_CHANGE', value: value })
        }}
      />
    </Item>
    <Item floatingLabel style={{ marginTop: 20 }}>
      <Label>Password</Label>
      <Input
        secureTextEntry={true}
        onChangeText={value => {
          store.dispatch({ type: 'ON_PASSWORD_CHANGE', value: value })
        }}
      />
    </Item>
  </View>
)
export default LoginComponent
