//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class DrawerMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>DrawerMenu</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default DrawerMenu;
