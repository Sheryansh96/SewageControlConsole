import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,Image, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import Main from './app/Components/Main';
import Status from './app/Components/Status';
import Login from './app/Components/Auth';
import SignUp2 from './app/Components/SignUp2';
import img from './Image/STP.png';
import { createDrawerNavigator, DrawerItems, StackNavigator,createStackNavigator } from 'react-navigation';
import { Header,Icon,Button,Container,Content,Left,Body } from 'native-base';
export default class App extends Component{
  render(){
    return (
      <Myapp />
    );
  }
}
const CustomDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{ height:200, justifyContent:'center', alignItems:'center'}}>
    <Body>
        <Image
          style = {styles.drawerImage}
          source ={ img } />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>

  </Container>
)
const Myapp = createDrawerNavigator({
  Status:{
    screen:Status
  },
  Main:{
    screen:Main
  },
  Home:{screen : Login},
  Profile:{screen : SignUp2},
},{
  initialRouteName:'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
},

)


const styles = StyleSheet.create({
  container: {
    flex:1,

  },
  drawerImage :{
    height:150,
    width:150,
    borderRadius:75,
  },
});
