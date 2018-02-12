/**
 * Backpack Media
 */

import React, { Component } from 'react';
import { StyleSheet, View, ListView, AlertIOS } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/reducers/reducer'
import Header from './components/Header'
import Button from './components/Button'
import ListItem from './components/ListItem'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      <Header title="ToDo with Redux"/>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem.bind(this)}
        enableEmptySections={true}
        style={styles.listview}/>
      <Button title="Add Item" onPress={this.addItem.bind(this)} />
      </View>
      </Provider>
    );
  }

  renderItem(item) {
    const onPress = () => {
      AlertIOS.prompt(
        'Edit Item',
        'current item is ' + item.title,
        [
          {text: 'Cancel', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: (text) => this.itemsRef.child(item._key).update({title: text})},
        ],
      )
    };

    return(
        <ListItem item={item} onPress={onPress} onLongPress={this.props.complete}/>
    );
  }

  addItem() {
    AlertIOS.prompt(
      'Add Item',
      null,
      [
          {text: 'Cancel', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: (text) => this.props.add({text})},
       ],
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
