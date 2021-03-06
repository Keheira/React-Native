import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBjC7ETTb1T_yBm_AVeYNlEFG8bUiY2LdY',
            authDomain: 'auth-a067e.firebaseapp.com',
            databaseURL: 'https://auth-a067e.firebaseio.com',
            projectId: 'auth-a067e',
            storageBucket: 'auth-a067e.appspot.com',
            messagingSenderId: '729313455643'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return (
                    <Button onPress=(() => firebase.auth.signOut())>Log Out</Button>
                );
            case false:
                return <LoginForm />
            default:
            return <Spinner size="large"/>
        }
        if(this.state.loggedIn){
            
        }
        r
    }


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
}

export default App;