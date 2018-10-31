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
  Picker,
  AsyncStorage,
} from 'react-native';
import Status from './Status';
import { StackNavigator } from 'react-navigation';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserID: '',
      password: '',
      PickerValue:''
    }
  }

login = () =>{
  console.log(this.state.UserID)
  console.log(this.state.password)
  fetch('http://192.168.43.96:8080/login', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: this.state.UserID,
    password: this.state.password,
  })
})
.then((response)=> response.json())
.then((res) => {
  console.log(res)
      if(res.code == 0){
        var user = res.message;
        console.log(user)
        AsyncStorage.setItem('User', user);
        this.props.navigation.navigate("Status")
      }else{
        alert(res.mesage);
      }

}).catch(err=>
{console.log(err)});
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
    title: 'Home',
  };



  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('./images/login_icon.jpg')} />
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
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}

              onChangeText={(password) => this.setState({password})}/>
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

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.login}>
          <Text style={styles.signUpText}>Log In</Text>
        </TouchableHighlight>
         <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener('forgot_password')}>
          <Text style={styles.signUpText}>Forgot Password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={()=> navigate('Profile')}>
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
