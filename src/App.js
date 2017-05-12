import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAIciNsOwKUEuqZt6SgZ0_a0j7txxaFXEU',
      authDomain: 'manager-ccc5d.firebaseapp.com',
      databaseURL: 'https://manager-ccc5d.firebaseio.com',
      projectId: 'manager-ccc5d',
      storageBucket: 'manager-ccc5d.appspot.com',
      messagingSenderId: '681413255498'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  } // end of Render
} // end of App

export default App;
