import React, { Component } from 'react'; 
import {  View,  Text, StyleSheet } from 'react-native';
//import { styles } from './styles'; 
import Icon from 'react-native-vector-icons/FontAwesome';
//import {styles} from '../components/styles';
import Alunos from './ListAlunoScreen';

export default class Screen extends Component {  
    static navigationOptions = {
        tabBarLabel: 'Dashboard',
        title:'Dashboard',
      };
   
    render() {    
           
        return (
        <View style={estilo.container}>      
            <Alunos/> 
        </View> 
        )
    } 
}

const estilo = StyleSheet.create({
    container: {    
        paddingTop: 30,    
        flex: 1  
      },
    paragraphText: {    
        fontSize: 16,    
        lineHeight: 20,  
      },
    titleText: {    
        fontSize: 24,    
        lineHeight: 30,
      },
      primaryButton: {    
        padding: 20,    
        backgroundColor: '#124473'  
      },
      primaryButtonText: {   
        color: '#FFF',    
        textAlign: 'center',  
      },
      altButton: {    
        padding: 20,    
        backgroundColor: '#23CdA4'  
      },
      altButtonText: {    
          color: '#FFF',    
          textAlign: 'center',  
      } 
  }); 
