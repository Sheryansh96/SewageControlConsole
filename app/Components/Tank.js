import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, } from 'react-native';



export default class Tank extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}
