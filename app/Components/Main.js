import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import Note from './Note';
import {DrawerNavigator} from 'react-navigation';
import { Header,Icon,Button,Container,Content,Left } from 'react-native-elements';
export default class Main extends Component {

  constructor(props){
    super(props);
    this.state ={
      noteArray: [],
      noteText:'',

    }
  }
static navigationOptions = {
  drawerLabel:"Main",
};


  render() {

    let notes = this.state.noteArray.map((val,key) => {
      return <Note key={key} keyval={key} val={val}
      deleteMethod={ ()=> this.deleteNote(key) }/>
    });
    return (
      <View style = {{ flex:1 }}>
      <Header
      placement="left"
      leftComponent= {<Icon name='menu' onPress={()=>this.props.navigation.openDrawer()} />}
      centerComponent={{ text: 'Logs', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }} />
      <View style={styles.container}>
      
      <ScrollView style={styles.scrollContainer}>
      {notes}
      </ScrollView>

      <View style={styles.footer}>
      <TextInput style={styles.TextInput}
      onChangeText={(noteText) => this.setState({noteText})}
      value={this.state.noteText}
      placeholder='> Update'
      placeholderTextColor='white'
      underlineColorAndroid='transparent'>
      </TextInput>

      </View>
      <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>


      </View>
      </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      var d = new Date();
      this.state.noteArray.push({
        'date':d.getFullYear()+"/"+(d.getMonth() + 1)+"/"+d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header:{
    backgroundColor:'#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText:{
    color:'white',
    fontSize:18,
    padding:26,
  },
  scrollContainer: {
    flex:1,
    marginBottom: 100,
  },
  footer:{
    position:'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  TextInput:{
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#2d2d2d',
    borderTopWidth: 2,
    borderTopColor: 'white',
  },
  addButton:{
    position: 'absolute',
    zIndex:11,
    right:20,
    bottom: 90,
    backgroundColor:'#E91E63',
    width: 90,
    height: 90,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 50,
  },
});
