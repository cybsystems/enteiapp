import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class PDFView extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <WebView source={{ uri: 'http://bhoomi.pe.hu/pdfs/5.pdf' }} />

            </View>
        )
    }
}