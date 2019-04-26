import React, { Component } from 'react';

// Stylesheets
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-animated-slider/build/horizontal.css';
import './styles/App.scss';

// Routing
import AppRouter from './routers/AppRouter';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppRouter />
      </div>
    );
  }
}

export default App;
