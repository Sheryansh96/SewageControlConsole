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
  ListView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import renderIf from './renderIf';

export default class SignUp2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      UserID: '',
      password: '',
      PickerValue:'',
      answer:[],
      PickerValue2:'',
    }
  }
  findSTP = () =>{

      fetch('http://192.168.0.104:8080/findSTP', {
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
      this.setState({answer:res})
      console.log(this.state.answer)
    }).catch(err=>
    {console.log("Eooro")
      console.log(err)});
    }

    renderRow(rowData) {
       return (<Text>{rowData.id}</Text>);
    }



addTank(id){
  console.log("in add tank "+id)
  fetch('http://192.168.0.104:8080/addtank', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: this.state.UserID,
    id : id
  })
})
.then((response)=> response.json())
.then((res) => {
  console.log(res)
  this.props.navigation.navigate("Home")
}).catch(err=>
{console.log("out")
  console.log(err)});
}

  signup = () =>{
    console.log(this.state.UserID)
    console.log(this.state.password)
    console.log(this.state.PickerValue)
    console.log(this.state.PickerValue2)
    fetch('http://192.168.0.104:8080/signup', {
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
    console.log(this.state.PickerValue)
      if(String(this.state.PickerValue) == 'admin'){
        this.props.navigation.navigate("StSetup",{Userid:this.state.UserID})
      }
      else{
      this.addTank(this.state.PickerValue2)
    }


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

  validate = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  if(reg.test(text) === false)
  {
  console.log("Email is Not Correct");
  this.setState({email:text})
  return false;
    }
  else {
    this.setState({email:text})
    console.log("Email is Correct");
  }
  }

  render() {
    const {navigate} = this.props.navigation;
    const helloMessage = <Text> Hello, JSX! </Text>;
    const goodbyeMessage = <Text> Goodbye, JSX! </Text>;
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
              onChangeText={(text) => this.validate(text)}
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
            onValueChange={ (itemValue,itemIndex)=>this.setState({PickerValue:itemValue}, this.findSTP)}>
            <Picker.Item label="Choose your role" value=""/>
             <Picker.Item label="Admin" value="admin"/>
              <Picker.Item label="Operator" value="Operator"/>
              <Picker.Item label="Supervisor" value="supervisor"/>
        </Picker>
        {renderIf(this.state.PickerValue == 'Operator' || this.state.PickerValue == 'supervisor' ,
          <Picker
              style={styles.inputContainer}
              selectedValue={this.state.PickerValue2}
              onValueChange={(itemValue,itemIndex)=>{console.log("Item value",itemValue);this.setState({PickerValue2:itemValue})}}>
                <Picker.Item label="Choose your STP" value=""/>
              {this.state.answer.map((item) => {
                  return(<Picker.Item label={item.name} value={item.id}/>)
              })}
          </Picker>

        )}

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
