import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
// Stylesheets
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-animated-slider/build/horizontal.css';
import './styles/App.scss';

// Routing
import AppRouter from './routers/AppRouter';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store = {store} >
      <div className='App'>
        <AppRouter />
      </div>
      </Provider>

    );
  }
}

export default App;
