import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
export default class Setup extends Component{
	render(){
		return(
			<View style={styles.container}>
           <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require('../Components/images/login_icon.jpg')} />
          <Text style={styles.titleText}> STP </Text>
         </View>
        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='TANK LENGTH' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>
        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='TANK HEIGHT' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>

<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='TANK BREADTH' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>

<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='SENSOR 1' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>

<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='SENSOR 2' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>
<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='DURATION' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>
<TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='numeric' 
               returnKeyType="next" 
               placeholder='TURNS IN A DAY' 
               placeholderTextColor='rgba(0,0,0,1.0)'/>


         


        <TouchableOpacity style={styles.buttonContainer} 
                     >
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
        fontSize: 60

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
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
  })