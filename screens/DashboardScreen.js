import React, { Component } from 'react'; 
import {  View,  Text } from 'react-native';
import { styles } from './styles'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '..components/styles'

export default class Screen extends Component {  
    static navigationOptions = {    
        title: 'Dashboard',    
        tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} />  
    }
    user() {    
        const { rootNavigation } = this.props.screenProps;    
        return rootNavigation.state.params.user;  
    }
    render() {    
        const { name, email } = this.user();    
        return 
        <View style={styles.container}>      
            <Text style={styles.titleText} >{`Welcome, ${name} <${email}>,      let's get cooking!`}</Text>    
        </View>  
    } 
}
