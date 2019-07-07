import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    FlatList,
    Image, TouchableOpacity,
    Text,
    Dimensions,
} from 'react-native'
import { Button, Input, Grid, Row, Col, Card, CardItem, Body } from 'native-base'
import { connect } from 'react-redux'

import store from '../store/stores';

class PDFScreen extends Component {

    onMenuClicked = () => {
        this.props.navigation.toggleDrawer()
    }
    componentDidMount() {
        store.dispatch({ type: 'GET_PDFS' })
    }
    onSearch = text => {
    }

    render() {
        const screenWidth = Math.round(Dimensions.get('window').width)
        const { category } = this.props
        const { pdfsToShow } = category
 
        return (
            <View>
                <StatusBar backgroundColor={'#0142ad'} barStyle="light-content" />
                <Grid style={{ backgroundColor: '#0142ad', minHeight: 100 }}>
                    <Row style={{ marginLeft: 10, marginBottom: 60, marginTop: 30 }}>
                        <Button transparent onPress={this.onMenuClicked}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../../assets/menu.png')}
                            />
                        </Button>
                        <View
                            style={{
                                borderRadius: 20,
                                minWidth: screenWidth - 90,
                                minHeight: 40,
                                backgroundColor: 'white',
                                marginLeft: 20,

                            }}
                        >
                            <Input
                                onChangeText={this.onSearch}
                                style={{ color: 'black' }}
                                placeholder="Search"
                            />
                        </View>
                    </Row>
                </Grid>
                <View style={{ minHeight: 500 }}>
                    {
                        pdfsToShow ? (
                            <React.Fragment>
                                {pdfsToShow.length == 0 ?
                                    <View style={{ alignSelf: 'center' }}>
                                        <Text>NO PDFS</Text>
                                    </View> :
                                    <PDFList pdfList={pdfsToShow} />
                                }
                            </React.Fragment>)
                            : <Text style={{ alignSelf: 'center' }}>Loading PDFS</Text>
                    }
                </View>
            </View >
        )
    }
}


const mapStateToProps = state => {
    const { login, category } = state
    return {
        category: category,
        user: login.user
    }
}


export default connect(
    mapStateToProps,
)(PDFScreen)


class PDFList extends React.Component {

    render() {
        const { pdfList } = this.props

        if (pdfList && !pdfList[pdfList.length - 1].ITEM_TYPE)
            pdfList.push({
                pdfs_id: pdfList[pdfList.length - 1].pdfs_id + 1,
                ITEM_TYPE: 'LAST',
            })

        return (
            <View style={{ flex: 1 }}>

                <FlatList
                    data={pdfList}
                    keyExtractor={(item, index) => item.pdfs_id}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    renderItem={({ item }) => (
                        <View>
                            {item.ITEM_TYPE ? (
                                <Card>
                                    <CardItem>
                                        <Body>
                                            <View style={{ padding: 50 }}>
                                                <Text> </Text>
                                            </View>
                                        </Body>
                                    </CardItem>
                                </Card>
                            ) : (
                                    <TouchableOpacity
                                        onPress={() => {

                                        }}
                                        style={styles.itemContainer}
                                    >
                                        <View>

                                            <Text
                                                style={{
                                                    fontSize: 25,
                                                    color: 'black',
                                                    marginTop: 20,
                                                    marginLeft: 20,
                                                }}
                                            >
                                                {item.pdfs_title}
                                            </Text>
                                        </View>
                                        <View
                                            style={{
                                                borderBottomColor: 'black',
                                                borderBottomWidth: 0.2,
                                                marginTop: 20,
                                            }}
                                        />
                                    </TouchableOpacity>
                                )}
                        </View>
                    )}
                />
            </View>)

    }
}
const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 5,
        margin: 20,
    },
    item: { width: 100, height: 100 },
    itemName: {
        fontSize: 20,
        color: '#5d6061',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 14,
        color: '#5d6061',
    },
})