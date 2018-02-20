/**
 * Backpack Media
 */

import React, { Component } from 'react';
import { View, ListView, AlertIOS, TextInput } from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './components/store'
import { add, complete } from './components/actions/index'
import Header from './components/Header'
import Button from './components/Button'
import ListItem from './components/ListItem'

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      text: ''
    };
  }

  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
        <Header title="ToDo with Redux"/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>
        <View style={styles.input}>
          <TextInput
            style={styles.text}
            placeholder = "Item Name"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button title="Add Item" onPress={this.addItem.bind(this)} />
        </View>
        </View>
      </Provider>
    );
  }

  renderItem(item) {
    const onPress = () => {
      AlertIOS.prompt(
        'Done?',
        'Did you complete this item?',
        [
          {text: 'Cancel', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: (text) => this.props.complete({complete: true})},
        ],
      )
    };

    return(
        <ListItem item={item} onPress={onPress}/>
    );
  }

  addItem() {
    console.log('This is the state: ' + store.getState())
    add(this.state.text)
    this.setState({
      text: ''
    })
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  text: {
    width: 300,
    height: 20,
    alignSelf: 'center'
  }
};

connect()(App)
