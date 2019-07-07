//import liraries
import React, { Component } from 'react'
import { View, StatusBar, FlatList, Text, Dimensions } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'
import { Input, Form, Item, Card, CardItem, Body } from 'native-base';
import store from '../store/stores';
import { ON_SUBMIT_COMMENT } from '../actionTypes/actionTypes';

// create a component
class VideoScreen extends Component {
  constructor() {
    super()
    this.comment = null

  }
  render() {
    const { height, width } = Dimensions.get('window')
    const currentUser = store.getState().login.user
    const video = this.props.navigation.getParam('video')

    const url =
      'http://bhoomi.pe.hu/entei/showvideo.html?video=' + video.videos_url
    let comments = video.comments
    comments.push({ ITEM_TYPE: 'LAST', vc_id: comments.length ? comments[comments.length - 1].vc_id + 1 : 0 })

    return (
      <View  >
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <WebView
          source={{ uri: url }}
          style={{ minHeight: 200, backgroundColor: 'black' }}
        />


        <View style={{ marginTop: 220 }}>
          <Form>
            <Item>
              <Input
                onChangeText={(value) => {
                  this.comment = value
                }}
                onSubmitEditing={() => {
                  store.dispatch({ type: ON_SUBMIT_COMMENT, comment: this.comment, videos_id: video.videos_id, users_id: store.getState().login.user.users_id })
                }} placeholder="Enter Comment" />
            </Item>
          </Form>

          <FlatList
            data={comments}
            keyExtractor={(item, index) => item.vc_id}
            renderItem={({ item }) => (
              item.ITEM_TYPE ? (
                <Card>
                  <CardItem>
                    <Body>
                      <View style={{ padding: 50 }}>
                        <Text> </Text>
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              ) :
                (
                  <Card>
                    <CardItem>
                      <Body>
                        <View style={{ padding: 5 }}>
                          <Text>{item.users_id === currentUser.users_id ? 'You' : item.users_name} </Text>
                          <Text>{item.comment} </Text>
                        </View>
                      </Body>
                    </CardItem>
                  </Card>)
            )}
          />
        </View>
      </View>
    )
  }
}
export default VideoScreen
