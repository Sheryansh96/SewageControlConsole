import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet,Image, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import Log from './app/Components/Main';
import Status from './app/Components/Status';
import Login from './app/Components/Auth';
import SignUp2 from './app/Components/SignUp2';
import TankSetup from './app/Components/TankSetup';
import Tank from './app/Components/Tank';
import img from './Image/STP.png';
import StSetup from './app/Components/STPsetup'
import { createDrawerNavigator, DrawerItems, StackNavigator,createStackNavigator } from 'react-navigation';
import { Header,Icon,Button,Container,Content,Left,Body } from 'native-base';
export default class App extends Component{
  render(){
    return (
      <Myapp />
    );
  }
}
class Hidden extends React.Component {
  render() {
    return null;
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
  Log:{
    screen:Log
  },
  Logout:{
    screen:Login
  },
  Home:{screen : Login,
    navigationOptions: {
      drawerLockMode: "locked-closed",
       drawerLabel: <Hidden />
     }},
  Profile:{screen : SignUp2,navigationOptions: {
      drawerLockMode: "locked-closed",
     drawerLabel: <Hidden />
   }},
   StSetup:{
     screen:StSetup,navigationOptions: {
         drawerLockMode: "locked-closed",
        drawerLabel: <Hidden />
      }
   },
   TankSetup:{
     screen : TankSetup,navigationOptions: {
         drawerLockMode: "locked-closed",
        drawerLabel: <Hidden />
      }
   }
},{
  initialRouteName:'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
},

)

Myapp.navigationOptions = ({ navigation }) => {
 name = (navigation.state.index !== undefined ? navigation.state.routes[navigation.state.index] : navigation.state.routeName)
  let drawerLockMode = 'locked-closed'
  if (name.routeName != 'Login' && name.routeName != 'SignUp2') {
    drawerLockMode = 'unlocked'
  }

  return {
    drawerLockMode,
  };
}


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
