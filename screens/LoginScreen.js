import React , {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import createBottomTabNavigator from '../navigation/MainTabNavigator'


const botaoPresionado = () => {
  // Alert.alert('Fazendo login...');
    //this.props.navigation.navigate('Dashboard')
    
}

class LoginScreen extends React.Component{
    static navigationOptions = {
        header: null,
      };
      constructor(props){
        
        super(props)

        this.state={
        
          UserCodigo:'',
          UserPassword:''

        }
      }
    UserLoginFunction = () =>{
        const {UserCodigo}= this.state;
        const {UserPassword}= this.state;

        fetch('localhost/MyApi/include/UserLogin.php', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                codigo_user: UserCodigo,
                password_hash: UserPassword
            })
        }).then((response)=>response.json())
            .then((responseJson) => {
                if(responseJson === 'Login com sucesso'){
                    this.props.navigation.navigate('second', {Codigo: UserCodigo});
                }else{
                    Alert.alert(responseJson);
                }
            }).catch((error)=>{console.error(error);});
    }
    render() {
        return (
            <View style={estilo.principal}>
                <View style={estilo.secundo}>
                    <View>
                        
                        <Text style={estilo.titulo}>UNI<Text style={estilo.titulo2} >-CV</Text></Text>
                    </View>

                    <View> 
                        <Text>Codigo *</Text>
                        <TextInput placeholder="Codigo" 
                            style={estilo.entrada }  
                            onChangeText={UserCodigo =>this.setState({UserCodigo})}
                        />
                    </View>
                    <View>
                        <Text>Password *</Text>
                        <TextInput placeholder="Password" secureTextEntry={true} 
                            style={estilo.entrada } 
                            underlineColorAndroid='transparent'
                            onChangeText={UserPassword => this.setState({UserPassword})}
                        />
                    </View>
                    <View>
                        <TouchableOpacity onPress={this.UserLoginFunction} style={estilo.botao}><Text style={estilo.botaoText}>Entrar</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
} 

const estilo = StyleSheet.create({
    entrada:{
        width:300,
        height:40,
        borderColor: 'gray',
        borderWidth:0,
        backgroundColor: 'white',
        borderWidth:1,
        marginBottom:10,
        textAlign: 'center',
        color: '#424242',
        fontSize:20,
    },
    principal:{
        backgroundColor: '#BDBDBD',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao:{
        backgroundColor: '#D50000',
        width:300,
        alignItems: 'center',
        marginTop:30,
        height:40,
        padding:5
        
    },
    botaoText:{
        color: '#FFF',
        fontSize:20
    },
    titulo:{
        fontSize:30,
        marginTop: -20,
        color: '#B71C1C',
        fontWeight: 'bold'

    },
    titulo2:{
        color: '#424242',
    },
    secundo:{
        backgroundColor: '#fff',
        width:320,
        justifyContent: 'center',
        alignItems: 'center',
        height:380
    }
})

AppRegistry.registerComponent('LoginScreen' ,() => LoginScreen);