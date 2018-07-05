import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './components/Header';
import MovieList from './components/MovieList';

import store from './store';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <MovieList />
        </div>
      </Provider>
    );
  }
}

export default App;
