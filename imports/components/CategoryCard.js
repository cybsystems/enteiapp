//import liraries
import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// create a component
class CategoryCard extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            this.props.onSelect(this.props);
          }}
          style={{
            borderWidth: 1,
            elevation: 2,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            marginLeft: 30,
            backgroundColor: this.props.bgColor,
            borderRadius: 50
          }}
        >
          <Text style={{ color: "white" }}>{this.props.title.charAt(0)}</Text>
        </TouchableOpacity>
        <Text style={{ color: "white" ,width:60}}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}

//make this component available to the app
export default CategoryCard;
