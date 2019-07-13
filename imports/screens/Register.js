import React, { Component } from 'react'
import { Text, View, Image, StatusBar, Alert } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Card, CardItem, Button } from 'native-base';
const SharedPreferences = require('react-native-shared-preferences');

export default class Register extends Component {
    state = { userName: '', password: '', cpassword: '' }
    onRegister = () => {
        const { cpassword, password, userName } = this.state
        if (cpassword !== password) {
            Alert.alert('Password Not Matched'); return;
        }
        SharedPreferences.setItem('isRegistered', 'true')
    }
    render() {
        return (
            <View style={{ backgroundColor: '#dcdae0', flex: 1 }}>
                <StatusBar backgroundColor="#512DA8" barStyle="loght-content" />
                <Card style={{ marginLeft: 20, marginRight: 20, marginTop: 20, paddingBottom: 60 }} >
                    <CardItem style={{ maxHeight: '100%' }}>
                        <Content>
                            <Image
                                style={{ width: 120, marginTop: 20, height: 120, alignSelf: 'center' }}
                                source={require('../../assets/logo.png')}
                            />
                            <Form style={{ marginTop: 30 }}>

                                <Item floatingLabel>
                                    <Label>Username</Label>
                                    <Input onChangeText={(text) => this.setState({ userName: text })} />
                                </Item>
                                <Item floatingLabel  >
                                    <Label>Password</Label>
                                    <Input onChangeText={(text) => this.setState({ password: text })} />
                                </Item>
                                <Item floatingLabel last>
                                    <Label>Confirm Password </Label>
                                    <Input onChangeText={(text) => this.setState({ cpassword: text })} />
                                </Item>
                            </Form>
                            <View style={{ alignSelf: 'center', marginTop: 80 }}>
                                <Button onPress={this.onRegister} primary style={{ padding: 100 }}>
                                    <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
                                </Button>
                            </View>
                        </Content>

                    </CardItem>
                </Card>
            </View>
        )
    }
}