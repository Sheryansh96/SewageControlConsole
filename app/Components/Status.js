import React, { Component } from 'react';
import { ProgressBarAndroid,AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Header,Icon,Button,Container,Content,Left } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle';
import { AsyncStorage } from "react-native";
export default class Status extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource:{
        'level':0,

      },
      methane:{
        'level':0,
      }
    }
}
  componentDidMount(){
  this.time = setInterval(()=> this.getError(),10000)
  const { navigation } = this.props
  const tankid = navigation.getParam('log')
  this.timer = setInterval(()=>this.getLevel(tankid),1000)
  

 }
 componentWillUnmount() {
   clearInterval(this.timer)
   clearInterval(this.time)
 }
 getError(){
   fetch('http://192.168.43.96:3000/tent/')
   .then(response => { console.log("resMethan", response);return response.json()})
   .then((res)=>{
     console.log("Methane");
     console.log(res);
     this.getAlert();
      return;
     
   }).catch(errr => 
    { console.log("err in meth")
      console.log(errr)})
 }
getAlert(){
   console.log("inside Alert")
  Alert.alert(
    "Start Motor?",
    "Carbondi-oxide Level Optimum",
    [
      { text: "Yes", onPress(){ console.log("later pressed")
      fetch('http://192.168.43.96:3000/blink/')
      .then(response => response.json()
      .then((res)=>{
        console.log("Updated");
      
      }).catch(err=>{
        console.log(err)
      })).catch(errr => 
       { console.log("err in Updating")
         console.log(errr)})
  }
       },
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
 
 }
 
  getLevel(tank){
      console.log(this.state.dataSource.level)
       fetch('http://192.168.43.96:8080/tanks/'+tank)
          .then ( response => { console.log("res", response);return response.json()} )
          .then( (responseJson) => {
            console.log(responseJson)
              this.setState({
                  dataSource: responseJson,
                })
              if(Number(this.state.dataSource.level) > 90){
                let obj = 'Overflow'
                AsyncStorage.setItem('notes',obj)
                AsyncStorage.getItem('notes')
                .then((token) => {
                  console.log("hello",token);
                }).catch(err=>
                {console.log("Eooro")
                  console.log(err)});


              }
              if(Number(this.state.dataSource.level) == 0){
                console.log("inside")
                let obj = 'DryRun'
                  AsyncStorage.setItem('notes',obj)
              }

          })
          .catch( err => {
            console.log("Helloooo")
            console.log(err)
          })
    }

  render(){
    const { navigation } = this.props
    const tankid = navigation.getParam('log')
    console.log(tankid)
    return(
<View style = {{ flex:1 }}>
  <Header
  placement="left"
  leftComponent= {<Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />}
  centerComponent={{ text: 'Status', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }} />
  <View style = { {flex: 1,justifyContent:'center', alignItems:'center'} }>
    <Text style={styles.noteText}>Aeration Tank Quantity = {Number(this.state.dataSource.level)}</Text>
    <ProgressCircle
              percent={Number(this.state.dataSource.level)}
              radius={100}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
          >
              <Text style={{ fontSize: 18 }}>{Number(this.state.dataSource.level)}%</Text>
          </ProgressCircle>
          
         
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
