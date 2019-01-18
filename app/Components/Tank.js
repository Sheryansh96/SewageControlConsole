import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image,Picker,TouchableHighlight } from 'react-native';
import Status from './Status';
import { StackNavigator } from 'react-navigation';
export default class Setup extends Component{
   constructor(props) {
    super(props);
    this.state = {

      tanklen: '',
      tankbre:'',
      tankwid:'',
      PickerValue:'',
      level:'',
      PickerValuey:''
    }
  }
  t1signup (id){

    console.log(this.state.tankwid)
    console.log(this.state.tanklen)
    console.log(this.state.tankbre)
    console.log(id)
    fetch('http://192.168.0.104:8080/settank', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      height: this.state.tankwid,
      length: this.state.tanklen,
      breadth : this.state.tankbre,
      level : this.state.level,
      stpid : id,
      type:this.state.PickerValuey,
    })
  })
  .then((response)=> response.json())
  .then((res) => {
    console.log(res)
      this.props.navigation.navigate("TankSetup")

  }).catch(err=>
  {console.log("Eooro")
    console.log(err)});
  }
  tsignup(id){
    console.log(this.state.tankwid)
    console.log(this.state.tanklen)
    console.log(this.state.tankbre)
    console.log(id)
    fetch('http://192.168.0.104:8080/settank', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      height: this.state.tankwid,
      length: this.state.tanklen,
      breadth : this.state.tankbre,
      level : this.state.level,
      stpid : id,
      type:this.state.PickerValuey,
    })
  })
  .then((response)=> response.json())
  .then((res) => {
    console.log(res)
      this.props.navigation.navigate("Home")

  }).catch(err=>
  {console.log("Eooro")
    console.log(err)});
  }


  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
  clickme=()=>{
    var data =this.state.PickerValue;
    var data1=this.state.PickerValuey;
    if(data=='')
    {
      alert("Select a state");
    }
    else
    {
      alert("Your Tank Status is "+data+ " and your tank type is "+data1);

    }
  }


	render(){

		return(
			<View style={styles.container}>
           <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../Components/images/login_icon.jpg')} />


          <Text style={styles.titleText}> TANK SET-UP </Text>
          </View>
              <Picker
             style={styles.inputContainer}
            selectedValue={this.state.PickerValuey}
            onValueChange={(itemValue,itemIndex)=>this.setState({PickerValuey:itemValue})}>
            <Picker.Item label="Pick Tank" value=""/>
             <Picker.Item label="Aeration Tank" value="Aeration Tank"/>
              <Picker.Item label="Decant Tank" value="Decant Tank"/>
              <Picker.Item label="Collection Tank" value="Collection Tank"/>
          </Picker>


        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/oil-industry/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Tank Length"
              keyboardType="numeric"

              onChangeText={(tanklen) => this.setState({tanklen})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/oil-industry/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Tank Breadth"
              keyboardType="numeric"

              onChangeText={(tankbre) => this.setState({tankbre})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/oil-industry/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Tank Height"
              keyboardType="numeric"

              onChangeText={(tankwid) => this.setState({tankwid})}/>
        </View>
         <Picker
             style={styles.inputContainer}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue,itemIndex)=>this.setState({PickerValue:itemValue})}>
            <Picker.Item label="Pick Tank's State" value=""/>
             <Picker.Item label="true" value="true"/>
              <Picker.Item label="false" value="false"/>
          </Picker>


<View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/three-cell-cyclorama-lights/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Level [1-100]"
              keyboardType="numeric"

              onChangeText={(level) => this.setState({level})}/>
        </View>

         <View style={styles.containbar}>
        <TouchableHighlight style={[styles.button]}  onPress={this.t1signup}  >
          <Text style={styles.signUpText}>ADD TANK</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button]} onPress={this.tsignup} >
          <Text style={styles.signUpText}>NEXT ---> </Text>
        </TouchableHighlight>

        </View>
</View>
       );

	}
	}
  const styles = StyleSheet.create({
    container: {
     padding: 20
    },
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom:10

    },
    titleText:{
        color: '#000000',
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 34,
        alignItems: 'center',
        paddingBottom:5

    },
    logo: {
        position: 'relative',
        width: 300,
        height: 100,

    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000000'
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#d5dfef',

      borderBottomWidth: 1,
      width:320,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#ffffff',
      fontSize:20,
      color:'#020e21',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  containbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#0e50ba',
    width: '40%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30
  },
  signUpText: {
    color: 'white',
    fontSize:12
  }
  })
