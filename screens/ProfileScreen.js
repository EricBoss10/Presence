import React, {Component} from 'react'
import { 
    View,
    Text,
    Image,
    StyleSheet, 
    Button
 } from "react-native";
 import { StackNavigator } from 'react-navigation';


class ProfileScreen extends Component{
    static navigationOptions = {
        title: 'Profile',
      };


    render(){
        const {goBack} = this.props.navigation;
        return(
            <View style ={styles.MainContainer}>
                    <Image source={'../assets/images/foto.png'} style={{width:60, height:60}}/>
                    <Text style={styles.TextComponentStyle}>{this.props.navigation.state.params.codigo_user}</Text>
                    <Button title="Click to Logout " onPress={()=>goBack(null)}/>
            </View>
        )
    }
 }

 export default MainProject = StackNavigator(
    {
       First: { screen: LoginScreen },
       
       Second: { screen: ProfileScreen }
     
    });

 const styles = StyleSheet.create({
    MainContainer:{
        justifyContent: 'center',
        flex:1,
        margin: 10,
     },
     TextComponentStyle: {
        fontSize: 20,
       color: "#000",
       textAlign: 'center', 
       marginBottom: 15
      }
 });


 

