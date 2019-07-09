import React, { Component } from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview';
import { Button, Text } from 'native-base';

export default class PDFView extends Component {
    render() {
        const pdf = this.props.navigation.getParam('pdf')

        return (
            <View style={{ flex: 1, alignItems: 'center' }} >
                <View style={{ margin: '40%' }}>
                    <Button danger onPress={()=>{
                            this.props.navigation.navigate('PDFScreen')

                    }}>
                        <Text>BACK</Text>
                    </Button>
                </View>
                <WebView source={{ uri: 'http://bhoomi.pe.hu/pdfs/' + pdf.pdfs_id + ".pdf" }} />
            </View>
        )
    }
}