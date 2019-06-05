 import React from 'react'
 import {StyleSheet, FlatList} from 'react-native'

import AlunoItem from './ListAlunoItemScreen'
//import { FlatList } from 'react-native-gesture-handler';

const ListAlunos = [
  {
    rank: 1,
    first_name: "Kelton",
    Codigo: "43394",
    photo:"0"
  },
  {
    rank: 2,
    first_name: "Katia",
    Codigo: "43594",
    photo:"0"
  },
  {
    rank: 3,
    first_name: "Gelson",
    Codigo: "43391",
    photo:"0"
  },
  {
    rank: 4,
    first_name: "Erick",
    codigo: "43358",
    photo:"0"
  },
  {
    rank: 5,
    first_name: "Ricardino",
    Codigo: "43386",
    photo:"0"
  },
]

export default class ListAlunoScreen extends React.Component{
  constructor(props){
    super(props);
    this.state ={data: this._addKeysToAluno(ListAlunos)}
  }
  _renderItem = ({item}) => {
    return(
      <AlunoItem
        coverUrl={item.photo}
        name={item.first_name}
        codigo={item.key}
      />
    )
  }

  _addKeysToAluno = aluno =>{
    return aluno.map(aluno => {
      return Object.assign(aluno, {key: aluno.codigo})
    })
  }
    render(){
        return <FlatList data={this.state.data} renderItem={this._renderItem}/>
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
  });