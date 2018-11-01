import React, { Component } from 'react';
import { ProgressBarAndroid,AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import { Header,Icon,Button,Container,Content,Left } from 'react-native-elements';
import * as Progress from 'react-native-progress';
export default class Status extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource:{
        'level':0,
      }
    }
}
componentDidMount(){
  this.timer = setInterval(()=> this.getLevel(),1000)
 }


  async  getLevel(){
      console.log(this.state.dataSource.level)
       fetch('http://192.168.0.102:8080/tanks/C101')
          .then ( response => { console.log("res ", response);return response.json()} )
          .then( (responseJson) => {
            console.log(responseJson)
              this.setState({
                  dataSource: responseJson,
                })
                console.log(this.state.dataSource.level)
          })
          .catch( err => {
            console.log("Helloooo")
            console.log(err)
          })
    }

  render(){
    return(
<View style = {{ flex:1 }}>
  <Header
  placement="left"
  leftComponent= {<Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />}
  centerComponent={{ text: 'Status', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }} />
  <View style = { {flex: 1,justifyContent:'center', alignItems:'center'} }>
    <Text style={styles.noteText}>Aeration Tank Quantity = {Number(this.state.dataSource.level)}</Text>
  <Progress.Pie animated={false} progress= {Number(this.state.dataSource.level)/100} size={200} />

  </View>
  </View>


    );
  }



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  },
  noteText: {
      justifyContent:'center',
      alignItems:'center',

  },
});
