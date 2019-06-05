import React from 'react'
import Row from './Row'
import { View, ListView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },
  });
  
  class ListViewDemoScreen extends React.Component {
    constructor(props) {
        super(props);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
      }
    render() {
        return (
            <ListView
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(data) => <Row {...data} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          );
    }
  }
  
  export default ListViewDemoScreen;