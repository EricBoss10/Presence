import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native'

const styles =StyleSheet.create({
    alunoItem:{
        flexDirection: "row",    
        backgroundColor: "#FFFFFF",    
        borderBottomColor: "#AAAAAA",    
        borderBottomWidth: 2,    
        padding: 5,    
        height: 175 
    },
    cover:{flex:1, height:100, resizeMode: "contain"},
    info:{
        flex: 3,    
        alignItems: "flex-end",    
        flexDirection: "column",    
        alignSelf: "center",    
        padding: 20
    },
    name:{fontSize:18},
    codigo:{fontSize:17, fontWeight:"bold"}
})

export default class AlunoItem extends React.Component{
    render(){
        return(
            <View style={styles.alunoItem}>
                <Image style={styles.cover} source=''/>
                <View style={styles.info}>
                    <Text style={styles.name}>{this.props.first_name}</Text>
                    <Text style={styles.codigo}>{this.props.codigo}</Text>

                </View>

            </View>
        )
    }
}

_renderItem =({item}) =>{
    return(
        <AlunoItem
            coverUrl={item.photo}
            codigo={item.key}
            name={item.first_name}
        />
    )
}

_addKeysToAluno = aluno =>{
    return aluno.map(aluno=>{
        return Object.assign(aluno, {key: aluno.codigo})
    })
}

