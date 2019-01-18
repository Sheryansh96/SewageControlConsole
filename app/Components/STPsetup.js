import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image,Picker } from 'react-native';

export default class StSetup extends Component{
   constructor(props) {
    super(props);
    this.state = {
      stpname: '',
      stpstreet:'',
      stpstate:'',
      stppin:'',

    }
  }
  tsetup(id){
    console.log(this.state.stpname)
    console.log(this.state.stpstreet)
    console.log(id)
    fetch('http://192.168.0.104:8080/setstp', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: this.state.stpname,
      street : this.state.stpstreet,
      state: this.state.stpstate,
      pin:this.state.stppin,
      user:id,
    })
  })
  .then((response)=> response.json())
  .then((res) => {
    console.log(res)
      this.props.navigation.navigate("TankSetup",{id:res.id})

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
      alert("Select a state");
    }
    else
    {
      alert("Your Tank Status is "+data);
    }
  }


	render(){
    const { navigation } = this.props
    const id = navigation.getParam('Userid')
    console.log('Hello ',id)
		return(
			<View style={styles.container}>
           <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../Components/images/login_icon.jpg')} />


          <Text style={styles.titleText}> STP SET-UP </Text>
          </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/oil-industry/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="STP Name"
              keyboardType="email-address"

              onChangeText={(stpname) => this.setState({stpname})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="STP Street"
              keyboardType="email-address"

              onChangeText={(stpstreet) => this.setState({stpstreet})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="STP State"
              keyboardType="email-address"

              onChangeText={(stpstate) => this.setState({stpstate})}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/envelope/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="STP Pin"
              keyboardType="numeric"

              onChangeText={(stppin) => this.setState({stppin})}/>
        </View>




        <TouchableOpacity style={styles.buttonContainer}
                     onPress={()=>this.tsetup(id)}>
             <Text  style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
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

    },
    titleText:{
        color: '#000000',
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 34,
        alignItems: 'center',
        paddingBottom:20

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
    buttonContainer:{
        backgroundColor: '#043b93',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
  })
