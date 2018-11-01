import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Picker
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SignUp2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserID: '',
      password: '',
      PickerValue:''
    }
  }
  signup = () =>{
    console.log(this.state.UserID)
    console.log(this.state.password)
    console.log(this.state.role)
    fetch('http://192.168.0.102:8080/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: this.state.UserID,
      password: this.state.password,
      role : this.state.PickerValue,
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
    if(data=='')
    {
      alert("Select a role");
    }
    else
    {
      alert(data);
    }
  }
   static navigationOptions = {
    title: 'Profile',
  };


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../Components/images/login_icon.jpg')} />
          <Text style={styles.titleText}> STP </Text>
         </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="User ID"
              keyboardType="email-address"

              onChangeText={(UserID) => this.setState({UserID})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email ID"
              keyboardType="email-address"

              />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}

              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/calendar/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Age"
              keyboardType="numeric"

              onChangeText={(PickerValue) => this.setState({PickerValue})}/>
        </View>
        <Picker
             style={styles.inputContainer}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue,itemIndex)=>this.setState({PickerValue:itemValue})}>
            <Picker.Item label="Choose your role" value=""/>
             <Picker.Item label="Admin" value="admin"/>
              <Picker.Item label="Operator" value="Operator"/>
              <Picker.Item label="Supervisor" value="supervisor"/>



          </Picker>


        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.signup}>
          <Text style={styles.signUpText}> Sign Up </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
   logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',

    },
    titleText:{
        color: '#000000',
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 60

    },
    logo: {
        position: 'relative',
        width: 300,
        height: 100,

    },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#d5dfef',

      borderBottomWidth: 1,
      width:250,
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
  buttonContainer: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#0e50ba",
  },
  signUpText: {
    color: 'white',
    fontSize:12
  }
});
