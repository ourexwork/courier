import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        <h1>Geo Coordinates by Address v2</h1>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <h4>
                A BETTER WAY to get the latitude and longitude of an address
                using jQuery, and the{' '}
                <a
                  href='https://github.com/ubilabs/geocomplete'
                  target='_blank'
                >
                  geocomplete
                </a>{' '}
                plugin.
              </h4>
              <hr />
              <form id='property'>
                <div class='form-group'>
                  <input
                    type='text'
                    name='name'
                    class='form-control'
                    id='address'
                    placeholder='Address'
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='text'
                    name='lat'
                    class='form-control'
                    placeholder='Latitude'
                    readonly
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='text'
                    name='lng'
                    class='form-control'
                    placeholder='Longitude'
                    readonly
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
