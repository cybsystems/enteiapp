//import liraries
import React, { Component } from 'react'
import { View, StatusBar, Text, Dimensions } from 'react-native'
import WebView from 'react-native-android-fullscreen-webview-video'

// create a component
class VideoScreen extends Component {
  render() {
    const { height, width } = Dimensions.get('window')

    const video = this.props.navigation.getParam('video')
     
    const url =
      'http://bhoomi.pe.hu/entei/showvideo.html?video=' + video.videos_url

    return (
      <View  >
        <StatusBar backgroundColor="black" barStyle="light-content" />
         
         
        <WebView
          source={{ uri: url }}
          style={{ minHeight: 200, backgroundColor: 'black' }}
        />
        <View style={{ backgroundColor: 'red',marginTop:220 }}>
 
        </View>
      </View>
    )
  }
}
export default VideoScreen
