import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem, View } from "native-base";
const routes = ["Videos", "Profile"];
export default class DrawerMenu extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <View
              style={{
                height: 180,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#002e61'
              }} >
              <Image
                square
                style={{ height: 90, width: 90 }}
                source={require('../../assets/man.png')}
              />
            </View>
          </View>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}