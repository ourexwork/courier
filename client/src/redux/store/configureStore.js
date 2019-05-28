import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from '../reducers/auth';
import testimonialsReducer from '../reducers/testimonial';
import { userReducer } from '../reducers/user';
import { shipmentReducer } from '../reducers/shipments';
import { errorReducer } from '../reducers/error';

// import filterReducer from '../reducers/filtersReducer';
// import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      error: errorReducer,
      form: formReducer,
      shipments: shipmentReducer,
      users: userReducer,
      testimonials: testimonialsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
