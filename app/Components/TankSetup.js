import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image,Picker } from 'react-native';
import Status from './Status';
export default class Setup extends Component{
   constructor(props) {
    super(props);
    this.state = {
      tankid: '',
      tanklen: '',
      tankbre:'',
      tankwid:'',
      PickerValue:'',
      level:''
    }
  }
  tsignup(id){
    console.log(this.state.tankwid)
    console.log(this.state.tanklen)
    console.log(this.state.tankbre)
    console.log(id)
    fetch('http://192.168.43.96:8080/settank', {
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
      alert("Select a state");
    }
    else
    {
      alert("Your Tank Status is "+data);
    }
  }


	render(){
    const { navigation } = this.props
    const id = navigation.getParam('id')
    console.log(id)
		return(
			<View style={styles.container}>
           <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../Components/images/login_icon.jpg')} />


          <Text style={styles.titleText}> TANK SET-UP </Text>
          </View>
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
            <Picker.Item label="Pick State" value=""/>
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




        <TouchableOpacity style={styles.buttonContainer}
                     onPress={()=>this.tsignup(id)}>
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
