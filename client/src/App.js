import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import { startSetUsers} from './redux/actions/user';
import { startSetShipments} from './redux/actions/shipment';
// Stylesheets
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-animated-slider/build/horizontal.css';
import './styles/App.scss';

//cors
// import './setupProxy'

// Routing
import AppRouter from './routers/AppRouter';

const store = configureStore();
store.dispatch(startSetUsers());
store.dispatch(startSetShipments())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <AppRouter />
        </div>
      </Provider>
    );
  }
}

export default App;
